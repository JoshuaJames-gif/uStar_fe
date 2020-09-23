import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Alert,
  FlatList,
  List,
  ListItem,
} from "react-native";
import Firebase from "../config/Firebase";
import logo from "../assets/logo.png";
import { Avatar, Caption, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

import * as api from "../utils/api";

class Profile extends React.Component {
  state = {
    children: [],
    child_name: "",
    parent_name: this.props.navigation.state.params.name,
    parent_email: this.props.navigation.state.params.email,
  };

  componentDidMount() {
    api
      .getChildrenByParent(this.props.navigation.state.params.email)
      .then((children) => {
        this.setState({ children });
      });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   this.addChild(newChild)
  //   if (prevState.children !== this.state.children) {
  //     this.setState({ children, ...prevState.children });
  //   }
  // }
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
  handleSubmit = (event) => {
    event.preventDefault();
    const { child_name, parent_email } = this.state;
    // this.addChild(child_name);
    console.log(child_name);
    api
      .postChildren(this.props.navigation.state.params.email, 0, child_name)
      .then((child_name) => {});
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
            <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
              {this.props.navigation.state.params.name}
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
            {/* <Text
              style={{
                fontSize: 15,
                color: "#818181",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            > */}
            <View>
              {children.map((child) => (
                <View key={child.child_id}>
                  <Text>{child.child_name}</Text>
                  <Text>{child.star_count}</Text>
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
