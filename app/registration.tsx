import { Alert, StyleSheet, Text, View } from "react-native";
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
    confirmPassword: "",
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
    confirmPassword: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [isChecked, setChecked] = useState(false);

  const validationCheck = () => {
    let newErrors = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    if (formData.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm password is Required";
    }
     if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

     if(!newErrors.fullName && !newErrors.email && !newErrors.password && !newErrors.confirmPassword){
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
    <View style={styles.main}>
      <PrevArrows href={"/"} />
      <Header text="Registration" />
      {/* <Link href={"/login"} style={{ textAlign: "center" }}>
        Login 
      </Link> */}
      <View style={styles.container}>
        <Labels labels="Full Name" />
        <View>
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

        <Labels labels="Email" />
        <View>
          <Inputs
            style={errors.email ? styles.errorInput : null}
            name="email"
            value={formData.email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            placeholder="Enter Your Email Address"
            onChangeText={(text: string) =>
              setFormData({ ...formData, email: text })
            }
          />
          {errors.email && (
            <Text style={styles.errorMessage}>{errors.email}</Text>
          )}
        </View>
        <Labels labels="Password" />
        <View style={{ position: "relative" }}>
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

        <Labels labels="Confirm Password" />
        <View style={{ position: "relative" }}>
          <Inputs
            style={errors.confirmPassword ? styles.errorInput : null}
            name="verify password"
            value={formData.confirmPassword}
            secureTextEntry={isHidden.confirmPassword}
            placeholder="Confirm password"
            onChangeText={(text: string) =>
              setFormData({ ...formData, confirmPassword: text })
            }
          />

          <Eye
            color="black"
            onPress={() => toggleVisibility("confirmPassword")}
            isHidden={isHidden.confirmPassword}
          />
          {errors.confirmPassword && (
            <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>
          )}
        </View>

        <View style={styles.checkboxCon}>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <Text style={styles.terms}>
            I Agree <Text style={{ color: "#FD8204" }}>Terms & Conditions</Text>
          </Text>
        </View>
        <Button text="Sign Up" onPress={handleSubmit} />
        <SocialSignup />
        <Text style={{ marginTop: 10, fontFamily: "poppins-Regular" }}>
         Have an account?   
          <Link href={'/login'}
            style={{
              color: "#FD8204",
              fontWeight: "500",
              fontFamily: "poppins-Regular",
            }}
          >{' '}
             Sign In
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    position: "relative",
  },
  container: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  checkboxCon: {
    flexDirection: "row",
    marginBottom: 20,
    alignSelf: "flex-start",
    gap: 5,
    marginStart: 10,
    marginTop: 10,
  },
  terms: {
    fontFamily: "poppins-Regular",
  },

  errorInput: {
    borderWidth: 2,
    borderColor: "red",
  },
  errorMessage: {
    fontSize: 11,
    position: "absolute",
    color: "red",
    alignSelf: "flex-start",
    bottom: 0,
    fontFamily: "poppins-Regular",
  },
});
