import react from "react";
import { StyleSheet } from "react-native";
const ButtonStyles = StyleSheet.create({
  buttonSignUp: {
    fontSize: 12,
    borderRadius: 5,
    height: 30,
    width: 300,
    backgroundColor: "#083464",
    overflow: "hidden",
    borderColor: "yellow",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 5,
  },
  buttonLogin: {
    borderRadius: 5,
    height: 30,
    width: 300,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderColor: "#FFA611",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },
});
export default ButtonStyles;
