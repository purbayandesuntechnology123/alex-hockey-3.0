import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
  Panel5,
} from "reanimated-color-picker";
import { themeColor } from "@/constants/colors";
import { fontFamily } from "@/constants/fontFamily";
import Button from "./Button";

interface ColorPickerModalProps {
  isModalShow: boolean;
  setIsModalShow: (value: boolean) => void;
  setColorFromPicker: (value: string) => void;
  onPressWork: () => void;
  selectedColor: string | undefined;
}

const tabTypeData = [
  {
    id: 1,
    tabName: "Grid",
  },
  {
    id: 2,
    tabName: "Spectrum",
  },
  {
    id: 3,
    tabName: "Silders",
  },
];
const ColorPickerModal: React.FC<ColorPickerModalProps> = ({
  isModalShow,
  setIsModalShow,
  setColorFromPicker,
  onPressWork,
  selectedColor,
}) => {
  // const [showModal, setShowModal] = useState(false);
  const [tabType, setTabType] = useState("Grid");
  const [pageBtnColor, setPageBtnColor] = useState<string | undefined>("");

  useEffect(() => {
    if (selectedColor) {
      setPageBtnColor(selectedColor);
      setColorFromPicker(selectedColor)
    } else {
      setPageBtnColor(themeColor.primary);
    }
  }, [selectedColor]);

  // Note: This can be a `worklet` function.
  const onSelectColor = ({ hex }: { hex: string }) => {
    // do something with the selected color.
    setPageBtnColor(hex);
    // console.log("hex", hex);
    setColorFromPicker(hex);
    return hex;
  };

  return (
    <View style={styles.container}>
      {/* <Button title="Color Picker" onPress={() => setIsModalShow(true)} /> */}

      <Modal visible={isModalShow} animationType="fade">
        <View
          style={{ paddingHorizontal: 20, backgroundColor: themeColor.white }}
        >
          <View
            style={{
              flexDirection: "row",
              borderRadius: 6,
              marginVertical: 10,
              backgroundColor: themeColor.darkGray,
            }}
          >
            {tabTypeData.map((item) => (
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor:
                    tabType === item.tabName
                      ? themeColor.lightGray
                      : themeColor.darkGray,
                  padding: 6,
                  borderRadius: 6,
                }}
                onPress={() => {
                  setTabType(item.tabName);
                }}
              >
                <Text
                  style={{
                    color: "#ffff",
                    textAlign: "center",
                    fontFamily: fontFamily[500],
                    lineHeight: 22,
                    fontSize: 15,
                  }}
                >
                  {item.tabName}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <ColorPicker
            style={{ width: "100%" }}
            value={pageBtnColor}
            onComplete={onSelectColor}
          >
            {tabType === "Grid" ? (
              <Panel5 />
            ) : tabType === "Spectrum" ? (
              <View style={{ gap: 15 }}>
                <HueSlider />
                <Panel1 />
              </View>
            ) : (
              <View style={{ gap: 15 }}>
                <HueSlider />
                <OpacitySlider />
              </View>
            )}
            {/* <Preview /> */}
            {/* <Swatches /> */}
            {/* <ExampleColor /> */}
            {/* <Panel1Example /> */}
          </ColorPicker>

          <Button
            text="Ok"
            onPress={onPressWork}
            containerStyle={{
              marginVertical: 10,
              backgroundColor: pageBtnColor,
              borderWidth: 1,
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});

export default ColorPickerModal;
