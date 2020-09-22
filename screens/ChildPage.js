import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import TaskList from "../components/TaskList";
import * as api from "../utils/api";

class ChildPage extends Component {
  state = {
    isParentLoggedIn: false,
    child: { child_id: 8, child_name: "Josh", star_count: 13 },
    tasks: [],
  };
  getTasks = (child_id) => {
    api.fetchTasksByChild(child_id).then((tasks) => {
      this.setState({ tasks });
    });
  };
  // handleReview = (task_id) => {
  //   // const task_id = event.target.id;
  //   console.log(task_id, "<---- handleReview");
  //   const status = this.state.isParentLoggedIn ? "completed" : "pending";

  //   api.updateTask(task_id, status).then(() => {
  //     this.getTasks(this.state.child.child_id);
  //   });
  // };
  componentDidMount = () => {
    this.getTasks(this.state.child.child_id);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.tasks.length !== this.state.tasks.length) {
      this.getTasks(this.state.child.child_id);
    }
  };
  render() {
    const { child_name, star_count } = this.state.child;
    return (
      <View style={styles.container}>
        <Text>
          {child_name} currently has {star_count} stars.
        </Text>
        <TaskList
          tasks={this.state.tasks}
          isParentLoggedIn={this.state.isParentLoggedIn}
          child={this.state.child}
        />
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
export default ChildPage;
