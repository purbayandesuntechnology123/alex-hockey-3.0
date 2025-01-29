import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Labels = ({ labels, style = {} }: any) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>{labels}</Text>
    </View>
  );
};

export default Labels;

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  text: {
    marginHorizontal: 10,
  },
});
