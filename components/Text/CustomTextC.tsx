import React from "react";
import { View } from "react-native";
import Svg, { Text } from "react-native-svg";

// Define allowed directions
type TextDirection = "horizontal" | "vertical" | "diagonal";

// Define prop types
interface CustomTextProps {
  text: string;
  direction?: TextDirection;
  fontSize?: number;
  color?: string;
}

const CustomTextC: React.FC<CustomTextProps> = ({
  text,
  direction = "horizontal",
  fontSize = 20,
  color = "black",
}) => {
  let rotation = "0"; // Default is horizontal

  if (direction === "vertical") {
    rotation = "-90"; // Rotate counterclockwise for vertical text
  } else if (direction === "diagonal") {
    rotation = "-175"; // Rotate diagonally
  }

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg height="100" width="200">
        <Text
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize={fontSize}
          fill={color}
          transform={`rotate(${rotation}, 100, 50)`}
        >
          {text}
        </Text>
      </Svg>
    </View>
  );
};

export default CustomTextC;
