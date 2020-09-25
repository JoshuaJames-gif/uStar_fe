import React, { Component } from "react";
import * as api from "../utils/api";
import ButtonStyles from "../styles/buttonStyle";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import TasksPage from "./TasksPage";
import RewardsPage from "./RewardsPage";
class ChildPage extends Component {
  state = {
    isParentLoggedIn: false,
    child: {},
    showRewards: false,
  };
  image = {
    uri:
      "https://i.pinimg.com/originals/b5/02/8c/b5028c0b0bc508d54721514939b164ac.jpg",
  };
  getChildByChildId = (child_id) => {
    api.fetchChildByChildId(child_id).then((child) => {
      this.setState({
        child,
        isParentLoggedIn: this.props.navigation.state.params.isParentLoggedIn,
      });
    });
  };
  componentDidMount = () => {
    this.getChildByChildId(this.props.navigation.state.params.child_id);
  };
  render() {
    const {
      showRewards,
      isParentLoggedIn,
      child: { child_name, star_count, child_id },
    } = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground source={this.image} style={styles.image}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {isParentLoggedIn && (
              <TouchableOpacity
                style={ButtonStyles.listButtons}
                onPress={() => {
                  this.props.navigation.navigate("Profile");
                }}
              >
                <Text style={styles.buttonText}> ↰ Profile</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={ButtonStyles.listButtons}
              onPress={() => {
                this.setState({ showRewards: !showRewards });
              }}
            >
              <Text style={styles.buttonText}>
                {showRewards ? "Tasks" : "Rewards"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={ButtonStyles.Title}>
            {!showRewards ? "Tasks" : "Rewards"}
          </Text>
          {isParentLoggedIn ? (
            <Text style={{ color: "yellow", marginBottom: 10, marginTop: 10 }}>
              {child_name} has {star_count} ⭐
            </Text>
          ) : (
            <Text style={{ color: "yellow", marginBottom: 10, marginTop: 10 }}>
              Hi {child_name}, you have {star_count} ⭐
            </Text>
          )}

          {this.state.showRewards ? (
            <RewardsPage
              child_id={child_id}
              isParentLoggedIn={isParentLoggedIn}
              getChildByChildId={this.getChildByChildId}
            />
          ) : (
            <TasksPage
              child_id={child_id}
              isParentLoggedIn={isParentLoggedIn}
              getChildByChildId={this.getChildByChildId}
            />
          )}
          <Image
            style={{
              width: 200,
              height: 100,
              flex: 0.5,
              alignItems: "left",
              justifyContent: "left",
            }}
            source={require("../images/newLogo8.png")}
          />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 300,
    width: 500,
    overflow: "hidden",
    padding: 20,
  },

  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#E76F51",
    borderColor: "#E76F51",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "gray",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  inputBox: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
});
export default ChildPage;
