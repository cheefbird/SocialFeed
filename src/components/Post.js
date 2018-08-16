import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Post({ date, author, post }) {
  const getFormattedDate = date => {
    const dateObject = new Date(date);
    return dateObject.toDateString();
  };

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.dateText}>{getFormattedDate(date)}</Text>
        <Text style={styles.authorText}>{author}</Text>
        <Text style={styles.postText}>{post}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
    justifyContent: "space-around",
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
    paddingBottom: 8,
    color: "#000"
  },
  postText: {
    fontSize: 18
  }
});
