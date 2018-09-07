import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { createStackNavigator } from "react-navigation";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import PostFeedScreen from "./screens/PostFeedScreen";
import SettingsScreen from "./screens/SettingsScreen";
import PostDetailScreen from "./screens/PostDetailScreen";

const AppStack = createStackNavigator(
  {
    Feed: PostFeedScreen,
    Detail: PostDetailScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Feed",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#000"
    }
  }
);

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
