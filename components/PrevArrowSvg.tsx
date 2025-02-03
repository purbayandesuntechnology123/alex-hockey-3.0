import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PrevSvg = (props: SvgProps) => (
  <Svg
   
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#4A4B60"
      d="M1.301 5.97H14.3a.65.65 0 0 1 .65.65.652.652 0 0 1-.65.652H1.3a.65.65 0 0 1-.65-.651.652.652 0 0 1 .65-.652Z"
    />
    <Path
      fill="#4A4B60"
      d="m1.57 6.62 5.39 5.401a.653.653 0 0 1-.46 1.113.65.65 0 0 1-.46-.19L.19 7.082a.651.651 0 0 1 0-.922L6.04.298A.65.65 0 0 1 7.151.76a.653.653 0 0 1-.19.461l-5.39 5.4Z"
    />
  </Svg>
)
export default PrevSvg
