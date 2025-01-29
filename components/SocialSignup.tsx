import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import fbSVG from "../assets/images/fb.svg";
import appleSVG from "../assets/images/apple.svg";
import googleSVG from "../assets/images/google.svg";
import { useFonts } from "expo-font";

const SocialSignup = () => {
  const [fontsLoaded] = useFonts({
    "league-Regular": require("../assets/fonts/Bebas_Neue,GFS_Neohellenic,League_Spartan/League_Spartan/static/LeagueSpartan-Regular.ttf"),
  });
  return (
    <View style={styles.svgDivContainer}>
      <Text style={{ fontFamily: "league-Regular" }}>Or sign Up with</Text>
      <View style={styles.svgContainer}>
        <Image source={fbSVG} style={styles.svgFB} />
        <Image source={googleSVG} style={styles.svgGoogle} />
        <Image source={appleSVG} style={styles.svgApple} />
      </View>
    </View>
  );
};

export default SocialSignup;

const styles = StyleSheet.create({
  svgDivContainer: {
    marginTop: 20,
  },
  svgContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  svgFB: {
    width: 10,
    height: 22,
    // backgroundColor: "white",
    // borderRadius: 20,
    // borderWidth: 1,
    // borderColor: "gray",
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
    // elevation: 5,
  },
  svgGoogle: {
    width: 20,
    height: 20,
  },
  svgApple: {
    width: 20,
    height: 18,
  },
});
