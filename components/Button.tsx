import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { fontFamily } from "@/constants/fontFamily";

const Button = ({ text, onPress, style = {}, containerStyle }: any) => {
  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonDesign, { ...containerStyle }]}
      >
        <Text style={[styles.btnTxt, style]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonDesign: {
    backgroundColor: "#FD8204",
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 30,
  },
  btnTxt: {
    color: "white",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 15,
    fontFamily: fontFamily[500]
    // fontFamily: "poppins-Semibold",
  },
});
