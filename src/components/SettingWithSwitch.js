import React from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import PropTypes from "prop-types";

export default function SettingWithSwitch({
  label,
  handleValueChanged,
  backgroundColor,
  knobColor,
  borderColor,
  value
}) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Switch
        value={value}
        onValueChange={handleValueChanged}
        onTintColor={backgroundColor}
        thumbTintColor={knobColor}
        tintColor={borderColor}
      />
    </View>
  );
}

SettingWithSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  handleValueChanged: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  knobColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 8
  },
  labelText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold"
  }
});
