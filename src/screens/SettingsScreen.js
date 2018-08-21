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
        <View style={styles.card}>
          <SettingWithTextInput
            label="Number of results:"
            handleSubmitText={this.updateSetting}
            value={this.props.results}
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
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "yellow"
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
