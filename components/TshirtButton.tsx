import { iconLink } from "@/constants/image";
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface TshirtButtonProps {
  leftIconName?: string;
  rightIconName?: string;
  onPressFirst?: () => void;
  onPressSecond?: () => void;
  containerStyle?: ViewStyle;
}

const TshirtButton: React.FC<TshirtButtonProps> = ({
  leftIconName,
  rightIconName,
  onPressFirst,
  onPressSecond,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TouchableOpacity
        style={{
          backgroundColor: "#FD8204",
          padding: 6,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onPressFirst}
      >
        <Image
          source={leftIconName ? leftIconName : iconLink.handBag}
          style={{
            height: 25,
            width: 25,
            borderRadius: 8,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "#FD8204", padding: 6, borderRadius: 8 }}
        onPress={onPressSecond}
      >
        <Image
          source={rightIconName ? rightIconName : iconLink.handBag}
          style={{
            height: 25,
            width: 25,
            borderRadius: 8,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});

export default TshirtButton;
