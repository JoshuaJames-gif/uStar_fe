import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import Firebase from "../config/Firebase";
import logo from "../assets/logo.png";
import { Avatar, Caption, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Profile extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfo}>
          <View
            style={{ flexDirection: "row", marginTop: 15, marginBottom: 10 }}
          >
            <Avatar.Image
              source={{
                uri:
                  "https://www2.le.ac.uk/digitalsignage/slideshow/chemistry/images/archive/upto-dec-16/star.png",
              }}
              size={160}
            />

            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                    color: "#fff",
                  },
                ]}
              >
                John Doe
              </Title>
              <Caption style={styles.caption}>@J_doe</Caption>
              <View style={styles.row}>
                <Icon name="email" color="#fff" size={20} />
                <Text style={{ color: "#7777777", marginLeft: 20 }}>
                  john_doe@gmail.com
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Button>
                  <Text>Update Image</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#434568",
            height: 200,
            width: 400,
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5,
            borderColor: "#fff",
            borderWidth: 5,
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "#fff" }}>Register Child:</Text>
          <TextInput
            style={{
              height: 50,
              width: 100,
              borderColor: "#fff",
              marginLeft: 10,
            }}
          />
        </View>
        <View style={{ backgroundColor: "#fff", height: 200, width: 400 }}>
          <Text>ChildList</Text>
        </View>

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
  caption: {
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
});
export default Profile;
