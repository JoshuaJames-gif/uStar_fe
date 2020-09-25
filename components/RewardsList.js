import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as api from "../utils/api";
import ButtonStyles from "../styles/buttonStyle";
const RewardsList = (props) => {
  const handleBuy = (child_id, star_cost) => {
    api.patchChild(child_id, -star_cost).then(() => {
      props.getChildByChildId(child_id);
    });
  };

  const { rewards, isParentLoggedIn, handleDeleteReward } = props;
  return (
    <View style={styles.list}>
      <ScrollView>
        {rewards.map((reward) => {
          const { reward_id, reward_description, star_cost, child_id } = reward;
          return (
            <View key={reward_id} style={styles.listItem}>
              <Text style={ButtonStyles.listText}>{reward_description}</Text>
              <Text style={ButtonStyles.smallListText}>{star_cost} ⭐</Text>
              {!isParentLoggedIn && (
                <TouchableOpacity
                  style={ButtonStyles.listButtons}
                  onPress={() => {
                    handleBuy(child_id, star_cost);
                  }}
                >
                  <Text style={styles.buttonText}> Buy </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={ButtonStyles.deleteButtons}
                onPress={() => {
                  handleDeleteReward(reward_id);
                }}
              >
                <Text style={styles.buttonText}> Remove </Text>
              </TouchableOpacity>
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
    justifyContent: "center",
  },
  list: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
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
export default RewardsList;
