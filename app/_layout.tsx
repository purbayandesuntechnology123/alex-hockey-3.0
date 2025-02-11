import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Navigator, Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="registration"
        options={{
          title: "Registration",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="index"
        options={{ title: "Splash", headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="login"
        options={{ title: "Login", headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="forgotpassword"
        options={{
          title: "Forgot Password",
          headerShown: false,
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="verifyotp"
        options={{
          title: "Verify OTP",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="changepassword"
        options={{
          title: "Change Password",
          headerShown: false,
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="success"
        options={{
          title: "Success Page",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="HomePage"
        options={{
          title: "Product Options",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="productoptions"
        options={{
          title: "Product Options",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="products"
        options={{
          title: "Product Options",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="rosterbuilder"
        options={{
          title: "Roster Builder",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="paymentIntegration"
        options={{
          title: "Payment Integration",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="orderConfirmation"
        options={{
          title: "Order Confirmation",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="ApplyCoupon"
        options={{
          title: "Apply Coupon",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Cart"
        options={{
          title: "Cart",
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
