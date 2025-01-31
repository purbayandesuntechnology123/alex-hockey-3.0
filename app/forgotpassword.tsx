import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PrevArrows from "@/components/PrevArrows";
import Header from "@/components/Header";

import { Image } from "expo-image";
import Labels from "@/components/Labels";
import Inputs from "@/components/Inputs";
import Button from "@/components/Button";
import { Link } from "expo-router";

const forgotpassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    console.log(email);
  };
  return (
    <View style={styles.main}>
      <PrevArrows href={"/login"} />
      <Header text="Forgot Password" />

      <Image
        source={require("../assets/images/forgot.png")}
        style={styles.forgotSVG}
      />

      <Labels labels="Email" />
      <Inputs
        placeholder="Enter Your Email Id"
        autoCapitalize="none"
        autoComplete="email"
        value={email}
        onChangeText={setEmail}
      />

      <Button text="Continue" onPress={handleSubmit} />
      <Link href={"/verifyotp"}>Verify OTP</Link>
    </View>
  );
};

export default forgotpassword;

const styles = StyleSheet.create({
  main: {
    backgroundColor:'#FFFFFF',
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  forgotSVG: {
    width: 300,
    height: 200,
    margin:20
  },
});
