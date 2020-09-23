import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  ScrollView,
} from "react-native";

const TaskList = (props) => {
  const {
    tasks,
    isParentLoggedIn,
    handleReviewPushByChild,
    handleDeleteTask,
  } = props;
  return (
    <View style={styles.list}>
      <ScrollView>
        {tasks.map((task) => {
          const { task_status, task_description, stars_worth, task_id } = task;

          return (
            <View key={task_id} style={styles.listItem}>
              <Text>The task is to {task_description}</Text>
              <Text>Is worth {stars_worth} ⭐</Text>
              <Text>Status: {task_status}</Text>
              {isParentLoggedIn ? (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      handleReviewPushByChild(task_id, "completed")
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
                    onPress={() => handleDeleteTask(task_id)}
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
                    handleReviewPushByChild(task_id, "pending");
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
      </ScrollView>
    </View>
  );
};

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

export default TaskList;
