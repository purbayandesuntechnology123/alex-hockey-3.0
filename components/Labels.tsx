import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const Labels = ({ labels, style = {} }: any) => {
  const [fontsLoaded] = useFonts({
    "league-Regular": require("../assets/fonts/Bebas_Neue,GFS_Neohellenic,League_Spartan/League_Spartan/static/LeagueSpartan-Medium.ttf"),
    "league-Semibold": require("../assets/fonts/Bebas_Neue,GFS_Neohellenic,League_Spartan/League_Spartan/static/LeagueSpartan-SemiBold.ttf"),
  });
  return <Text style={[styles.text]}>{labels}</Text>;
};

export default Labels;

const styles = StyleSheet.create({
  container: {},
  text: {
    alignSelf: "flex-start",
    marginBottom: 9,

    color: "#383838",

    fontWeight: "400",
    fontFamily: "league-Semibold",
    fontSize: 16,
  },
});
