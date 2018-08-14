import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PostFeedScreen from "./screens/PostFeedScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PostFeedScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  }
});
