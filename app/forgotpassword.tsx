import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PrevArrows from "@/components/PrevArrows";
import Header from "@/components/Header";

import { Image } from "expo-image";
import Labels from "@/components/Labels";
import Inputs from "@/components/Inputs";
import Button from "@/components/Button";
import { Link, useNavigation } from "expo-router";
import SocialSignup from "@/components/SocialSignup";
import { LinearGradient } from "expo-linear-gradient";

const forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigation: any = useNavigation();

  const isValidate = () => {
    let newErrorMessage = "";
    let isValid = true;
    if (!email) {
      newErrorMessage = "Email is required";
      isValid = false;
      setError(newErrorMessage);
    }
    return isValid;
  };
  const handleSubmit = () => {
    if (isValidate()) {
      console.log(email);
      navigation.navigate("verifyotp");
    }
  };
  return (
    <View style={styles.main}>
        <LinearGradient colors={["#FFDFBE", "#FFFFFF"]} style={styles.gradient} />

{/* Transparent Status Bar */}
<StatusBar
  translucent
  backgroundColor="transparent"
  barStyle="dark-content"
/>
      <PrevArrows href={"/login"} />
      <Header text="Forgot Password" />

      <Image
        source={require("../assets/images/forgot.png")}
        style={styles.forgotSVG}
      />
      <View style={styles.inputCon}>
        <Labels labels="Email" />
        <Inputs
          placeholder="Enter Your Email Id"
          autoCapitalize="none"
          autoComplete="email"
          value={email}
          style={error ? styles.errorMessage : null}
          onChangeText={setEmail}
        />
        {error && <Text style={styles.errorMessage}>{error}</Text>}
      </View>
      <Button text="Continue" onPress={handleSubmit} />
    </View>
  );
};

export default forgotpassword;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#FFFFFF",
    flex: 1,

    padding: 20,
  },
  forgotSVG: {
    width: 300,
    height: 200,
    margin: 20,
  },
  inputCon: {
    marginBottom: 25,
  },
  errorMessage: {
    fontSize: 11,
    color: "red",
    borderColor: "red",
  },
  gradient: {
    position: "absolute",
    minWidth: "120%",
    minHeight: 40, // Height of status bar (adjust if needed)
    top: 0,
    left: 0,
  },
});
