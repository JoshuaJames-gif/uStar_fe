import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import Firebase from "../config/Firebase";

class Home extends Component {
  render() {
    return (
      <View style={styles.home}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Parent Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => this.props.navigation.navigate("ChildLogin")}
        >
          <Text style={styles.buttonText}>Children Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>
            Don't have an account yet? Sign up
          </Text>
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
    backgroundColor: "#fff",
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
    backgroundColor: "#FFA611",
    overflow: "hidden",
    borderColor: "#FFA611",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignUp: {
    fontSize: 12,
    borderRadius: 5,
    height: 30,
    width: 300,
    backgroundColor: "#FFA611",
    overflow: "hidden",
    borderColor: "#FFA611",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -100,
    marginTop: 60,
  },
});

export default Home;
