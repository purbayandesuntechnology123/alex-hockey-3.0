import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const PrevArrows = () => {
  return (
    <View style={styles.prevArrow}>
      <MaterialIcons name="arrow-back-ios" size={20} color={`#FD8204`} />
    </View>
  );
};

export default PrevArrows;

const styles = StyleSheet.create({
  prevArrow: {
    position: "absolute",
    top: 25,
    left: 30,
  },
});
