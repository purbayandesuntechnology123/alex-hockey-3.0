import * as React from "react"
import { View } from "react-native"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const GoogleSvg = (props: SvgProps) => (
  <View
  style={{
    width: 50,  // Adjust based on your design
    height:50, // Adjust based on your design
    backgroundColor: "white", // Light blue background (change as needed)
    borderRadius: 50, // Fully rounded (half of width/height)
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000", // Shadow color
    // shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Blur effect
    elevation: 5,
  }}
>
  <Svg
    
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#FBBB00"
        d="m4.876 13.295-.766 2.859-2.8.059A10.951 10.951 0 0 1 0 11c0-1.824.444-3.544 1.23-5.059l2.492.457 1.092 2.477A6.539 6.539 0 0 0 4.461 11c0 .807.146 1.581.415 2.295Z"
      />
      <Path
        fill="#518EF8"
        d="M21.808 8.945a11.023 11.023 0 0 1-.048 4.352 10.997 10.997 0 0 1-3.873 6.281h-.001l-3.139-.16-.444-2.773a6.556 6.556 0 0 0 2.82-3.348h-5.881V8.945h10.566Z"
      />
      <Path
        fill="#28B446"
        d="M17.886 19.578A10.953 10.953 0 0 1 11 22c-4.19 0-7.831-2.341-9.69-5.787l3.566-2.918a6.54 6.54 0 0 0 9.427 3.35l3.583 2.933Z"
      />
      <Path
        fill="#F14336"
        d="M18.021 2.532 14.458 5.45a6.542 6.542 0 0 0-9.644 3.425L1.231 5.94H1.23A10.998 10.998 0 0 1 11 0c2.669 0 5.116.95 7.021 2.532Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  </View>
)
export default GoogleSvg
