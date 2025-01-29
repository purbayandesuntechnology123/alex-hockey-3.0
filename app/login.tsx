import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import PrevArrows from "@/components/PrevArrows";
import Labels from "@/components/Labels";
import Inputs from "@/components/Inputs";

const login = () => {
  return (
    <View style={styles.main}>
      <View style={{ position: "relative" }}>
        <Header text="Login" />
        <PrevArrows />
      </View>
      <View style={styles.container}>
        <Labels labels="Email" />
        <Inputs />
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  main: {
    position: "relative",
  },
  container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
