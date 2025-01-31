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
  hasError = false,
  
  style = {},
}: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins (2)/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins (2)/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins (2)/Poppins-Bold.ttf"),
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
        style={[styles.input, isFocused && styles.focusedInput, style, hasError&& styles.errorInput]}
      />
    
  );
};

export default Inputs;

const styles = StyleSheet.create({
 
  input: {
  
   height:45,
    outlineColor: "orange",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 8,
    padding: 10,
     
    fontFamily: "poppins-Regular",
    backgroundColor:'#FCFCFC'
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: "#FD8204",
  },
  errorInput:{
    borderWidth:2, 
    borderColor:'red'
  }
});
