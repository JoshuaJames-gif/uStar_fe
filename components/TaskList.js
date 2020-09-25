import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import ButtonStyles from "../styles/buttonStyle";
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
              <Text style={ButtonStyles.listText}>{task_description}</Text>
              <Text style={ButtonStyles.smallListText}>{stars_worth} ⭐</Text>
              <Text style={ButtonStyles.smallListText}>{task_status}</Text>
              {isParentLoggedIn ? (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      handleReviewPushByChild(task_id, "completed")
                    }
                    style={
                      task_status === "completed" ||
                      task_status === "outstanding"
                        ? ButtonStyles.disabledButton
                        : ButtonStyles.listButtons
                    }
                    disabled={
                      task_status === "completed" ||
                      task_status === "outstanding"
                    }
                  >
                    <Text id={task_id} style={styles.buttonText}>
                      Confirm request
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDeleteTask(task_id)}
                    style={ButtonStyles.deleteButtons}
                  >
                    <Text style={styles.buttonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  style={
                    task_status === "pending" || task_status === "completed"
                      ? ButtonStyles.disabledButton
                      : ButtonStyles.listButtons
                  }
                  disabled={
                    task_status === "pending" || task_status === "completed"
                  }
                  onPress={() => {
                    handleReviewPushByChild(task_id, "pending");
                  }}
                >
                  <Text style={styles.buttonText}>Request Review</Text>
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
    borderTopWidth: 1,
    borderColor: "#001a34",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderColor: "#001a34",
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
    fontSize: 12,
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
