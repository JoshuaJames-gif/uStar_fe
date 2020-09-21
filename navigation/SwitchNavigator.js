import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";
import ChildPage from "../screens/ChildPage";

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
  },
  {
    initialRouteName: "ChildPage",
  }
);

export default createAppContainer(SwitchNavigator);
