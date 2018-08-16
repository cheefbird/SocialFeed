import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { createStackNavigator } from "react-navigation";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import PostFeedScreen from "./screens/PostFeedScreen";
import SettingsScreen from "./screens/SettingsScreen";

const AppStack = createStackNavigator({
  Feed: SettingsScreen
});

export default class App extends Component {
  render() {
    const store = createStore(
      reducers,
      composeWithDevTools(applyMiddleware(ReduxThunk))
    );

    return (
      <Provider store={store}>
        <AppStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  }
});
