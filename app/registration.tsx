import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
import Status from "@/components/StatusBar";
import { LinearGradient } from "expo-linear-gradient";

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
    "poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
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
    let isValid = true;
    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full Name is Required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is Required";
      isValid = false;
    }
    if (formData.email.trim() !== "" && !emailRegex.test(formData.email)) {
      newErrors.email = "Must be an email";
      isValid = false;
    }
    if (formData.password.trim() === "") {
      newErrors.password = "password is required ";
      isValid = false;
    }
    if (formData.password.trim() !== "" && formData.password.length < 6) {
      newErrors.password = "Password must be of 6 characters";
      isValid = false;
    }
    if (!formData.contact) {
      newErrors.contact = "Please provide your contact number";
      isValid = false;
    }

    if (
      !newErrors.fullName &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.contact
    ) {
      if (!isChecked) {
        newErrors.consent = "Please sign the checkbox";
        Alert.alert(newErrors.consent);
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = () => {
    if (validationCheck()) {
      console.log({ ...formData, isChecked });
      navigation.navigate("login");
    }
  };

  return (
    // <ScrollView contentContainerStyle=>
     <View style={styles.mainContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainCon}>
          <PrevArrows href={"/"} />
          <Header text="Registration" />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}>
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
                {errors.fullName ? (
                  <Text style={styles.errorMessage}>{errors.fullName}</Text>
                ) : null}
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
                {errors.email ? (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                ) : null}
              </View>

              <View style={styles.inputCon}>
                <Labels labels="Contact Number" />
                <Inputs
                  style={errors.contact ? styles.errorInput : null}
                  name="contact_number"
                  keyboardType="numeric"
                  value={formData.contact}
                  placeholder="Enter Your Contact Number"
                  onChangeText={(text: string) =>
                    setFormData({ ...formData, contact: text })
                  }
                />

                {errors.contact ? (
                  <Text style={styles.errorMessage}>{errors.contact}</Text>
                ) : null}
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
                {errors.password ? (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                ) : null}
              </View>
            </View>
            <View style={styles.checkboxCon}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#FD8204" : ""}
                style={styles.checkboxColor}
              />
              <Text style={styles.terms}>
                I Agree{" "}
                <Text style={{ color: "#FD8204" }}>
                  Terms And Conditions {"     "}
                </Text>
              </Text>
            </View>
            <Button text="Sign Up" onPress={handleSubmit} />

            <View style={{ alignSelf: "center" }}>
              {" "}
              <SocialSignup />
            </View>

            <View style={{ width: "100%", marginTop: 11 }}>
              <Text
                style={{
                  marginTop: 11,
                  color: "#070707",
                  alignSelf: "center",
                }}>
                Have an account?
                <Link
                  href={"/login"}
                  style={{
                    color: "#FD8204",
                    fontWeight: "500",
                    fontFamily: "poppins-Semibold",
                  }}>
                  <Text> Sign In {"    "}</Text>
                </Link>
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FD8204',
    paddingTop: 10,
},
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },

  mainCon: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  inputCon: {
    marginBottom: 20,
  },
  checkboxCon: {
    flexDirection: "row",
    marginBottom: 24,
    alignSelf: "flex-start",
    gap: 5,
  },
  checkboxColor: {
    borderColor: "#939393",
    borderRadius: 4,
    borderWidth: 1,
  },
  terms: {
    fontFamily: "poppins-Regular",
    color: "#6B6B6B",
    width: "100%",
  },

  inputMain: { marginTop: 45 },

  errorInput: {
    borderWidth: 2,
    borderColor: "red",
  },
  prevBtn: {
    position: "absolute",
    top: 10,
    left: 20,
  },
  errorMessage: {
    fontSize: 11,

    color: "red",
    alignSelf: "flex-start",
    bottom: 0,

    fontFamily: "poppins-Regular",
  },
});
