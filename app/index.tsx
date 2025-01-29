import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Inputs from "@/components/Inputs";
import Button from "@/components/Button";
import Labels from "@/components/Labels";
import Header from "@/components/Header";
import PrevArrows from "@/components/PrevArrows";
import Allcheckbox from "@/components/checkbox";
import Checkbox from "expo-checkbox";
import SocialSignup from "@/components/SocialSignup";
import { Link } from "expo-router";

const index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <View style={styles.main}>
      <PrevArrows />
      <Header text="Registration" />
      <Link href={"/login"} style={{ textAlign: "center" }}>
        Login
      </Link>
      <View style={styles.container}>
        <Labels labels="Full Name" />
        <Inputs
          placeholder="Enter Your Name"
          value={formData.fullName}
          onChangeText={(text: any) =>
            setFormData({ ...formData, fullName: text })
          }
        />
        <Labels labels="Email" />
        <Inputs
          value={formData.email}
          keyboardType="email-address"
          placeholder="Enter Your Email Address"
          onChangeText={(text: any) =>
            setFormData({ ...formData, email: text })
          }
        />
        <Labels labels="Password" />
        <Inputs
          value={formData.password}
          placeholder="Enter Your Password"
          onChangeText={(text: any) =>
            setFormData({ ...formData, email: text })
          }
        />
        <Labels labels="Confirm Password" />
        <Inputs
          value={formData.confirmPassword}
          secureTextEntry
          placeholder="Confirm password"
          onChangeText={(text: any) =>
            setFormData({ ...formData, email: text })
          }
        />
        <View style={styles.checkboxCon}>
          <Checkbox />
          <Text>
            I agree <Text>Terms & Conditions</Text>
          </Text>
        </View>
        <Button text="Sign Up" />
        <SocialSignup />
        <Text style={{ marginTop: 20 }}>
          Don't have an account?{" "}
          <Text style={{ color: "#FD8204", fontWeight: "500" }}>Sign Up</Text>{" "}
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
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  checkboxCon: {
    flexDirection: "row",
    marginBottom: 30,
    alignSelf: "flex-start",
    gap: 5,
    marginStart: 10,
  },
});
