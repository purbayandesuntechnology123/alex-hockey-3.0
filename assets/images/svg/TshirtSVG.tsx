import React from "react";
import Svg, { Path } from "react-native-svg";

const HockeyJersey = ({ bodyColor = "white", sleeveColor = "#E0E0E0" }) => (
  <Svg width="200" height="250" viewBox="0 0 200 250">
    {/* Sleeves */}
    <Path d="M20 50 Q10 100 20 200 L60 220 L80 60 Z" fill={sleeveColor} stroke="#B0B0B0" strokeWidth="2" />
    <Path d="M180 50 Q190 100 180 200 L140 220 L120 60 Z" fill={sleeveColor} stroke="#B0B0B0" strokeWidth="2" />

    {/* Main Body */}
    <Path d="M60 50 Q100 10 140 50 L140 220 Q100 240 60 220 Z" fill={bodyColor} stroke="#B0B0B0" strokeWidth="2" />

    {/* Collar */}
    <Path d="M80 40 Q100 0 120 40 Q100 45 80 40 Z" fill="white" stroke="#B0B0B0" strokeWidth="2" />
  </Svg>
);

export default HockeyJersey;
