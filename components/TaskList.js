import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import * as api from "../utils/api";

class TaskList extends Component {
  state = {
    tasks: this.props.tasks,
  };
  // handleReview = (event) => {
  //   const task_id = event.target.id;
  //   console.log(task_id, "<---- handleReview");
  //   const status = this.propsarentLoggedIn ? "completed" : "pending";

  //   api.updateTask(task_id, status).then(() => {
  //  console.log("in handle review then block")
  //     // this.getTasks(this.props.child.child_id);
  //   });
  // };
  render() {
    return (
      <View style={styles.list}>
        {this.props.tasks.map((task) => {
          const { task_status, task_description, stars_worth, task_id } = task;

          // console.log(task_id);
          return (
            <View key={task_id} style={styles.listItem}>
              <Text>The task is to {task_description}</Text>
              <Text>Is worth {stars_worth} ⭐</Text>
              <Text>Status: {task_status}</Text>
              {this.props.isParentLoggedIn ? (
                <TouchableOpacity
                  onPress={this.handleReview}
                  style={
                    task_status === "completed"
                      ? styles.disabledButton
                      : styles.button
                  }
                  disabled={task_status === "completed"}
                >
                  <Text id={task_id} style={styles.buttonText}>
                    Confirm request
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={this.handleReview}
                  style={
                    task_status === "pending"
                      ? styles.disabledButton
                      : styles.button
                  }
                  disabled={task_status === "pending"}
                >
                  <Text id={task_id} style={styles.buttonText}>
                    Request Review{" "}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
    );
  }
}

export default TaskList;

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
});
