import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";

const Inputs = ({
  value,
  onChangeText,
  name,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize,
  autoComplete,
  maxLength,

  style = {},
}: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "poppins-light": require("../assets/fonts/Poppins/Poppins-Light.ttf"),
  });

  return (
    <TextInput
      accessibilityLabel={name}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      autoComplete={autoComplete}
      maxLength={maxLength}
      style={[styles.input, isFocused && styles.focusedInput, style]}
    />
  );
};

export default Inputs;

const styles = StyleSheet.create({
  input: {
    // outlineColor: "orange",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 8,
    paddingHorizontal: 10,

    fontFamily: "poppins-light",
    backgroundColor: "#FCFCFC",
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: "#FD8204",
  },
});
