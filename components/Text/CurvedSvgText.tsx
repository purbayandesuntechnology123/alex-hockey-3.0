import React from "react";
import { View, Image } from "react-native";
import {
  Circle,
  Text as SvgText,
  TextPath,
  TSpan,
  G,
  Svg,
} from "react-native-svg";

const CurvedSvgText: React.FC = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Svg height="200" width="200" viewBox="0 0 300 300">
        <G id="circle">
          <Circle
            r={75}
            x={150}
            fill="none"
            stroke="#fff"
            strokeWidth={14}
            transform="rotate(-145)"
          />
        </G>
        <SvgText fill="#000" fontSize="14">
          <TextPath href="#circle">
            <TSpan dx="0" dy={-20}>  
              Text along a curved path
            </TSpan>
            <TSpan dx="0" dy={20}>
              Text along a curved path2
            </TSpan>
            <TSpan dx="0" dy={40}>
              Text along a curved path3
            </TSpan>
            <TSpan dx="0" dy={60}>
              Text along a curved path4
            </TSpan>
            <TSpan dx="0" dy={80}>
              Text along a curved path5
            </TSpan>
          </TextPath>
        </SvgText>
      </Svg>
      <View>
        {/* <Image
          style={{ height: 120, width: 120, borderRadius: 60, marginTop: 70 }}
          source={require("./dog.jpg")}
        /> */}
      </View>
    </View>
  );
};

export default CurvedSvgText;
