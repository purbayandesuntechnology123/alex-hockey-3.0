import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const FBSvg = (props: SvgProps) => (
  <Svg
   
    width={12}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#3D6AD6"
      d="M7.704 22V11.966h3.367l.505-3.912H7.704V5.557c0-1.133.313-1.904 1.938-1.904l2.07-.001V.153C11.354.107 10.125 0 8.695 0c-2.986 0-5.03 1.823-5.03 5.17v2.884H.288v3.912h3.377V22h4.039Z"
    />
  </Svg>
)
export default FBSvg
