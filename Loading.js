import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>About Today's Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 35,
    paddingVertical: 250,
    backgroundColor: "#9BCCF5",
  },
  text: {
    color: "#342C1E",
    fontSize: 40,
    fontWeight: "bold",
  },
});
