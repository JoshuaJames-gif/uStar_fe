import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Image,
} from "react-native";
import Firebase from "../config/Firebase";

class Home extends Component {
  render() {
    return (
      <View style={styles.home}>
        <Image
          style={{ width: 400, height: 400, marginRight: 40 }}
          source={require("../images/newLogo8.png")}
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Parent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => this.props.navigation.navigate("ChildLogin")}
        >
          <Text style={styles.buttonText}>Child </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => this.props.navigation.navigate("HowToUse")}
        >
          <Text style={[styles.signUpText]}>How to use</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  home: {
    flex: 0.5,
    height: 500,
    width: 500,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
    borderRadius: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  buttonLogin: {
    borderRadius: 5,
    height: 30,
    width: 300,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderColor: "#FFA611",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },
  buttonText: {
    fontSize: 15,
    color: "#083464",
    // opacity: 0.5,
  },
  signUpText: {
    fontSize: 15,
    color: "yellow",
  },
  buttonSignUp: {
    fontSize: 12,
    borderRadius: 5,
    height: 30,
    width: 300,
    backgroundColor: "#083464",
    overflow: "hidden",
    borderColor: "yellow",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 5,
  },
});

export default Home;
