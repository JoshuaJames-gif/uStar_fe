import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import Login from "./components/login";
import Fire from "./fire";
import * as firebase from "firebase";

export default class App extends React.Component {
  state = {};

  render() {
    return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <text>Please Sign in</text>
        <View style={styles.list}>
          <Login />
          <View styles={styles.button}>{/* {signup button} */}</View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>

    )
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
