import _ from "lodash";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { fetchPosts } from "../actions";
import Card from "../components/common/Card";
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
          <MaterialIcon name="settings" size={26} color="#000000" />
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
      <Card style={{ flex: 1 }}>
        <Post
          userImage={profile_image_url_https}
          date={created_at}
          author={name}
          post={text}
          onPress={() => this.presentDetails(item)}
        />
      </Card>
    );
  };

  presentDetails = post => this.props.navigation.navigate("Detail", { post });

  render() {
    const { loading } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spinner: {
    flex: 1,
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
    backgroundColor: "#e2dacc"
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
