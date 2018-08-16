import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function Post({ date, author, post }) {
  const getFormattedDate = date => {
    const dateObject = new Date(date);
    return dateObject.toDateString();
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.dateText}>{getFormattedDate(date)}</Text>
        <Text style={styles.authorText}>{author}</Text>
        <Text style={styles.postText}>{post}</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcon name="chevron-right" size={40} color="#d8d8d8" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // marginHorizontal: 10,
    // marginVertical: 8,
    justifyContent: "center",
    alignItems: "stretch",
    marginHorizontal: 8,
    marginVertical: 5
  },
  contentContainer: {
    flex: 9,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
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
