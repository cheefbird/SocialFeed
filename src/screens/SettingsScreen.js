import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import SettingWithTextInput from "../components/SettingWithTextInput";

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <SettingWithTextInput
            label="Number of results:"
            handleSubmitText={text => console.log(`SUBMITTED TEXT: ${text}`)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "yellow"
  }
});
