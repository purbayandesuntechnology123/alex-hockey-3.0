import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const Button = ({ text, onPress, style = {} }: any) => {
  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins (2)/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins (2)/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins (2)/Poppins-Bold.ttf"),
  });
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.buttonDesign}>
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
    paddingVertical: 10,
    borderRadius: 30,
    width: 300,
  },
  btnTxt: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "poppins-Semibold",
  },
});
