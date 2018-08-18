import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 8,
    marginVertical: 5,
    padding: 2
  }
});
