import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const PrevArrows = ({ href , style={}}: any) => {
  return (
    <View style={styles.prevArrow}>
      <Link href={href} style={style}>
        <MaterialIcons name="arrow-back-ios" size={20} color={`#FD8204`} />
      </Link>
    </View>
  );
};

export default PrevArrows;

const styles = StyleSheet.create({
  prevArrow: {
  
  },
});
