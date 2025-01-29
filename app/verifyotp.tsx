import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

import verifySVG from "../assets/images/verify.svg";
import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import Button from "@/components/Button";
import PrevArrows from "@/components/PrevArrows";
import { useFonts } from "expo-font";

const verifyotp = () => {
  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins (2)/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins (2)/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins (2)/Poppins-Bold.ttf"),
  });
  return (
    <View style={styles.main}>
      <Header text="OTP Verification" />
      <PrevArrows href={"/forgotpassword"} />
      <Image source={verifySVG} style={styles.verifySvg} />
      <Text style={styles.confirmMail}>
        We will send you one time password on the mail Id
      </Text>
      <Text style={{ fontFamily: "poppins-bold" }}>admin@gmail.com</Text>
      <View style={styles.inputCon}>
        <Inputs style={styles.input} keyboardType="numeric" />
        <Inputs style={styles.input} keyboardType="numeric" />
        <Inputs style={styles.input} keyboardType="numeric" />
        <Inputs style={styles.input} keyboardType="numeric" />
      </View>
      <Text style={styles.timer}>00:00</Text>
      <Text style={styles.resendOtp}>
        Didn't Send OTP?{" "}
        <Text style={{ color: "#FD8204", fontFamily: "poppins-Semibold" }}>
          Send OTP
        </Text>
      </Text>
      <Button text="Continue" />
    </View>
  );
};

export default verifyotp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  verifySvg: {
    width: 150,
    height: 150,
    marginTop: 60,
  },
  inputCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 25,
    marginTop: 30,
  },
  input: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  timer: {
    marginTop: 10,
    color: "gray",
    fontFamily: "poppins-Regular",
  },
  resendOtp: {
    marginTop: 20,
    marginBottom: 30,
    fontFamily: "poppins-Regular",
  },
  confirmMail: {
    fontFamily: "poppins-Regular",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 20,
  },
});
