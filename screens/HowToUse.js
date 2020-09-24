import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
const HowToUse = (props) => {
  return (
    <View style={styles.smallContainer}>
      <Text style={styles.Title}>How to use uStar</Text>
      <Text>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</Text>
      <Text style={styles.subTitle}>Tasks</Text>
      <Text style={styles.paragraph}>
        Our app allows you to set your child some chores to do around the house.
        Once your child has completed the chores, you can mark them as done and
        award their stars.
      </Text>
      <Text>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</Text>
      <Text style={styles.subTitle}>Rewards</Text>
      <Text style={styles.paragraph}>
        You can also set your child some rewards of your or their choosing. It
        is completely up to your child how they would like to spend their stars.
      </Text>
      <Text>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</Text>
      <TouchableOpacity
        style={styles.buttonSignUp}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={styles.signUpText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  smallContainer: {
    flex: 0.7,

    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "#083464",
  },
  paragraph: {
    fontSize: 12,
    margin: 10,
    color: "#083464",
  },
  subTitle: {
    fontSize: 14,
    margin: 10,
    color: "#083464",
  },
  signUpText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "yellow",
  },
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
});

export default HowToUse;
