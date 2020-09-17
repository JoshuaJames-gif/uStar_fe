import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SwitchNavigator from "./navigation/SwitchNavigator";

class App extends React.Component {
  render() {
    return <SwitchNavigator />;
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
export default App;
