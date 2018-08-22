import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Card from "../components/common/Card";

export default class PostDetailScreen extends Component {
  render() {
    const { navigation } = this.props;
    const post = navigation.getParam("post");
    const { created_at, user, text } = post;
    const { name, profile_banner_url } = user;

    return (
      <View style={styles.container}>
        <Card>
          <Image source={{ uri: profile_banner_url }} style={{ flex: 1 }} />
          <Text>{created_at}</Text>
          <Text>{name}</Text>
          <Text>{text}</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
