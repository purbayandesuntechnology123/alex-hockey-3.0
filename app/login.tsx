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
// import loginSVG from "../assets/images/login.svg";

const login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  //Login Handle
  const [error, setError]=useState({email:'', password:''})

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateLogin = () => {
    
    let newErrorMessage={email:'', password:''}
    
    if(credentials.email===''){
      newErrorMessage.email="Please provide yor email"
     
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
      <Link href={"/forgotpassword"}>Forgot Password</Link>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.lorems}>
          Lorem ipsum dolor sit amet dolor sit amet dolor sit amet...{" "}
        </Text>
      </View>
      {/* <Image source={loginSVG} style={styles.loginSVG} /> */}
      <View style={styles.container}>
        <Labels labels="Email" />
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
        <Labels labels="Password" />
        <Inputs
          value={credentials.password}
          style={error.password ? styles.errorInput:null}
          placeholder="Enter Your Password"
          onChangeText={(text: any) =>
            setCredentials({ ...credentials, password: text })
          }
        />
        {error.password && <Text style={styles.errorValue}>{error.password}</Text>}
        <Button text="Log In" onPress={loginHandle} />
        <SocialSignup />
      </View>
      <Text style={styles.signupText}>
        Don't have an account? <Text> Sign Up</Text>
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
    color:'red'
  }
});
