import React, { Component } from "react";
import RewardsList from "../components/RewardsList";
import * as api from "../utils/api";
import PostReward from "../components/PostReward";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  ScrollView,
} from "react-native";
class RewardsPage extends Component {
  state = {
    isParentLoggedIn: true,
    child: {},
    rewards: [],
  };

  getRewards = (child_id) => {
    api.fetchRewardsByChild(child_id).then((rewards) => {
      this.setState({ rewards });
    });
  };
  handleDeleteReward = (reward_id) => {
    api.removeReward(reward_id).then(() => {
      this.setState((currentState) => {
        return {
          rewards: currentState.rewards.filter(
            (reward) => reward.reward_id !== reward_id
          ),
        };
      });
    });
  };
  getChildByChildId = (child_id) => {
    api.fetchChildByChildId(child_id).then((child) => {
      this.setState({ child });
    });
  };
  componentDidMount = () => {
    this.getChildByChildId(7);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.rewards.length !== this.state.rewards.length ||
      prevState.child.child_id !== this.state.child.child_id
    ) {
      this.getRewards(this.state.child.child_id);
    }
  };
  render() {
    const { child_name, star_count, child_id } = this.state.child;
    const { isParentLoggedIn, rewards } = this.state;
    return (
      <View style={styles.container}>
        <Text>
          Hi {child_name}, you currently have {star_count} stars.
        </Text>
        <ScrollView>
          <RewardsList
            rewards={rewards}
            isParentLoggedIn={isParentLoggedIn}
            handleDeleteReward={this.handleDeleteReward}
            getChildByChildId={this.getChildByChildId}
          />
          <PostReward
            isParentLoggedIn={isParentLoggedIn}
            child_id={child_id}
            getRewards={this.getRewards}
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
export default RewardsPage;
