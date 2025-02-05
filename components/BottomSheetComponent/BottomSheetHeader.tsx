import { iconLink } from "@/constants/image";
import React from "react";
import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";

interface BottomSheetHeaderProps {
  leftIconName: string;
  rightIconName?: string;
  onPressFirst?: () => void;
  onPressSecond?: () => void;
  containerStyle?: ViewStyle;          
}

const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
  leftIconName,
  rightIconName,
  onPressFirst,
  onPressSecond,
  containerStyle,
}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      {leftIconName ? (
        <Image
          source={leftIconName ? leftIconName : iconLink.sideMenu}
          style={{ height: 30, width: 30, resizeMode: "contain" }}
        />
      ) : null}
      <View style={{ flex: 1 }}>
        <Text style={styles.menu}>Menu</Text>
      </View>
      {rightIconName ? (
        <Image
          source={rightIconName ? rightIconName : iconLink.setting}
          style={{ height: 30, width: 30, resizeMode: "contain" }}
        />
      ) : null}  
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default BottomSheetHeader;
