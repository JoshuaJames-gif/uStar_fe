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
  ImageBackground,
} from "react-native";
import TaskList from "../components/TaskList";
import * as api from "../utils/api";
import PostTask from "../components/PostTask";
import Loading from "../components/Loading";
class TasksPage extends Component {
  state = {
    tasks: [],
    isLoading: true,
  };

  getTasks = (child_id) => {
    api.fetchTasksByChild(child_id).then((tasks) => {
      this.setState({ tasks, isLoading: false });
    });
  };
  handleReviewPushByChild = (task_id, task_status) => {
    api.updateTaskByChild(task_id, task_status).then(() => {
      this.getTasks(this.props.child_id);
      this.props.getChildByChildId(this.props.child_id);
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
    if (this.props.child_id) this.getTasks(this.props.child_id);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.tasks.length !== this.state.tasks.length ||
      prevProps.child_id !== this.props.child_id
    ) {
      this.getTasks(this.props.child_id);
    }
  };

  render() {
    const { isParentLoggedIn, child_id } = this.props;

    const { tasks, isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <Loading style={styles.container} />
        ) : (
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
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#D5DBDB",
    backgroundColor: "#ccd3c6",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 300,
    width: "100%",
    overflow: "hidden",
    // borderRadius: 5,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
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
export default TasksPage;
