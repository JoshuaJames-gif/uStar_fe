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
class ChildLogin extends Component {
  render() {
    return (
      <View style={styles.login}>
        <Text>Please enter your 4-digit verification code!</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TextInput
            style={{
              borderWidth: 3,
              height: 50,
              width: 50,
              borderColor: "orange",
            }}
          />
          <TextInput
            style={{
              borderWidth: 3,
              height: 50,
              width: 50,
              borderColor: "orange",
            }}
          />
          <TextInput
            style={{
              borderWidth: 3,
              height: 50,
              width: 50,
              borderColor: "orange",
            }}
          />
          <TextInput
            style={{
              borderWidth: 3,
              height: 50,
              width: 50,
              borderColor: "orange",
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonSignUp}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
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

  inputBox: {
    borderWidth: 1,
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
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ChildLogin;
