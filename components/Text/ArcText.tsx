import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import { View, Text as RNText } from "react-native";
import Svg, { Path, Text, TextPath, Defs } from "react-native-svg";

interface ArcTextProps {
  text: string;
  setArcHeight?: (value: number) => void;
  arcHeight: number;
}

const ArcText: React.FC<ArcTextProps> = ({ text, setArcHeight, arcHeight }) => {
  //   const [arcHeight, setArcHeight] = useState(70); // Default arc height

  const [value, setValue] = useState(arcHeight);

  //   useEffect(() => {
  //     setValue(arcHeight);
  //   }, [arcHeight]);

  console.log("arcHeight", arcHeight);
  console.log("value", value);

  // Generate dynamic arc path based on slider value
  //   const arcPath = `M 30,100 A ${arcHeight},${arcHeight} 0 1,1 170,100`;
  const arcPath = `M 50,150 Q 100,${150 - arcHeight} 150,150`;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* SVG with Dynamic Arc */}
      <Svg key={arcHeight} height="200" width="200" viewBox="0 0 200 200">
        <Defs>
          <Path id="arcPath" d={arcPath} fill="none" stroke="transparent" />
        </Defs>

        {/* Stroke (Outline) */}
        <Text
          fontSize="20"
          fontWeight="bold"
          stroke="black"
          strokeWidth={3}
          fill="none"
        >
          <TextPath href="#arcPath" startOffset="50%" textAnchor="middle">
            {text}
          </TextPath>
        </Text>

        {/* Filled Inner Text */}
        <Text fontSize="20" fontWeight="bold" fill="white">
          <TextPath href="#arcPath" startOffset="50%" textAnchor="middle">
            {text}
          </TextPath>
        </Text>
      </Svg>

      {/* Slider Control */}
      <RNText style={{ marginTop: 20, fontSize: 16, fontWeight: "bold" }}>
        Adjust Curve
      </RNText>
      {/* <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={20} // Minimum curve
        maximumValue={100} // Maximum curve
        step={1}
        value={arcHeight}
        onValueChange={(value) => setArcHeight(value)}
        minimumTrackTintColor="#000"
        maximumTrackTintColor="#888"
      /> */}
    </View>
  );
};

export default ArcText;
