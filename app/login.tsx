import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import PrevArrows from "@/components/PrevArrows";
import Labels from "@/components/Labels";
import Inputs from "@/components/Inputs";
import Button from "@/components/Button";
import { Image } from "expo-image";
import SocialSignup from "@/components/SocialSignup";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
// import loginSVG from "../assets/images/login.svg";

const login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins (2)/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins (2)/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins (2)/Poppins-Bold.ttf"),
    "league-Regular": require("../assets/fonts/Bebas_Neue,GFS_Neohellenic,League_Spartan/League_Spartan/static/LeagueSpartan-Regular.ttf"),
  });

  //Login Handle
  const [error, setError] = useState({ email: "", password: "" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateLogin = () => {
    let newErrorMessage = { email: "", password: "" };

    if (credentials.email === "") {
      newErrorMessage.email = "Please provide your email";
    } else if (!emailRegex.test(credentials.email)) {
      newErrorMessage.email = "Not an email";
    }
    if (credentials.password === "") {
      newErrorMessage.password = "password does not match";
    }
    setError(newErrorMessage);
    return !Object.values(newErrorMessage).some((error) => error !== "");
  };

  const loginHandle = () => {
    if (validateLogin()) {
      console.log(credentials);
    }
  };

  return (
    <View style={styles.mainContainer}>
      
      <PrevArrows href={"/registration"}  />
        <Header text="Login" />
        
     
      {/* <View style={styles.body}> */}
      <ScrollView
        contentContainerStyle={[styles.scrollContent, styles.body]}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.lorems}>
              Lorem ipsum dolor sit amet dolor sit amet dolor sit amet...{" "}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={{marginBottom:20}}>
              <Labels labels="Email" />
              <Inputs
                value={credentials.email}
                style={error.email ? styles.errorInput : null}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                placeholder="Enter Your Email Address"
                onChangeText={(text: any) =>
                  setCredentials({ ...credentials, email: text })
                }
              />
              {error.email && (
                <Text style={styles.errorValue}>{error.email}</Text>
              )}
            </View>
            <View>
              <Labels labels="Password" />
              <Inputs
                value={credentials.password}
                style={error.password ? styles.errorInput : null}
                placeholder="Enter Your Password"
                onChangeText={(text: any) =>
                  setCredentials({ ...credentials, password: text })
                }
              />
              {error.password && (
                <Text style={styles.errorValue}>{error.password}</Text>
              )}
              <Link href={"/forgotpassword"} style={styles.forgotPass}>
                Forgot Password
              </Link>
            </View>

            <View style={styles.btnCon}>
              <Button text="Log In" onPress={loginHandle} />
            </View>
            <View style={{ alignSelf: "center", marginTop: 24 }}>
              {" "}
              <SocialSignup />{" "}
            </View>
          </View>
        </View>


<View style={{width:'100%'}}>
        <Text style={styles.signupText}>
          Don't have an account?{" "}
          <Link
            href={"/registration"}
            style={{ color: "#FD8204", fontFamily: "poppins-Semibold" }}
          >
            {" "}
            Sign Up
          </Link>
        </Text>
        </View>
      </ScrollView>
      {/* </View> */}
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    padding: 20,

    // backgroundColor:'white',
  },
  scrollContent: {
    flexGrow: 1,
  },

  prevBtn:{
    position:'absolute',
 top:10,
 left:20
  },

  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  inputContainer: {
    marginTop: 30,
  },
  signupText: {
    fontFamily: "poppins-Regular",
    alignSelf: "center",
    marginBottom: 15,
    // alignSelf:'flex-end'
  },
  welcomeText: {
    fontFamily: "league-Semibold",
    fontSize: 18,
    marginTop: 25,
    marginBottom: 10,
  },
  lorems: {
    fontSize: 14,
    fontFamily: "poppins-Regular",
  },
  errorInput: {
    borderWidth: 2,
    borderColor: "red",
  },
  errorValue: {
    color: "red",
    position: "absolute",
    bottom: 2,
    fontSize: 12,
    fontFamily: "poppins-Regular",
  },
  btnCon: {
    marginTop: 15,
  },

  forgotPass: {
  
    alignSelf:'flex-end',
    marginTop:10,
   
    fontFamily: "league-Regular",
    color: "#FD8204",
  },
});
