import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { Image, TouchableOpacity, View, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import ColorPickerModal from "../ColorPickerModal";
import { setWordmarkColor } from "@/redux/slices/tshirtDataSlice";
import { useAppDispatch } from "@/redux/hooks";
import { iconLink } from "@/constants/image";

interface TshirtButtonColorProps {
  containerStyle?: ViewStyle;
}
const TshirtButtonColor: React.FC<TshirtButtonColorProps> = ({
  containerStyle,
}) => {
  const dispatch = useAppDispatch();
  const { tshirtId, tshirtData } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );

  const selectedData = tshirtData.find((tshirt) => tshirt.id === tshirtId);
  const selectedColor =
    selectedData?.tshirtFrontOption?.frontChest.wordmark.wordmarkColor;

  console.log("selectedData", selectedColor);

  // const [newSelectedColor, setNewSelectedColor] = useState<
  //   wordmarkColor[] | undefined
  // >([
  //   { id: 1, color: "#9BB8D3", canChange: true},
  //   { id: 2, color: "#69B3E7", canChange: true},
  //   { id: 3, color: "#0C2340", canChange: true},
  //   { id: 4, color: "#FFFF", canChange: false},
  // ]);

  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
  const [colorFromPicker, setColorFromPicker] = useState<string>("");

  const handleColorChange = (val: number) => {
    console.log("value=====>", val);
    setIsModalShow(true);
    setCurrentColorIndex(val);
  };

  const onPressWork = () => {
    const payload = {
      tshirtId: tshirtId,
      single: false,
      data: selectedColor?.map((color, i) =>
        i === currentColorIndex ? { ...color, color: colorFromPicker } : color
      ),
    };
    dispatch(setWordmarkColor(payload));
    setIsModalShow(false);
    // commented the local change
    // setNewSelectedColor(selectedColor?.map((color, i) =>
    //   i === currentColorIndex ? { ...color, color: colorFromPicker } : color
    // ))
  };

  return (
    <View>
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
        {selectedColor?.map((item, index) => (
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: item.color,
              height: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              item.canChange ? handleColorChange(index) : null;
            }}
            children={
              !item.canChange ? (
                <Image
                  source={iconLink.cross}
                  style={{
                    resizeMode: "contain",
                    width: 25,
                    height: 25,
                  }}
                />
              ) : null
            }
          />
        ))}
      </View>
      <ColorPickerModal
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
        setColorFromPicker={setColorFromPicker}
        onPressWork={onPressWork}
        selectedColor={
          currentColorIndex !== undefined
            ? selectedColor?.[currentColorIndex]?.color ?? ""
            : undefined
        }
      />
    </View>
  );
};

export default TshirtButtonColor;
