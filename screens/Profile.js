import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Firebase from "../config/Firebase";

class Profile extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>{this.props.email}</Text>
        <Button title="Logout" onPress={this.handleSignout} />
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
export default Profile;
