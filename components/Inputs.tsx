import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Inputs = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  style = {},
}: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
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
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: "orange",
  },
});
