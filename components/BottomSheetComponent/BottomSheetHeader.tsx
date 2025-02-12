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
  isTab?: boolean;
  isWordmark?: boolean;
  onTabLeftPress?: () => void;
  onTabRightPress?: () => void;
}

const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
  title,
  leftIconName,
  rightIconName,
  onPressFirst,
  onPressSecond,
  containerStyle,
  rightIconStyle,
  isWordmark,
  isTab = false,
  onTabLeftPress,
  onTabRightPress,
}) => {
  console.log("isWordmark", isWordmark);
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
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
      {!isTab ? (
        <View style={{ flex: 1 }}>
          <Text style={styles.menu}>{title}</Text>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#3E3E3E",
            // padding: 4,
            borderRadius: 6,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: !isWordmark ? "#FD8204" : "#3E3E3E",
              padding: 6,
              borderRadius: 8,
            }}
            onPress={onTabLeftPress}
          >
            <Text style={{ color: "#fff" }}>Crest Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: isWordmark ? "#FD8204" : "#3E3E3E",
              padding: 6,
              borderRadius: 8,
            }}
            onPress={onTabRightPress}
          >
            <Text style={{ color: "#fff" }}>Wordmark</Text>
          </TouchableOpacity>
        </View>
      )}
      {rightIconName ? (
        <TouchableOpacity onPress={onPressSecond}>
          <Image
            source={rightIconName ? rightIconName : iconLink.setting}
            style={[
              { height: 20, width: 20, resizeMode: "contain" },
              { ...rightIconStyle },
            ]}
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
