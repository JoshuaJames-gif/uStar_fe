import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import Fire from "../fire";
import * as firebase from "firebase";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  onLoginPress = (event) => {
    event.preventDefault();
    Fire.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        (user) => {
          console.log(user);
        },
        (error) => {
          Alert.alert(error.message);
        }
      );
  };

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          value={this.state.password}
        />
        <Button
          onPress={this.onLoginPress}
          title="submit"
          style={styles.login}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  login: {
    backgroundColor: "white",
  },
});
