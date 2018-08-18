import _ from "lodash";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { fetchPosts } from "../actions";
import Post from "../components/Post";

class PostFeedScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Social Feed",
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 12 }}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Settings")}
        >
          <MaterialIcon name="settings" size={26} color="#000" />
        </TouchableOpacity>
      ),
      headerBackTitle: "Back"
    };
  };

  componentDidMount() {
    this.props.fetchPosts(this.props.numberOfResults);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.numberOfResults !== this.props.numberOfResults) {
      this.props.fetchPosts(nextProps.numberOfResults);
      return true;
    } else if (this.props.posts.length !== nextProps.posts.length) {
      return true;
    } else {
      return false;
    }
  }

  keyExtractor = item => item.id.toString();

  separator = () => <View style={styles.separator} />;

  renderRow = ({ item }) => {
    const { created_at, user, text } = item;
    const { name, profile_image_url_https } = user;

    return (
      <View>
        <Post
          userImage={profile_image_url_https}
          date={created_at}
          author={name}
          post={text}
        />
      </View>
    );
  };

  render() {
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color="#ffa50a" />
          </View>
        ) : (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.posts}
            renderItem={this.renderRow}
            ItemSeparatorComponent={this.separator}
            style={styles.list}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  spinner: {
    justifyContent: "center",
    alignItems: "center"
  },
  settingsButton: {
    flex: 1
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#d8d8d8",
    alignItems: "stretch",
    marginLeft: 8
  },
  list: {
    backgroundColor: "#fff"
  }
});

const mapStateToProps = state => {
  const posts = _.map(state.postFeed.posts, val => {
    return { ...val };
  });

  const { numberOfResults } = state.settings;

  return { loading: state.postFeed.loading, posts, numberOfResults };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostFeedScreen);
