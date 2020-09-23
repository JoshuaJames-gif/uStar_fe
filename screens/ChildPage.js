import React, { Component } from "react";
import * as api from "../utils/api";

import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  ScrollView,
} from "react-native";
import TasksPage from "./TasksPage";
import RewardsPage from "./RewardsPage";
class ChildPage extends Component {
  state = {
    isParentLoggedIn: false,
    child: {},
    showRewards: false,
  };
  getChildByChildId = (child_id) => {
    api.fetchChildByChildId(child_id).then((child) => {
      this.setState({ child });
    });
  };
  componentDidMount = () => {
    this.getChildByChildId(7);
  };
  render() {
    const {
      showRewards,
      isParentLoggedIn,
      child: { child_name, star_count, child_id },
    } = this.state;

    return (
      <View style={styles.container}>
        <Text>
          Hi {child_name}, you currently have {star_count} stars.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ showRewards: !showRewards });
          }}
        >
          <Text style={styles.buttonText}>
            {showRewards ? "Show Tasks" : "Show Rewards"}
          </Text>
        </TouchableOpacity>
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 300,
    width: 500,
    overflow: "hidden",
    borderRadius: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  listItem: {
    padding: 10,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: "black",
  },
  list: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 20,
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
