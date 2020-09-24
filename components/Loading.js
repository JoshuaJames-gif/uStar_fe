import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Loading = () => {
  return (
    <View styles={styles.container}>
      <Text styles={styles.text}>...Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: { alignItems: "center", justifyContent: "center" },
});
export default Loading;
