import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrevArrows from "./PrevArrows";
import { useFonts } from "expo-font";
import PrevSvg from "./PrevArrowSvg";

const Header = ({ text, style = {} }: any) => {
  const [fontsLoaded] = useFonts({
    "league-Regular": require("../assets/fonts/Bebas_Neue,GFS_Neohellenic,League_Spartan/League_Spartan/static/LeagueSpartan-Regular.ttf"),
  });
  // if (!fontsLoaded) {
  //   return null; // Ensures no string is rendered outside <Text>
  // }

  return (
    <View style={styles.headerCon}>
    
      <Text style={[styles.headerText, style]}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerCon: {
    display:'flex',
    alignItems: "center",
   marginTop:20
  },
  headerText: {
    color: "#FD8204",
    // fontWeight: "500",
    fontSize: 23,
    fontFamily: "league-Regular",
  },
});
