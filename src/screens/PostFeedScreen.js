import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Post from "../components/Post";

import { sampleData } from "../static/feed";

export default class PostFeedScreen extends Component {
  keyExtractor = item => item.id.toString();

  separator = () => <View style={styles.separator} />;

  renderRow = ({ item }) => {
    const { created_at, user, text } = item;
    const { name } = user;

    return <Post date={created_at} author={name} post={text} />;
  };

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={sampleData}
        renderItem={this.renderRow}
        ItemSeparatorComponent={this.separator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#d8d8d8",
    alignItems: "stretch",
    marginLeft: 8
  }
});
