import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function Post({ userImage, date, author, post, onPress }) {
  const getFormattedDate = date => {
    const dateObject = new Date(date);
    return dateObject.toDateString();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: userImage }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.dateText}>{getFormattedDate(date)}</Text>
        <Text style={styles.authorText}>{author}</Text>
        <Text style={styles.postText}>{post}</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcon name="chevron-right" size={50} color="#f2b21d" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 10,
    paddingRight: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#f2b21d"
  },
  contentContainer: {
    flex: 7,
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
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    color: "#f2b21d"
  },
  postText: {
    fontSize: 16,
    color: "#f2b21d"
  }
});
