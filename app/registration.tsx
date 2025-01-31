import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Inputs from "@/components/Inputs";
import Button from "@/components/Button";
import Labels from "@/components/Labels";
import Header from "@/components/Header";
import PrevArrows from "@/components/PrevArrows";
import Checkbox from "expo-checkbox";
import SocialSignup from "@/components/SocialSignup";
import { Link, useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import Eye from "@/components/Eye";

const index = () => {
  const navigation: any = useNavigation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });

  const [isHidden, setHidden] = useState({
    password: true,
    confirmPassword: true,
  });

  const toggleVisibility = (field: "password" | "confirmPassword") => {
    setHidden((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins (2)/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins (2)/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins (2)/Poppins-Bold.ttf"),
    "league-Regular": require("../assets/fonts/Bebas_Neue,GFS_Neohellenic,League_Spartan/League_Spartan/static/LeagueSpartan-Regular.ttf"),
  });

  //   Button Handler

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [isChecked, setChecked] = useState(false);

  const validationCheck = () => {
    let newErrors = {
      fullName: "",
      email: "",
      password: "",
      contact: "",
      consent: "",
    };
    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full Name is Required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is Required";
    }
    if (formData.email.trim() !== "" && !emailRegex.test(formData.email)) {
      newErrors.email = "Must be an email";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "password is required ";
    }
    if (formData.password.trim() !== "" && formData.password.length < 6) {
      newErrors.password = "Password must be of 6 characters";
    }
    if(!formData.contact){
      newErrors.contact='Please provide your contact number'
    }
    // if (formData.confirmPassword.trim() === "") {
    //   newErrors.confirmPassword = "Confirm password is Required";
    // }
    // if (formData.password !== formData.confirmPassword)
    //   newErrors.confirmPassword = "Passwords do not match";

    if (
      !newErrors.fullName &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.contact
    ) {
      if (!isChecked) {
        newErrors.consent = "Please sign the checkbox";
        Alert.alert(newErrors.consent);
      }
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };
  const handleSubmit = () => {
    if (validationCheck()) {
      console.log({ ...formData, isChecked });
      navigation.navigate("login");
    }
  };

  return (
  
     
   <ScrollView style={styles.mainContainer}>
      {/* <View > */}
      <PrevArrows href={"/"} style={styles.prevBtn}/>
      <Header text="Registration" />

      <View style={styles.inputMain}> 
       
        <View style={styles.inputCon}>
        <Labels labels="Full Name" />
          <Inputs
            style={errors.fullName ? styles.errorInput : null}
            name="fullname"
            placeholder="Enter Your Name"
            value={formData.fullName}
            onChangeText={(text: string) =>
              setFormData({ ...formData, fullName: text })
            }
          />
          {errors.fullName && (
            <Text style={styles.errorMessage}>{errors.fullName}</Text>
          )}
        </View>

      
        <View style={styles.inputCon}>
        <Labels labels="Email" />
          <Inputs
            style={errors.email ? styles.errorInput : null}
            name="email"
            value={formData.email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            placeholder="Enter Your Email Id"
            onChangeText={(text: string) =>
              setFormData({ ...formData, email: text })
            }
          />
          {errors.email && (
            <Text style={styles.errorMessage}>{errors.email}</Text>
          )}
        </View>
        
        <View style={styles.inputCon}>
        <Labels labels="Contact Number" />
          <Inputs
            style={errors.contact ? styles.errorInput : null}
            name="verify password"
            keyboardType="numeric"
            value={formData.contact}
            secureTextEntry={isHidden.confirmPassword}
            placeholder="Enter Your Contact Number"
            onChangeText={(text: string) =>
              setFormData({ ...formData, contact: text })
            }
          />

       
          {errors.contact && (
            <Text style={styles.errorMessage}>{errors.contact}</Text>
          )}
        </View>
        <Labels labels="Password" />
        <View style={styles.inputCon}>
          <Inputs
            style={errors.password ? styles.errorInput : null}
            name="password"
            value={formData.password}
            placeholder="Enter Your Password"
            secureTextEntry={isHidden.password}
            onChangeText={(text: string) =>
              setFormData({ ...formData, password: text })
            }
          />
          <Eye
            onPress={() => toggleVisibility("password")}
            isHidden={isHidden.password}
          />
          {errors.password && (
            <Text style={styles.errorMessage}>{errors.password}</Text>
          )}
        </View>
        </View>
        <View style={styles.checkboxCon}>
          <Checkbox value={isChecked} onValueChange={setChecked} style={styles.checkboxColor}/>
          <Text style={styles.terms}>
            I Agree <Text style={{ color: "#FD8204" }}>Terms & Conditions</Text>
          </Text>
        </View>
        <Button text="Sign Up" onPress={handleSubmit} />

        <View style={{alignSelf:'center'}}>  <SocialSignup /></View>
      
        <Text style={{ marginTop: 11, fontFamily: "poppins-Regular", color:'#070707', alignSelf:'center'}}>
          Have an account?
          <Link
            href={"/login"}
            style={{
              color: "#FD8204",
              fontWeight: "500",
              fontFamily: "poppins-Semibold",
            }}
          >
            {" "}
            Sign In
          </Link>
        </Text>
      {/* </View> */}
      </ScrollView>
   
  );
};

export default index;

const styles = StyleSheet.create({
  
  mainContainer: {
    flex:1,
    backgroundColor:'#FFFFFF',
    // paddingVertical: 15,
    // justifyContent: "space-between",
   
    // padding: 20,
    paddingHorizontal:20,
  
  },
  inputCon:{
    marginBottom:20
  },
  checkboxCon: {
    flexDirection: "row",
    marginBottom: 24,
    alignSelf: "flex-start",
    gap: 5,
  
  },
  checkboxColor:{
    borderColor:'#939393',
    borderRadius:4,
    borderWidth:1
  },
  terms: {
    fontFamily: "poppins-Regular",
    color:"#6B6B6B"
  },

  inputMain:{marginTop:55,},

  errorInput: {
    borderWidth: 2,
    borderColor: "red",
  },
  prevBtn:{
    position:'absolute',
 top:10
  },
  errorMessage: {
    fontSize: 11,
   
 
    color: "red",
    alignSelf: "flex-start",
    bottom:0,
  
    fontFamily: "poppins-Regular",
  },
});
