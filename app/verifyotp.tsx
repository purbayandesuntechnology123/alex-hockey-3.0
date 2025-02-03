import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import Button from "@/components/Button";
import PrevArrows from "@/components/PrevArrows";
import LockSvg from "@/components/LockSvg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

const VerifyOtp = () => {
   const navigation:any= useNavigation()
  const [inputValue, setInputValue] = useState(["", "", "", ""]);
  const [error, setError] = useState([false, false, false, false]);

  const handleChange = (text: string, index: number) => {
    const newInputValue = [...inputValue];
    newInputValue[index] = text;
    setInputValue(newInputValue);
  };

  const isSubmitOtp = () => {
    const newError = inputValue.map((value) => value === "");
    setError(newError);
  
    if (newError.includes(true)) {
      return;
    } else {
      console.log("Entered OTP:", inputValue.join("")); // Logs the OTP when submitted
      navigation.navigate("changepassword");
    }
  };

  return (
    <LinearGradient colors={["#FFDFBE", "#FFFFFF"]} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        {/* Transparent Status Bar */}
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

        <View style={styles.main}>
          <Header text="OTP Verification" />
          <PrevArrows href={"/forgotpassword"} />
          <LockSvg />
          <Text style={styles.confirmMail}>
            We will send you a one-time password on your mail ID
          </Text>
          <Text style={styles.admin}>admin@gmail.com</Text>

          {/* OTP Input Fields */}
          <View style={styles.inputCon}>
            {inputValue.map((inputs, index) => (
              <Inputs
                key={index}
                style={[styles.input, error[index] ? styles.error : null]}
                keyboardType="numeric"
                maxLength={1}
                value={inputValue[index]}
                onChangeText={(text: string) => handleChange(text, index)}
              />
            ))}
          </View>

          <Text style={styles.timer}>00:00</Text>
          <Text style={styles.resendOtp}>
            Didn't receive OTP?{" "}
            <Text style={styles.sendOtp}>Send OTP</Text>
          </Text>

          <Button text="Continue" onPress={isSubmitOtp} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default VerifyOtp;
const styles = StyleSheet.create({
  gradient: {
    flex: 1, // Ensure full-screen gradient
  },
  safeArea: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
   // Moves the rounded white box down slightly
  },
  inputCon: {
    flexDirection: "row",
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
    fontFamily: "poppins-Regular",
    alignSelf: "center",
  },
  sendOtp: {
    color: "#FD8204",
    fontFamily: "poppins-Semibold",
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
