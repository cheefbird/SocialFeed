import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import SettingWithTextInput from "../components/SettingWithTextInput";

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <SettingWithTextInput label="Number of results:" />
        </View>
      </View>
    );
  }
}
