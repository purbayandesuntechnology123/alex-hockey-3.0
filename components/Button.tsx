import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ text, onPress }: any) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.buttonDesign}>
        <Text style={styles.btnTxt}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonDesign: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    width: 300,
  },
  btnTxt: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
