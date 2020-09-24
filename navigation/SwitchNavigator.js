import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import ChildLogin from "../screens/ChildLogin";
import TasksPage from "../screens/TasksPage";
import RewardsPage from "../screens/RewardsPage";
import ChildPage from "../screens/ChildPage";

const SwitchNavigator = createSwitchNavigator(
  {
    ChildLogin: {
      screen: ChildLogin,
    },
    Home: {
      screen: Home,
    },
    TasksPage: {
      screen: TasksPage,
    },
    Signup: {
      screen: Signup,
    },
    Login: {
      screen: Login,
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
    initialRouteName: "Home",
  }
);

export default createAppContainer(SwitchNavigator);
