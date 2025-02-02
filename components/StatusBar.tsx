import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Custom gradient background for the status bar */}
      <LinearGradient
        colors={["#FF7E5F", "#FEB47B"]} // Gradient colors
        style={styles.statusBarContainer}>
        <StatusBar style="light" />
      </LinearGradient>

      {/* Your App Content */}
      <Text style={styles.text}>Notice the gradient status bar!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // The background color for the app
  },
  statusBarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 40, // Height of the status bar
  },
  text: {
    color: "#fff",
  },
});
