import { themeColor } from "@/constants/colors";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StrokeText = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      {/* Outline Text (Multiple Shadows) */}
      <Text style={[styles.text, styles.stroke]}> {text} </Text>
      {/* Foreground Text */}
      <Text style={styles.text}> {text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    // color: "white", // Change this to your desired text color
  },
  stroke: {
    position: "absolute",
    textShadowColor: themeColor.white,
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 3,
  },
});

export default StrokeText;
