import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import Firebase from "../config/Firebase";

import * as api from "../utils/api";

class Profile extends React.Component {
  state = {
    children: [],
    child_name: "",
    parent_name: "",
    parent_email: this.props.navigation.state.params.email,
    parent: "",
    seeLoginCode: false,
  };

  componentDidMount() {
    api
      .getChildrenByParent(this.props.navigation.state.params.email)
      .then((children) => {
        this.setState({ children });
      });
    api.getParent(this.props.navigation.state.params.email).then((parent) => {
      this.setState({ parent_name: parent.parent_name });
    });
  }

  handleDelete = (child_id) => {
    api.deleteChild(child_id).then(() => {
      this.setState((currentState) => {
        return {
          children: currentState.children.filter((child) => {
            return child.child_id !== child_id;
          }),
        };
      });
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.children.length !== this.state.children.length) {
      api
        .getChildrenByParent(this.props.navigation.state.params.email)
        .then((children) => {
          this.setState({ children });
        });
    }
  }
  handleSubmit = (event) => {
    const { child_name, parent_email } = this.state;

    console.log(child_name);
    api
      .postChildren(this.props.navigation.state.params.email, 0, child_name)
      .then((child) => {
        this.setState((currentState) => {
          return (currentState.children = [...currentState.children, child]);
        });
      });
  };
  handleSignOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      });
  };

  render() {
    const { children } = this.state;
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={require("../images/newLogo8.png")}
              style={{
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "center",
                width: 250,
                height: 300,
                marginTop: -50,
                marginRight: 36,
              }}
            ></Image>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "yellow",
                padding: 10,
                marginTop: -50,
              }}
            >
              {this.state.parent_name}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "yellow" }}>
              {this.props.navigation.state.params.email}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",

              backgroundColor: "#083464",
              borderColor: "yellow",
              borderWidth: 2,
              width: "80%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Register Child"
              value={this.state.child_name}
              onChangeText={(child_name) => this.setState({ child_name })}
            />
            <TouchableOpacity
              style={styles.addChild}
              onPress={this.handleSubmit}
            >
              <Text style={{ color: "yellow" }}>Add Child</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 50, marginBottom: -30 }}>
            <TouchableOpacity
              style={styles.seeLoginCode}
              onPress={() => {
                this.setState({ seeLoginCode: !this.state.seeLoginCode });
              }}
            >
              <Text style={{ color: "yellow", fontSize: 10 }}>
                {!this.state.seeLoginCode
                  ? " Show login Codes"
                  : "Hide login Codes"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#083464",
              borderColor: "yellow",
              borderWidth: 2,
              width: "80%",
              height: 150,
              padding: 10,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginLeft: 35,
              marginTop: 40,
            }}
          >
            <View>
              {children.map((child) => (
                <View
                  key={child.child_id}
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "yellow",
                      marginRight: 10,
                      marginLeft: 1,
                      marginTop: 6,
                    }}
                  >
                    {child.child_name}
                  </Text>

                  <Text style={{ fontSize: 15, color: "yellow", marginTop: 6 }}>
                    {child.star_count} ⭐
                  </Text>

                  <TouchableOpacity
                    style={styles.ViewButtons}
                    onPress={() =>
                      this.props.navigation.navigate("ChildPage", {
                        isParentLoggedIn: true,
                        child_id: child.child_id,
                      })
                    }
                  >
                    <Text style={{ fontSize: 10, color: "yellow" }}>View</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.DeleteButtons}
                    onPress={() => this.handleDelete(child.child_id)}
                  >
                    <Text style={{ fontSize: 10, color: "white" }}>Delete</Text>
                  </TouchableOpacity>
                  <Text style={{ color: "yellow", marginRight: 10 }}>
                    {!this.state.seeLoginCode ? "" : child.login_code}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <TouchableOpacity
            onPress={this.handleSignOut}
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
              marginTop: 40,
              backgroundColor: "#000",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#fff",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    color: "#fff",
    padding: 8,
    margin: 10,
    width: 150,
  },
  addChild: {
    fontSize: 12,
    borderRadius: 5,
    height: 30,
    width: 80,
    backgroundColor: "#083464",
    overflow: "hidden",
    borderColor: "yellow",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
    marginBottom: 5,
    marginRight: 5,
  },
  seeLoginCode: {
    fontSize: 10,
    borderRadius: 5,
    height: 30,
    width: 100,
    backgroundColor: "#083464",
    overflow: "hidden",
    borderColor: "yellow",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
    marginBottom: 5,
    marginRight: 5,
  },
  child_name: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "yellow",
  },
  ViewButtons: {
    borderRadius: 5,
    height: 30,
    width: 40,
    backgroundColor: "#083464",
    overflow: "hidden",
    borderColor: "yellow",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
    marginBottom: 3,
  },
  DeleteButtons: {
    borderRadius: 5,
    height: 30,
    width: 40,
    backgroundColor: "red",
    overflow: "hidden",
    borderColor: "yellow",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
    marginBottom: 3,

    marginLeft: 10,
  },
});
export default Profile;
