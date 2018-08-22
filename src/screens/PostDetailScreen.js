import React, { PureComponent } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { formatDate } from "../utils/DateUtils";
import Card from "../components/common/Card";

export default class PostDetailScreen extends PureComponent {
  render() {
    const { navigation } = this.props;
    const post = navigation.getParam("post");
    const { created_at, user, text } = post;
    const { name, profile_banner_url } = user;

    const date = formatDate(created_at);

    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Image
            source={{ uri: profile_banner_url }}
            style={{ width: 350, height: 117 }}
          />
          <Text>{date}</Text>
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
