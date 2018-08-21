import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Card from "../components/common/Card";

export default class PostDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Image />
          <Text />
          <Text />
          <Text />
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
