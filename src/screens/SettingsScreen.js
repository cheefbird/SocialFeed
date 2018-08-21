import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import SettingWithTextInput from "../components/SettingWithTextInput";
import { setResultsCount } from "../actions";

class SettingsScreen extends Component {
  static navigationOptions = {
    title: "Settings"
  };

  updateSetting = value => {
    const number = parseInt(value);
    this.props.setResultsCount(number);
  };

  render() {
    return (
      <View style={styles.container}>
        <SettingWithTextInput
          label="Number of results:"
          handleSubmitText={this.updateSetting}
          value={this.props.results}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  const { numberOfResults } = state.settings;

  return { results: numberOfResults };
};

export default connect(
  mapStateToProps,
  { setResultsCount }
)(SettingsScreen);
