import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";
import TasksPage from "../screens/TasksPage";
import RewardsPage from "../screens/RewardsPage";
import ChildPage from "../screens/ChildPage";

const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    TasksPage: {
      screen: TasksPage,
    },
    Signup: {
      screen: Signup,
    },
    Profile: {
      screen: Profile,
    },
    RewardsPage: {
      screen: RewardsPage,
    },
    ChildPage: {
      screen: ChildPage,
    },
  },
  {
    initialRouteName: "ChildPage",
  }
);

export default createAppContainer(SwitchNavigator);
