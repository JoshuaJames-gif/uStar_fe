import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SwitchNavigator from "./navigation/SwitchNavigator";
import ChildLogin from "./screens/ChildLogin";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SwitchNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#264653",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
