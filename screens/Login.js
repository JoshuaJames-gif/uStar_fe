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

class Login extends React.Component {
  state = {
    parent_name: "",
    parent_email: "",
    password: "",
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
      .catch((error) => console.log(error));
    // api.getParent(parent_email, parent_name).then((parent) => {
    //   this.setState({
    //     parent_name: parent.parent_name,
    //     parent_email: parent.parent_email,
    //   });
    // });
  };

  // storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem("Login", jsonValue);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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

        <TouchableOpacity
          style={styles.buttonSignup}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text style={styles.buttonSignUpText}>
            Don't have an account yet? Sign up
          </Text>
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
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#E76F51",
    borderColor: "#E76F51",
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
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignup: {
    fontSize: 12,
    borderRadius: 5,
    height: 30,
    width: 300,
    backgroundColor: "#FFA611",
    overflow: "hidden",
    borderColor: "#FFA611",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
