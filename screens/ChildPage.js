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
    child: { child_id: 1, child_name: "Charles", star_count: 5 },
    tasks: [
      { task_description: "wash clothes", stars_worth: 10, task_id: 98 },
      { task_description: "wash car", stars_worth: 20, task_id: 898 },
    ],
  };

  list = () => {
    return this.state.tasks.map((task) => {
      return (
        <View key={task.task_id}>
          <Text>{task.task_description}</Text>
          <Text>{task.stars_worth}</Text>
        </View>
      );
    });
  };

  render() {
    const { child_name, star_count } = this.state.child;
    return (
      <View style={styles.container}>
        <Text>
          {child_name}:{star_count}
        </Text>
        <View>{this.list()}</View>
      </View>
    );
  }
}
componentDidMount = () => {
  getChildByParent = () => {
    api.fetchTasksByChild().then((res) => {
      this.setState({ tasks: res });
    });
  };
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.75,
    height: 300,
    width: 500,
    overflow: "hidden",
    borderRadius: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
export default ChildPage;
