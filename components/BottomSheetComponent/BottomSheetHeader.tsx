import { iconLink } from "@/constants/image";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  ImageStyle,
} from "react-native";

interface BottomSheetHeaderProps {
  leftIconName: string;
  rightIconName?: string;
  onPressFirst?: () => void;
  onPressSecond?: () => void;
  containerStyle?: ViewStyle;
  title: string;
  rightIconStyle?: ImageStyle;
}

const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
  title,
  leftIconName,
  rightIconName,
  onPressFirst,
  onPressSecond,
  containerStyle,
  rightIconStyle,
}) => {
  return (
    <View
      style={[
        { flexDirection: "row", justifyContent: "space-between" },
        { ...containerStyle },
      ]}
    >
      {leftIconName ? (
        <TouchableOpacity onPress={onPressFirst}>
          <Image
            source={leftIconName ? leftIconName : iconLink.sideMenu}
            style={{ height: 20, width: 20, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      ) : null}
      <View style={{ flex: 1 }}>
        <Text style={styles.menu}>{title}</Text>
      </View>
      {rightIconName ? (
        <TouchableOpacity onPress={onPressSecond}>
          <Image
            source={rightIconName ? rightIconName : iconLink.setting}
            style={[{ height: 20, width: 20, resizeMode: "contain" }, {...rightIconStyle}]}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default BottomSheetHeader;
