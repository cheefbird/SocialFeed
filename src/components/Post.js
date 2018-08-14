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
    flex: 1,
    justifyContent: "space-between"
  },
  dateText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "red"
  },
  authorText: {
    fontSize: 14,
    fontWeight: "bold"
  },
  postText: {
    fontSize: 18
  }
});
