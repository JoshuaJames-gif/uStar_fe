import React, { Component } from "react";
import { render } from "react-dom";
// class ChildPage extends Component {
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
class PostTask extends Component {
  state = { newTask: { task_description: "", stars_worth: "" } };
  handlePost = (child_id, task_description, stars_worth) => {
    api.createTask(child_id, task_description, stars_worth).then(() => {
      this.props.getTasks(child_id);
      this.setState({ newTask: { task_description: "", stars_worth: "" } });
    });
  };
  render() {
    const { isParentLoggedIn, child_id } = this.props;
    const { newTask } = this.state;
    return (
      <View>
        {isParentLoggedIn && (
          <View style={styles.container}>
            <TextInput
              style={styles.inputBox}
              value={newTask.task_description}
              onChangeText={(task_description) =>
                this.setState((currentState) => {
                  return {
                    newTask: { ...newTask, task_description },
                  };
                })
              }
              placeholder="New task description"
            />
            <TextInput
              style={styles.inputBox}
              keyboardType="numeric"
              value={newTask.stars_worth}
              onChangeText={(stars_worth) =>
                this.setState((currentState) => {
                  return {
                    newTask: { ...newTask, stars_worth },
                  };
                })
              }
              placeholder="Stars worth"
            />
            <TouchableOpacity
              style={
                newTask.task_description === "" || newTask.stars_worth === ""
                  ? styles.disabledButton
                  : styles.button
              }
              disabled={
                newTask.task_description === "" || newTask.stars_worth === ""
              }
              onPress={() => {
                this.handlePost(
                  child_id,
                  newTask.task_description,
                  newTask.stars_worth
                );
              }}
            >
              <Text style={styles.buttonText}>Add new task</Text>
            </TouchableOpacity>
          </View>
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
export default PostTask;
