import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Post({ date, author, post }) {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.authorText}>{author}</Text>
      <Text style={styles.postText}>{post}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 8,
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  dateText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
    paddingBottom: 8
  },
  authorText: {
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 8
  },
  postText: {
    fontSize: 18,
    flex: 1
  }
});
