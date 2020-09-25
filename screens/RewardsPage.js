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
import Loading from "../components/Loading";
class RewardsPage extends Component {
  state = {
    rewards: [],
    isLoading: true,
  };

  getRewards = (child_id) => {
    api.fetchRewardsByChild(child_id).then((rewards) => {
      this.setState({ rewards, isLoading: false });
    });
  };
  handleDeleteReward = (reward_id) => {
    api.removeReward(reward_id);
    this.setState((currentState) => {
      return {
        rewards: currentState.rewards.filter(
          (reward) => reward.reward_id !== reward_id
        ),
      };
    });
  };
  getChildByChildId = (child_id) => {
    api.fetchChildByChildId(child_id).then((child) => {
      this.setState({ child });
    });
  };
  componentDidMount = () => {
    if (this.props.child_id) this.getRewards(this.props.child_id);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.rewards.length !== this.state.rewards.length ||
      prevProps.child_id !== this.props.child_id
    ) {
      this.getRewards(this.props.child_id);
    }
  };
  render() {
    const { isParentLoggedIn, child_id } = this.props;
    const { rewards, isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Loading style={styles.container} />
        ) : (
          <ScrollView>
            <RewardsList
              rewards={rewards}
              isParentLoggedIn={isParentLoggedIn}
              handleDeleteReward={this.handleDeleteReward}
              getChildByChildId={this.props.getChildByChildId}
            />
            <PostReward
              isParentLoggedIn={isParentLoggedIn}
              child_id={child_id}
              getRewards={this.getRewards}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D5DBDB",
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
    margin: 20,
  },
  listItem: {
    padding: 10,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: "#001a34",
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
