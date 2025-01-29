import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="registration"
        options={{
          title: "Registration",
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="index"
        options={{ title: "Registration", headerShown: false }}></Stack.Screen>
      <Stack.Screen
        name="login"
        options={{ title: "Login", headerShown: false }}></Stack.Screen>

      <Stack.Screen
        name="forgotpassword"
        options={{
          title: "Forgot Password",
          headerShown: false,
        }}></Stack.Screen>

      <Stack.Screen
        name="verifyotp"
        options={{
          title: "Verify OTP",
          headerShown: false,
        }}></Stack.Screen>
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
