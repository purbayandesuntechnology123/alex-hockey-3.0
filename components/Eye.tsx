import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";

const Eye = ({ onPress, isHidden, style = {} }: any) => {
  return (
    <View style={[styles.eyeContainer, style]}>
      {isHidden ? (
        <Entypo
          name="eye-with-line"
          size={24}
          color="black"
          onPress={onPress}
        />
      ) : (
        <Entypo name="eye" size={24} color="black" onPress={onPress} />
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
