import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import Firebase from "../config/Firebase";

class Login extends React.Component {
  state = {
    parent_name: "",
    parent_email: "",
    password: "",
    isError: false,
  };
  handleLogin = () => {
    const { parent_name, parent_email, password } = this.state;

    Firebase.auth()
      .signInWithEmailAndPassword(parent_email, password)
      .then(() =>
        this.props.navigation.navigate("Profile", {
          email: this.state.parent_email,
          name: this.state.parent_name,
        })
      )
      .catch((error) => this.setState({ isError: true }));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.props.parent_email}
          onChangeText={(parent_email) => this.setState({ parent_email })}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.props.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {this.state.isError && (
          <Text style={styles.errorText}>
            Sorry, could you try again please?
          </Text>
        )}
        <TouchableOpacity
          style={styles.buttonSignup}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text style={styles.buttonSignUpText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignup}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.buttonSignUpText}>↰ Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  button: {
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
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  buttonSignUpText: {
    fontSize: 15,
    color: "#fff",
  },
  errorText: {
    fontSize: 14,
    fontWeight: "800",
    color: "red",
  },
  buttonSignup: {
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

export default Login;
