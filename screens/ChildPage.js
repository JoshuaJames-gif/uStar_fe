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
import TaskList from "../components/TaskList";
import * as api from "../utils/api";
import PostTask from "../components/PostTask";

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
      this.getTasks(this.state.child.child_id);
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
          <TaskList
            tasks={tasks}
            isParentLoggedIn={isParentLoggedIn}
            handleReviewPushByChild={this.handleReviewPushByChild}
            handleDeleteTask={this.handleDeleteTask}
          />
          <PostTask
            isParentLoggedIn={isParentLoggedIn}
            child_id={child_id}
            getTasks={this.getTasks}
          />
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
