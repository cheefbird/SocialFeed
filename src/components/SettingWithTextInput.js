import React, { PureComponent } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";

export default class SettingWithTextInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value.toString()
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={this.props.value.toString()}
            onChangeText={text => this.setState({ value: text })}
            onSubmitEditing={() =>
              this.props.handleSubmitText(this.state.value)
            }
          />
        </View>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 8,
    marginVertical: 5
  },
  label: {
    flex: 2,
    fontSize: 14,
    color: "#000",
    fontWeight: "bold"
  },
  inputContainer: {
    flex: 1,
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 1
  },
  textInput: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
  }
});
