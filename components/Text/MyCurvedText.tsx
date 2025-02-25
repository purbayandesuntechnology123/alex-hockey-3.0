import { themeColor } from "@/constants/colors";
import React from "react";
// import CurvedText from "react-curved-text";
// import ReactCurvedText from "react-curved-text";
import { Text, View } from "react-native";
import ArcText from "./ArcText";

interface MyCurvedTextProps {
  item: number;
}

const MyCurvedText: React.FC<MyCurvedTextProps> = ({item}) => {
  return (
    <View>
        <Text style={{color: themeColor.white}}>{item}</Text>
        {/* <ArcText /> */}
        {/* <ReactCurvedText
          width={300}
          height={300}
          cx={150}
          cy={150}
          rx={100}
          ry={100}
          startOffset={50}
          reversed={false}
          text="react-curved-text"
          textProps={{ style: { fontSize: 24 } }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        /> */}
    </View>
    // <ReactCurvedText
    //   width={400}
    //   height={400}
    //   cx={200}
    //   cy={200}
    //   rx={100}
    //   ry={100}
    //   startOffset={0}
    //   reversed={false}
    //   text="Curved Outline Text"
    //   textProps={{
    //     fill: "white",       // Text color
    //     stroke: "black",     // Outline color
    //     strokeWidth: 1.5,    // Outline thickness
    //   }}
    //   svgProps={{}}
    // />
  );
};

export default MyCurvedText;
