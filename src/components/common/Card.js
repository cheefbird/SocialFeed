import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#23201a",
    borderWidth: 2,
    borderColor: "#f2b21d",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    marginTop: 10
  }
});
