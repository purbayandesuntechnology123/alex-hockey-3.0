import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const PrevArrows = ({ href }: any) => {
  return (
    <View style={styles.prevArrow}>
      <Link href={href}>
        <MaterialIcons name="arrow-back-ios" size={20} color={`#FD8204`} />
      </Link>
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
