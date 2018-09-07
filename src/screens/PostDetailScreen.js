import React, { PureComponent } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { formatDate } from "../utils/DateUtils";

export default class PostDetailScreen extends PureComponent {
  render() {
    const { navigation } = this.props;
    const post = navigation.getParam("post");
    const { created_at, user, text } = post;
    const { name, profile_banner_url } = user;

    const date = formatDate(created_at);

    return (
      <View style={styles.container}>
        <Image source={{ uri: profile_banner_url }} style={styles.image} />
        <Text>{date}</Text>
        <Text>{name}</Text>
        <Text>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 100,
    backgroundColor: "red"
  },
  card: {
    justifyContent: "center",
    alignItems: "flex-end"
  },
  image: {
    width: 350,
    height: 117,
    borderColor: "#f2b21d",
    borderWidth: 1
  }
});
