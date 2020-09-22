import React, { Component } from "react";
// import { render } from "react-dom";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import * as api from "../utils/api";

class ChildPage extends Component {
  state = {
    isParentLoggedIn: false,
    child: { child_id: 5, child_name: "James", star_count: 12 },
    tasks: [],
  };

  getTasks = (child_id) => {
    api.fetchTasksByChild(child_id).then((tasks) => {
      this.setState({ tasks });
    });
  };
  handleReviewPushByChild = (event) => {
    const task_id = event.target.id;
    api.updateTaskByChild(task_id).then(() => {
      this.getTasks(this.state.child.child_id);
    });
  };
  componentDidMount = () => {
    this.getTasks(this.state.child.child_id);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.tasks.length !== this.state.tasks.length)
      this.getTasks(this.state.child.child_id);
  };
  render() {
    const { child_name, star_count } = this.state.child;
    return (
      <View style={styles.container}>
        <Text>
          Hi {child_name}, you currently have {star_count} stars.
        </Text>
        <View style={styles.list}>
          {this.state.tasks.map((task) => {
            return (
              <View key={task.task_id} style={styles.listItem}>
                <Text>The task is to {task.task_description}</Text>
                <Text>Is worth {task.stars_worth} ⭐</Text>
                <Text>Status: {task.task_status}</Text>
                <TouchableOpacity
                  onPress={this.handleReviewPushByChild}
                  style={styles.button}
                >
                  <Text id={task.task_id} style={styles.buttonText}>
                    Request Review{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
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
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
export default ChildPage;
