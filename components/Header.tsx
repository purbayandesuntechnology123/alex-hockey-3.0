import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrevArrows from "./PrevArrows";

const Header = ({ text, style = {} }: any) => {
  return (
    <View style={styles.headerCon}>
      <Text style={[style, styles.headerText]}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerCon: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#FD8204",
    fontWeight: "500",
    fontSize: 20,
  },
});
