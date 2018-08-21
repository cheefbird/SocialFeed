import React, { PureComponent } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";

import Card from "./common/Card";

export default class SettingWithTextInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value.toString()
    };
  }

  render() {
    return (
      <Card>
        <View style={styles.container}>
          <Text style={styles.label}>{this.props.label}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={this.props.value.toString()}
              onChangeText={text => this.setState({ value: text })}
              clearTextOnFocus={true}
              onSubmitEditing={() =>
                this.props.handleSubmitText(this.state.value)
              }
            />
          </View>
        </View>
      </Card>
    );
  }
}

SettingWithTextInput.propTypes = {
  value: PropTypes.number,
  handleSubmitText: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

SettingWithTextInput.defaultProps = {
  value: 50
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: "#f2b21d",
    fontWeight: "bold"
  },
  inputContainer: {
    borderBottomColor: "#f2b21d",
    borderBottomWidth: 1,
    minWidth: 70
  },
  textInput: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f2b21d",
    alignSelf: "center"
  }
});
