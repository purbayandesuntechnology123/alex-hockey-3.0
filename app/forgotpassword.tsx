import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
    <LinearGradient
      colors={["#FFDFBE", "#FFFFFF"]}
      style={styles.gradient}
      locations={[0, 0.06]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.main}>
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
      </SafeAreaView>
    </LinearGradient>
  );
};

export default forgotpassword;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
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
});
