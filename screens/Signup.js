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

class Signup extends React.Component {
  state = {
    parent_name: "",
    parent_email: "",
    password: "",
  };

  // storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem(
  //       "userProfile",
  //       JSON.stringify({
  //         parent_name: this.state.parent_name,
  //         parent_email: this.state.parent_email,
  //       })
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  handleSignUp = (event) => {
    const { parent_name, parent_email, password } = this.state;
    event.preventDefault();
    api.postParent(parent_email, parent_name);
    this.storeData();
    Firebase.auth()
      .createUserWithEmailAndPassword(parent_email, password)
      .then(() =>
        this.props.navigation.navigate("Profile", {
          email: this.state.parent_email,
          name: this.state.parent_name,
        })
      )
      .catch((error) => console.log(error));
  };
  handleBackToLogin = () => {
    this.props.navigation.navigate("Login", {
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
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignup}
          onPress={this.handleBackToLogin}
        >
          <Text style={styles.buttonSignUpText}>Back to Login!</Text>
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

    flex: 0.5,
    height: 500,
    width: 500,
    overflow: "hidden",
    borderRadius: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignUpText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignup: {
    marginTop: 5,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#E76F51",
    borderColor: "#E76F51",
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    height: 30,
  },
});

export default Signup;
