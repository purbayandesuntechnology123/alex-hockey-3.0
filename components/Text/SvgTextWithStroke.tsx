import { themeColor } from "@/constants/colors";
import React from "react";
import { View } from "react-native";
import Svg, { Text } from "react-native-svg";

interface SvgTextWithStrokeProps {
  text: string;
}

const SvgTextWithStroke: React.FC<SvgTextWithStrokeProps> = ({ text }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Svg height="100" width="300">
        <Text
          x="50"
          y="50"
          fontSize="40"
          stroke={themeColor.white}
          strokeWidth="2"
          fill={themeColor.black}
        >
          {text}
        </Text>
      </Svg>
    </View>
  );
};

export default SvgTextWithStroke;
