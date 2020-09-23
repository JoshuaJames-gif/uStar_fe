import React, { Component } from "react";
import { render } from "react-dom";

import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  ScrollView,
} from "react-native";
import * as api from "../utils/api";
class PostReward extends Component {
  state = { newReward: { reward_description: "", star_cost: "" } };
  handlePost = (child_id, reward_description, star_cost) => {
    api.createReward(child_id, reward_description, star_cost).then(() => {
      this.props.getRewards(child_id);
      this.setState({ newReward: { reward_description: "", star_cost: "" } });
    });
  };
  render() {
    const { isParentLoggedIn, child_id } = this.props;
    const { newReward } = this.state;
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            value={newReward.reward_description}
            onChangeText={(reward_description) =>
              this.setState((currentState) => {
                return {
                  newReward: { ...newReward, reward_description },
                };
              })
            }
            placeholder="New reward description"
          />
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            value={newReward.star_cost}
            onChangeText={(star_cost) =>
              this.setState((currentState) => {
                return {
                  newReward: { ...newReward, star_cost },
                };
              })
            }
            placeholder="Stars worth"
          />
          <TouchableOpacity
            style={
              newReward.reward_description === "" || newReward.star_cost === ""
                ? styles.disabledButton
                : styles.button
            }
            disabled={
              newReward.reward_description === "" || newReward.star_cost === ""
            }
            onPress={() => {
              this.handlePost(
                child_id,
                newReward.reward_description,
                newReward.star_cost
              );
            }}
          >
            <Text style={styles.buttonText}>Add new reward</Text>
          </TouchableOpacity>
        </View>
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
export default PostReward;
