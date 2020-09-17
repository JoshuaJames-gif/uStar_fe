import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Firebase from "../config/Firebase";
import logo from "../assets/logo.png";

class Profile extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.profilecontainer}>
        <View style={styles.profileviewer}>
          <View style={styles.title}>
            <Text>Profile Screen</Text>
          </View>
          {/* avatar */}
          <View>
            <Text style={styles.avatar}>Avatar</Text>
          </View>
          <View>
            <Image source={logo} style={{ width: 305, height: 159 }} />
          </View>
          <View>
            <Image
              source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
              style={{
                width: 305,
                height: 159,
                marginBottom: 5,
                marginTop: 20,
              }}
            />
          </View>
          {/* <Image
          style={styles.newImage}
          source={require("smiling-gold-star.png")}
        /> */}
          {/* account details: email & name */}
          {/* Register new child */}
          {/* current ChildList */}
          <View>
            <Text>{this.props.email}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.signOutButton}
              title="Logout"
              onPress={this.handleSignout}
            >
              <Text>Sign Out! </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profilecontainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
    width: 1000,
  },
  title: {
    flex: 0,
    marginBotton: 100,
    position: "relative",
    alignItem: "flex-start",
    marginBottom: 100,
    backgroundColor: "#fff",
    fontSize: 30,
  },
  signOutButton: {
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
export default Profile;
