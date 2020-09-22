import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import ChildLogin from "../screens/ChildLogin";

const SwitchNavigator = createSwitchNavigator(
  {
    ChildLogin: {
      screen: ChildLogin,
    },
    Home: {
      screen: Home,
    },
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: "Login",
  }
);

export default createAppContainer(SwitchNavigator);
