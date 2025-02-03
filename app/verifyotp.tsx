import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";

// import verifySVG from "../assets/images/verify.svg";
import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import Button from "@/components/Button";
import PrevArrows from "@/components/PrevArrows";
import NextArrowSvg from "@/components/NextArrowSvg";
import { useFonts } from "expo-font";
import LockSvg from "@/components/LockSvg";
import SocialSignup from "@/components/SocialSignup";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const verifyotp = () => {

   const navigation:any= useNavigation()
  const [inputValue, setInputValue] = useState(["", "", "", ""]);

  const handleChange = (text: string, index: number) => {
    const newInputValue = [...inputValue];
    newInputValue[index] = text;
    setInputValue(newInputValue);
  };

  const [error, setError] = useState([false, false, false, false]);

  const isSubmitOtp = () => {
    const newError = inputValue.map((value) => value === "");
    setError(newError);

    if (newError.includes(true)) {
      return;
    } else {
      console.log(inputValue.join(""));
      navigation.navigate('changepassword')
    }
  };

  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins (2)/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins (2)/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins (2)/Poppins-Bold.ttf"),
  });
  return (
    <View style={styles.main}>
      <Header text="OTP Verification" />
      <PrevArrows href={"/forgotpassword"} />
      <LockSvg />
      <Text style={styles.confirmMail}>
        We will send you one time password on the mail Id
      </Text>
      <Text style={styles.admin}>admin@gmail.com</Text>
      <View style={styles.inputCon}>
        {inputValue.map((inputs, index) => {
          return (
            <Inputs
              style={[styles.input, error[index] ? styles.error : null]}
              key={index}
              keyboardType="numeric"
              maxLength={1}
              value={inputValue[index]}
              onChangeText={(text: string) => handleChange(text, index)}
            />
          );
        })}
      </View>
      <Text style={styles.timer}>00:00</Text>
      <Text style={styles.resendOtp}>
        Didn't Send OTP?{" "}
        <Text style={{ color: "#FD8204", fontFamily: "poppins-Semibold" }}>
          Send OTP
        </Text>
      </Text>
      <Button text="Continue" onPress={isSubmitOtp} />
    </View>
  );
};

export default verifyotp;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#FFFFFF",
    flex: 1,

   padding:20
  },
  verifySvg: {
    width: 150,
    height: 150,
    marginTop: 60,
    alignSelf: "center",
  },
  inputCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    gap: 25,
    marginTop: 30,
  },
  input: {
    width: 60,
    height: 60,
    borderRadius: 15,
    fontSize: 24,
    textAlign: "center",
    color: "#757575",
  },
  timer: {
    marginTop: 25,
    color: "gray",
    fontFamily: "poppins-Regular",
    alignSelf: "center",
  },
  resendOtp: {
    marginTop: 20,
    marginBottom: 30,
    fontFamily: "poppins-Regular",
    alignSelf: "center",
  },
  confirmMail: {
    fontFamily: "poppins-Regular",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 20,
  },
  admin: {
    fontFamily: "poppins-bold",
    textAlign: "center",
  },
  error: {
    borderWidth: 2,
    borderColor: "red",
  },
});
