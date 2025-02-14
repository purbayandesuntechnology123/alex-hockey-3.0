import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface HeaderNav {
  title: string;
  containerStyle?: ViewStyle;
}
const HeaderNav: React.FC<HeaderNav> = ({ title, containerStyle }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.back();
  };
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TouchableOpacity onPress={handleNavigation}>
        <AntDesign name="arrowleft" size={24} color="#666666" />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    // paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 18,
    color: "#6D6D6D",
    fontWeight: "600",
  },
});

export default HeaderNav;
