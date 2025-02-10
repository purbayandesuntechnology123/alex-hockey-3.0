import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const PrevArrows = ({ href, style = {} }: any) => {
  return (
    <Link href={href} style={styles.prevArrow}>
      <MaterialIcons name="arrow-back-ios" size={20} color={`#FD8204`} />
    </Link>
  );
};

export default PrevArrows;

const styles = StyleSheet.create({
  prevArrow: {
    position: "absolute",
    top: 15,
    left: 20,
  },
});
