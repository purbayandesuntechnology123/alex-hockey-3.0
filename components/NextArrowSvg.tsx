import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const NextArrowSvg = (props: SvgProps) => (
  <Svg
   
    width={59}
    height={59}
    fill="none"
    {...props}
  >
    <G filter="url(#a)" shapeRendering="crispEdges">
      <Path
        fill="url(#b)"
        d="m32.181 33.647 8.168-8.106-8.168 8.106Zm8.168-8.106-8.106-8.168 8.106 8.168Zm0 0-21.698-.082 21.698.082Zm13.561.052C53.86 39.074 42.89 49.962 29.407 49.91 15.926 49.86 5.038 38.89 5.09 25.407 5.14 11.926 16.11 1.038 29.593 1.09c13.481.05 24.369 11.021 24.317 24.503Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m32.181 33.647 8.168-8.106m0 0-8.106-8.168m8.106 8.168-21.698-.082m35.26.134c-.052 13.481-11.022 24.369-24.504 24.317C15.926 49.86 5.038 38.89 5.09 25.407 5.14 11.926 16.11 1.038 29.593 1.09c13.481.05 24.369 11.021 24.317 24.503Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={29.593}
        x2={29.407}
        y1={1.089}
        y2={49.91}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FDB604" stopOpacity={0.22} />
        <Stop offset={1} stopColor="#C85407" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default NextArrowSvg
