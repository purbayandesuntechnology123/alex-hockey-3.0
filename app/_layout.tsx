import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Navigator, Slot, Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
// import { BottomSheetProvider } from "@/components/CustomBottomSheet";

const _layout = () => {
  const router = useRouter();
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins/Poppins-Thin.ttf"),
  });

  console.log("loaded=====>", loaded);
  useEffect(() => {
    // router.push("/HomePage")
    if (loaded) {
      setTimeout(() => {
        router.push("/welcome");
        // router.push("/HomePage")
      }, 3000);
    }
  }, [loaded]);

  if (!loaded) {
    return <Slot />;
  }
  return (
    // <BottomSheetProvider>
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
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
      <Stack.Screen
        name="ShoppingAddress"
        options={{
          title: "Cart",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="OrderDetails"
        options={{
          title: "Cart",
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack>
    // </BottomSheetProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
