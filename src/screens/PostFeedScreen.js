import _ from "lodash";
import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";
import Post from "../components/Post";

class PostFeedScreen extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

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
        data={this.props.posts}
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

const mapStateToProps = state => {
  const posts = _.map(state.posts, val => {
    return { ...val };
  });

  return { posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostFeedScreen);
