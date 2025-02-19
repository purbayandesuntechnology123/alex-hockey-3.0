import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import NextArrowSvg from "@/components/NextArrowSvg";
import { BottomSheetProvider } from "@/components/CustomBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { BottomSheetProvider } from "../components/CustomBottomSheet";

const splashscreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/splashScreen.png")}
        style={{ flex: 1, width: "100%" }}
        // resizeMethod="scale"
      />
    </GestureHandlerRootView>
    // <BottomSheetProvider>
    // <LinearGradient colors={["#FFFFFF", "#FFD9A5"]} style={styles.container}>
    //   <Image
    //     source={require("../assets/images/fyre.png")}
    //     style={styles.logo}
    //   />
    //   <Image
    //     source={require("../assets/images/fyrebg.png")}
    //     style={styles.fyreBg}
    //   />
    //   <Link href={"/HomePage"} style={styles.nextArrowLink}>
    //   {/* <Link href={"/registration"} style={styles.nextArrowLink}> */}
    //     <NextArrowSvg />
    //   </Link>
    // </LinearGradient>
    // </BottomSheetProvider>
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
    minWidth: 250,
    height: 130,
  },
  fyreBg: {
    width: "120%",
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
