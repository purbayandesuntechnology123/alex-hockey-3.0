import React from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";

interface TshirtButtonColorProps {
  containerStyle?: ViewStyle;
}
const TshirtButtonColor: React.FC<TshirtButtonColorProps> = ({
  containerStyle,
}) => {
  return (
    <View
      style={[
        {
          // flex: 1,
          backgroundColor: "#3E3E3E",
          padding: 4,
          flexDirection: "row",
          height: 40,
          gap: 5,
          marginHorizontal: 10,
          paddingHorizontal: 10,
          borderBottomEndRadius: 8,
          borderBottomStartRadius: 8,
          alignItems: "center",
          marginBottom: 10,
        },
        { ...containerStyle },
      ]}
    >
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "#202132", height: 20 }}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "#FD8204", height: 20 }}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "#F99304", height: 20 }}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "#FCFCFC", height: 20 }}
      />
    </View>
  );
};

export default TshirtButtonColor;
