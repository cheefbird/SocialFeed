import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Post(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>POST TEXT GOES HERE!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 8
  },
  text: {
    fontSize: 18
  }
});
