import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Entypo, Feather } from "@expo/vector-icons";

const Eye = ({ onPress, isHidden, style = {} }: any) => {
  return (
    <View style={[styles.eyeContainer, style]}>
      {isHidden ? (
        <Feather
          name="eye-off"
          size={20}
          color="#777777"
          onPress={onPress}
        />
      ) : (
        <Feather name="eye" color="#777777" size={20}  onPress={onPress} />
      )}
    </View>
  );
};

export default Eye;

const styles = StyleSheet.create({
  eyeContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
