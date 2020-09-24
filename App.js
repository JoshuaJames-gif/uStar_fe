import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import SwitchNavigator from "./navigation/SwitchNavigator";
import ChildLogin from "./screens/ChildLogin";

class App extends React.Component {
  image = {
    uri:
      "https://i.pinimg.com/originals/b5/02/8c/b5028c0b0bc508d54721514939b164ac.jpg",
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={this.image} style={styles.image}>
          <SwitchNavigator />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#264673",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,

    justifyContent: "center",
  },
});
export default App;
