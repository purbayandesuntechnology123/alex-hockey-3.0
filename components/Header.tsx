import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrevArrows from "./PrevArrows";
import { useFonts } from "expo-font";

const Header = ({ text, style = {} }: any) => {
  const [fontsLoaded] = useFonts({
    "league-Regular": require("../assets/fonts/Bebas_Neue,GFS_Neohellenic,League_Spartan/League_Spartan/static/LeagueSpartan-Regular.ttf"),
  });
  return (
    <View style={styles.headerCon}>
      <Text style={[style, styles.headerText]}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerCon: {
   
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    color: "#FD8204",
    // fontWeight: "500",
    fontSize: 23,
    fontFamily: "league-Regular",
  },
});
