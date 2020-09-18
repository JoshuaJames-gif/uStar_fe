import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Firebase from "../config/Firebase";
import logo from "../assets/logo.png";
import { Avatar, Caption, Title } from "react-native-paper";

class Profile extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfo}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
              size={160}
            />
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                John Doe
              </Title>
              <Caption style={styles.caption}>@J_doe</Caption>
            </View>
          </View>
        </View>

        {/* account details: email & name */}
        {/* Register new child */}
        {/* current ChildList */}
        <View>
          <TouchableOpacity
            style={styles.signOutButton}
            title="Logout"
            onPress={this.handleSignout}
          >
            <Text>Sign Out now </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
