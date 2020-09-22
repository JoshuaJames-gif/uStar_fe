import React, { Component } from "react";
// import { render } from "react-dom";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  ScrollView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import * as api from "../utils/api";

class ChildPage extends Component {
  state = {
    isParentLoggedIn: true,
    child: { child_id: 7, child_name: "James", star_count: 37 },
    tasks: [],
    newTask: { task_description: "", stars_worth: "" },
  };

  getTasks = (child_id) => {
    api.fetchTasksByChild(child_id).then((tasks) => {
      this.setState({ tasks });
    });
  };
  handleReviewPushByChild = (task_id, task_status) => {
    api.updateTaskByChild(task_id, task_status).then(() => {
      this.getTasks(child.child_id);
    });
  };
  handlePost = (child_id, task_description, stars_worth) => {
    api.createTask(child_id, task_description, stars_worth).then(() => {
      this.getTasks(this.state.child.child_id);
      this.setState({ newTask: { task_description: "", stars_worth: "" } });
    });
  };
  handleDeleteTask = (task_id) => {
    api.removeTask(task_id).then(() => {
      this.setState((currentState) => {
        return {
          tasks: currentState.tasks.filter((task) => task.task_id !== task_id),
        };
      });
    });
  };
  componentDidMount = () => {
    this.getTasks(this.state.child.child_id);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.tasks.length !== this.state.tasks.length) {
      this.getTasks(this.state.child.child_id);
    }
  };
  render() {
    const { child_name, star_count, child_id } = this.state.child;
    const { isParentLoggedIn, tasks, child, newTask } = this.state;

    return (
      <View style={styles.container}>
        <Text>
          Hi {child_name}, you currently have {star_count} stars.
        </Text>
        <ScrollView>
          <View style={styles.list}>
            {tasks.map((task) => {
              const {
                task_status,
                task_description,
                stars_worth,
                task_id,
              } = task;

              return (
                <View key={task_id} style={styles.listItem}>
                  <Text>The task is to {task_description}</Text>
                  <Text>Is worth {stars_worth} ⭐</Text>
                  <Text>Status: {task_status}</Text>
                  {isParentLoggedIn ? (
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.handleReviewPushByChild(task_id, "completed")
                        }
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
                      <TouchableOpacity
                        onPress={() => this.handleDeleteTask(task_id)}
                        style={styles.button}
                      >
                        <Text style={styles.buttonText}>Delete </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={
                        task_status === "pending"
                          ? styles.disabledButton
                          : styles.button
                      }
                      disabled={task_status === "pending"}
                      onPress={() => {
                        this.handleReviewPushByChild(task_id, "pending");
                      }}
                    >
                      <Text
                        id={task.task_id}
                        key={task.task_id}
                        style={styles.buttonText}
                      >
                        Request Review
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
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
                  newTask.task_description === ""
                    ? styles.disabledButton
                    : styles.button
                }
                disabled={newTask.task_description === ""}
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
        </ScrollView>
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
