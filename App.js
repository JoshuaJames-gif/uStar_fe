import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "firebase/auth";
import Header from "./components/header";
import Login from "./components/login";
import Fire from "./fire";
import * as firebase from "firebase";
import Home from "./components/home";
import Signup from "./components/Signup";

// firebase.initializeApp(config);
// const Fire = firebase.initializeApp(config);

export default class App extends React.Component {
  state = {
    user: {},
    // isLoading: false,
    // isAuthenticationReady: false,
    // isAuthenticated: false,
  };

  authListener = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };
  componentDidMount = () => {
    this.authListener();
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* <Text>Please Sign in</Text>
          <View style={styles.list}>
            {this.state.user.email ? <Home /> : <Login />}
            <View styles={styles.button}>{/* {signup button} */}
          <Signup />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
