import React, { useState } from "react";
import { Image, TouchableOpacity, View, ViewStyle } from "react-native";
import ColorPickerModal from "../ColorPickerModal";
import { iconLink } from "@/constants/image";
import { Color } from "@/interface/tshirtinterface";

// interface ColorPickerButtonProps {
//   containerStyle?: ViewStyle;
//   colorOptions: Color[];
//   onColorChange: (newColor: string, index: number) => void;
// }

const ColorPickerButton = ({
  containerStyle,
  colorOptions,
  onColorChange,
}) => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
  const [colorFromPicker, setColorFromPicker] = useState<string>("");

//   console.log("colorOptions====>",colorOptions)

  const handleColorChange = (index) => {
    setIsModalShow(true);
    setCurrentColorIndex(index);
  };

  const handleConfirmColor = () => {
    onColorChange(colorFromPicker, currentColorIndex);
    setIsModalShow(false);
  };

  return (
    <View>
      <View
        style={[
          {
            backgroundColor: "#3E3E3E",
            padding: 4,
            flexDirection: "row",
            height: 40,
            gap: 5,
            // marginHorizontal: 10,
            paddingHorizontal: 10,
            borderBottomEndRadius: 8,
            borderBottomStartRadius: 8,
            alignItems: "center",
            // marginBottom: 10,
          },
          containerStyle,
        ]}
      >
        {colorOptions.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={{
              flex: 1,
              backgroundColor: item.color,
              height: 20,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: .5
            }}
            onPress={() => item.canChange && handleColorChange(index)}
          >
            {!item.canChange && (
              <Image
                source={iconLink.cross}
                style={{
                  resizeMode: "contain",
                  width: 25,
                  height: 25,
                }}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <ColorPickerModal
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
        setColorFromPicker={setColorFromPicker}
        onPressWork={handleConfirmColor}
        selectedColor={colorOptions[currentColorIndex]?.color ?? ""}
      />
    </View>
  );
};

export default ColorPickerButton;
