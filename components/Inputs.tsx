import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";

const Inputs = ({
  value,
  onChangeText,

  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  style = {},
}: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins (2)/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins (2)/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins (2)/Poppins-Bold.ttf"),
  });

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.input, isFocused && styles.focusedInput, style]}
      />
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  inputContainer: {},

  input: {
    width: 300,
    height: 50,
    outlineColor: "orange",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontFamily: "poppins-Regular",
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: "#FD8204",
  },
});
