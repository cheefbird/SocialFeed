import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Post from "../components/Post";

import { sampleData } from "../static/feed";

export default class PostFeedScreen extends Component {
  keyExtractor = item => item.id.toString();

  renderRow = ({ item }) => {
    const { created_at, user, text } = item;
    const { name } = user;

    return (
      <View style={styles.container}>
        <Post date={created_at} author={name} post={text} />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={sampleData}
        renderItem={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
