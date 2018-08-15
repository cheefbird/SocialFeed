import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import PostFeedScreen from "./screens/PostFeedScreen";

export default class App extends Component {
  render() {
    const store = createStore(
      reducers,
      composeWithDevTools(applyMiddleware(ReduxThunk))
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <PostFeedScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  }
});
