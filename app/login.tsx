import { StyleSheet, Text, View } from "react-native";
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
  const [error, setError]=useState({email:'', password:''})

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateLogin = () => {
    
    let newErrorMessage={email:'', password:''}
    
    if(credentials.email===''){
      newErrorMessage.email="Please provide your email"
     
    }
     else if(!emailRegex.test(credentials.email)){
      newErrorMessage.email="Not an email"
    }
    if(credentials.password===""){
    newErrorMessage.password="password does not match"
   }
   setError(newErrorMessage)
   return !Object.values(newErrorMessage).some(error => error !== '');
   
  };

  const loginHandle=()=>{
    if(validateLogin()){
      console.log(credentials)
    }
  }

  return (
    <View style={styles.main}>
      <View style={{ position: "relative" }}>
        <Header text="Login" />
        <PrevArrows href={"/registration"} />
      </View>
      {/* <Link href={"/forgotpassword"}>Forgot Password</Link> */}
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.lorems}>
          Lorem ipsum dolor sit amet dolor sit amet dolor sit amet...{" "}
        </Text>
      </View>
      {/* <Image source={loginSVG} style={styles.loginSVG} /> */}
      <View style={styles.container}>
        <Labels labels="Email" />
        <View>
        <Inputs
          value={credentials.email}
          style={error.email ? styles.errorInput:null}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          placeholder="Enter Your Email Address"
          onChangeText={(text: any) =>
            setCredentials({ ...credentials, email: text })
          }
        />
        {error.email&& <Text style={styles.errorValue}>{error.email}</Text>}
        </View>
        <Labels labels="Password" />
        <View> 
        <Inputs
          value={credentials.password}
          style={error.password ? styles.errorInput:null}
          placeholder="Enter Your Password"
          onChangeText={(text: any) =>
            setCredentials({ ...credentials, password: text })
          }
        />
        {error.password && <Text style={styles.errorValue}>{error.password}</Text>}
        <Link href={'/forgotpassword'} style={styles.forgotPass}>Forgot Password</Link>
        </View>
        <View style={styles.btnCon}> 
        <Button text="Log In" onPress={loginHandle} />
        </View>
        <SocialSignup />
      </View>
      <Text style={styles.signupText}>
        Don't have an account? <Text style={{color:'#FD8204', fontFamily:'poppins-Semibold'}}> Sign Up</Text>
      </Text>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: "relative",
  },
  container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textContainer: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  signupText: {
    position: "absolute",
    fontFamily:'poppins-Regular',
    bottom: 20,
    left: 70,
    
    // alignSelf:'flex-end'
  },
  welcomeText: {
    fontFamily: "league-Semibold",
    fontSize: 18,
    marginBottom: 10,
  },
  lorems:{
    fontSize:14,
    fontFamily:'poppins-Regular',
  },
  errorInput:{
    borderWidth:2,
    borderColor:'red'
  },
  errorValue:{
    color:'red',
    position:'absolute',
    bottom:2,
    fontSize:12,
    fontFamily:'poppins-Regular',
  },
  btnCon:{
  marginTop:20
  },

  forgotPass:{
    position:'absolute',
    bottom:1,
    right:1,
    fontSize:12,
    fontFamily:'league-Regular',
    color:'#FD8204'
  }
});
