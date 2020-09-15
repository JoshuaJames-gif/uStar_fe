import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>uStar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    padding: 39,
    backgroundColor: "coral",
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});