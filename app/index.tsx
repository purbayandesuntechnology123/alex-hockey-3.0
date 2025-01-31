import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Link } from "expo-router";
import NextArrowSvg from "@/components/NextArrowSvg";

const splashscreen = () => {
  return (
    <LinearGradient colors={["#FFFFFF", "#FFD9A5"]} style={styles.container}>
      <Image
        source={require("../assets/images/fyre.png")}
        style={styles.logo}
      />
      <Image
        source={require("../assets/images/fyrebg.png")}
        style={styles.fyreBg}
      />
      <Link href={"/registration"} style={styles.nextArrowLink}>
       <NextArrowSvg/>
      </Link>
    </LinearGradient>
  );
};

export default splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logo: {
    width: 250,
    height: 130,
  },
  fyreBg: {
    width: 400,
    height: 300,
    position: "absolute",
    bottom: 0,
  },
  nextArrowLink: {
    bottom: 30,
    position: "absolute",
    right: 30,
    zIndex: 2,
  },
  nextArrow: {
    width: 50,
    height: 50,
  },
});
