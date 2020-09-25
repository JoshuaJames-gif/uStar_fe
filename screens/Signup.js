import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Firebase from "../config/Firebase";
import * as api from "../utils/api";
import ButtonStyles from "../styles/buttonStyle";
import { Button } from "react-native-paper";

class Signup extends React.Component {
  state = {
    parent_name: "",
    parent_email: "",
    password: "",
    isError: false,
  };

  handleSignUp = (event) => {
    const { parent_name, parent_email, password } = this.state;
    event.preventDefault();
    api.postParent(parent_email, parent_name);
    Firebase.auth()
      .createUserWithEmailAndPassword(parent_email, password)
      .then(() =>
        this.props.navigation.navigate("Profile", {
          email: this.state.parent_email,
          name: this.state.parent_name,
        })
      )
      .catch((error) => this.setState({ isError: true }));
  };
  handleBackHome = () => {
    this.props.navigation.navigate("Home", {
      email: this.state.parent_email,
      name: this.state.parent_name,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.state.parent_name}
          onChangeText={(parent_name) => this.setState({ parent_name })}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.parent_email}
          onChangeText={(parent_email) => this.setState({ parent_email })}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={
            this.state.parent_email === "" ||
            this.state.parent_name === "" ||
            this.state.password === ""
              ? styles.disabledButton
              : ButtonStyles.buttonSignUp
          }
          onPress={this.handleSignUp}
          disabled={
            this.state.parent_email === "" ||
            this.state.parent_name === "" ||
            this.state.password === ""
          }
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        {this.state.isError && (
          <Text style={styles.errorText}>
            Sorry, could you try again please?
          </Text>
        )}
        <TouchableOpacity
          style={ButtonStyles.buttonSignUp}
          onPress={this.handleBackHome}
        >
          <Text style={styles.buttonSignUpText}>↰ Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    flex: 0.7,
    height: 500,
    width: 500,
    overflow: "hidden",
    borderRadius: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  disabledButton: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "gray",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
  },
  inputBox: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#FFA611",
    borderColor: "#FFA611",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  errorText: {
    fontSize: 14,
    fontWeight: "800",
    color: "red",
  },
  buttonSignUpText: {
    fontSize: 14,
    color: "white",
  },
  buttonSignup: {
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
});

export default Signup;
