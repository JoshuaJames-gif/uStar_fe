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
import AsyncStorage from "@react-native-community/async-storage";

import ImagesPicker from "../components/ImagePicker";

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

  // getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("image");
  //     console.log({ value });
  //     // return value.data != null ? value.data : null;
  //     this.setState({ image: JSON.parse(value) });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  componentDidMount() {
    // this.getData();
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
          <View
            style={{
              padding: 10,
              width: "100%",
              backgroundColor: "#100",
              height: 150,
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../images/smiling-gold-star.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../images/smiling-gold-star.png")}
              stylep={{
                width: 140,
                height: 140,
                borderRadius: 100,
                marginTop: -70,
              }}
            ></Image>
            <ImagesPicker />
            <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
              {this.state.parent_name}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
              {this.props.navigation.state.params.email}
            </Text>
          </View>
          <View
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
            }}
          >
            <Image
              source={{
                uri:
                  "https://www2.le.ac.uk/digitalsignage/slideshow/chemistry/images/archive/upto-dec-16/star.png",
              }}
              style={{ width: 20, height: 20 }}
            ></Image>
            <Text
              style={{
                fontSize: 15,
                color: "#818181",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Register Child:
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.child_name}
              onChangeText={(child_name) => this.setState({ child_name })}
            />
            <TouchableOpacity
              style={styles.addChild}
              onPress={this.handleSubmit}
            >
              <Text>Add Child</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "100%",
              height: 150,
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
              marginTop: 40,
            }}
          >
            <Image
              source={{
                uri:
                  "https://www2.le.ac.uk/digitalsignage/slideshow/chemistry/images/archive/upto-dec-16/star.png",
              }}
              style={{ width: 20, height: 20 }}
            ></Image>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ seeLoginCode: !this.state.seeLoginCode });
                }}
              >
                <Text>
                  {" "}
                  {!this.state.seeLoginCode
                    ? " Show login Codes"
                    : "Hide login Codes"}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              {children.map((child) => (
                <View key={child.child_id}>
                  <Text>{child.child_name}</Text>
                  <Text>{child.star_count}</Text>

                  <Text>
                    {!this.state.seeLoginCode ? "" : child.login_code}
                  </Text>

                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("ChildPage", {
                        isParentLoggedIn: true,
                        child_id: child.child_id,
                      })
                    }
                  >
                    <Text>View</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.handleDelete(child.child_id)}
                  >
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            {/* </Text> */}
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
    padding: 8,
    margin: 10,
    width: 200,
  },
  addChild: {
    borderWidth: 1,
    borderColor: "#777",
    backgroundColor: "orange",
    padding: 8,
    margin: 10,
    width: 100,
  },
});
export default Profile;
