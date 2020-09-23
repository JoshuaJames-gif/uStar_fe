import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";
import ChildPage from "../screens/ChildPage";
import RewardsPage from "../screens/RewardsPage";

const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    ChildPage: {
      screen: ChildPage,
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
  },
  {
    initialRouteName: "RewardsPage",
  }
);

export default createAppContainer(SwitchNavigator);
