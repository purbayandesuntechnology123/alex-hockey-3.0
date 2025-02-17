import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

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
}) => {
  // const [showModal, setShowModal] = useState(false);
  const [tabType, setTabType] = useState();

  // Note: This can be a `worklet` function.
  const onSelectColor = ({ hex }: { hex: string }) => {
    // do something with the selected color.
    console.log(hex);
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
              <View
                style={{
                  flex: 1,
                  // backgroundColor: themeColor.darkGray,
                  padding: 6,
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
              </View>
            ))}
          </View>
          <ColorPicker
            style={{ width: "100%" }}
            value="red"
            onComplete={onSelectColor}
          >
            {/* <Preview /> */}
            {/* <Panel1 /> */}
            {/* <HueSlider /> */}
            {/* <Swatches /> */}
            <Panel5 />
            {/* <OpacitySlider /> */}
            {/* <ExampleColor /> */}
            {/* <Panel1Example /> */}
          </ColorPicker>

          <Button
            text="Ok"
            onPress={onPressWork}
            containerStyle={{ marginVertical: 10 }}
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
