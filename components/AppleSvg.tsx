import * as React from "react"
import { View } from "react-native"
import Svg, { SvgProps, Path } from "react-native-svg"
const AppleSvg = (props: SvgProps) => (
  <View
  style={{
    width: 40,  // Adjust based on your design
    height: 40, // Adjust based on your design
    backgroundColor: "white", // Light blue background (change as needed)
    borderRadius: 50, // Fully rounded (half of width/height)
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Svg

    width={22}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="#777"
      d="M22 18.98c-.6 1.332-.89 1.927-1.663 3.104-1.08 1.645-2.602 3.69-4.489 3.71-1.677.015-2.108-1.09-4.383-1.08-2.275.013-2.75 1.099-4.425 1.083-1.887-.017-3.33-1.865-4.41-3.51-3.02-4.596-3.336-9.991-1.474-12.86 1.323-2.037 3.412-3.23 5.376-3.23 2 0 3.257 1.097 4.91 1.097 1.603 0 2.58-1.098 4.892-1.098 1.747 0 3.598.953 4.918 2.595-4.322 2.368-3.619 8.538.748 10.188Z"
    />
    <Path
      fill="#777"
      d="M14.581 4.358c.84-1.078 1.477-2.6 1.246-4.156-1.372.095-2.978.968-3.914 2.106-.85 1.032-1.552 2.564-1.28 4.053 1.499.046 3.049-.849 3.948-2.003Z"
    />
  </Svg>
  </View>
)
export default AppleSvg
