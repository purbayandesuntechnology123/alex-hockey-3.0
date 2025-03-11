import React from "react";
import { RNText } from "../Text/RNText";
import { StyleSheet, Text, View } from "react-native";
import TextStroke from "../Text/TextStroke";

// interface ChestTextProps {
//   selectedItem: any;
// }
// selectedItem.tshirtFrontOption.frontChest.wordmark.text
const ChestText = ({ selectedItem }) => {
  // selectedItem?.tshirtFrontOption?.frontChest?.wordmark?.chestWordmarkSetting;

  const wordmarkSettingData =
    selectedItem?.tshirtFrontOption?.frontChest?.wordmark?.chestWordmarkSetting;

  const textStyle =
    selectedItem?.tshirtFrontOption?.frontChest?.wordmark?.textStyle;

  const getStrokeNum = (value) => {
    if (value === "Single") {
      return 0;
    } else if (value === "Double") {
      return 1;
    } else if (value === "Triple") {
      return 1.5;
    }
  };
  return (
    <View
      style={{
        position: "absolute",
        height: 300,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <RNText>chest Text</RNText> */}
      {/* <View style={{ flexDirection: "row", gap: 0 }}>
        {selectedItem.tshirtFrontOption.frontChest.wordmark.text
          .split("")
          .map((item) => (
            <TextStroke stroke={1.5} color="gray">
              <RNText
                style={[{
                  fontSize: 25,
                }, textStyle]}
              >
                {item}
              </RNText>
            </TextStroke>
          ))}
      </View> */}
      {textStyle === "Shadow" ? (
        <RNText
          style={[
            styles.textWithShadow,
            {
              fontSize: 2 + 12 * wordmarkSettingData?.scale,
              marginBottom: Math.sign(wordmarkSettingData?.vertical)
                ? wordmarkSettingData?.vertical * 17
                : 0,
              marginTop:
                Math.sign(wordmarkSettingData?.vertical) > 0
                  ? 0
                  : Math.abs(wordmarkSettingData?.vertical) * 10,
            },
          ]}
        >
          {selectedItem.tshirtFrontOption.frontChest.wordmark.text}
        </RNText>
      ) : (
        <TextStroke
          stroke={getStrokeNum(
            selectedItem?.tshirtFrontOption?.frontChest?.wordmark?.textStyle
          )}
          color="gray"
        >
          <RNText
            style={{
              fontSize: 2 + 12 * wordmarkSettingData?.scale,
              marginBottom: Math.sign(wordmarkSettingData?.vertical)
                ? wordmarkSettingData?.vertical * 17
                : 0,
              marginTop:
                Math.sign(wordmarkSettingData?.vertical) > 0
                  ? 0
                  : Math.abs(wordmarkSettingData?.vertical) * 10,
            }}
          >
            {selectedItem?.tshirtFrontOption?.frontChest?.wordmark?.text}
          </RNText>
        </TextStroke>
      )}
      {/*  */}
    </View>
  );
};

const styles = StyleSheet.create({
  // tshirtFontStyle:
  //     {
  //       marginLeft:
  //         selectedItem.tshirtFrontOption.frontChest
  //           .chestImageSetting.horizontal * 4 ?? 0,
  //       marginBottom:
  //         selectedItem.tshirtFrontOption.frontChest
  //           .chestImageSetting.vertical * 8 ?? 0,
  //       transform:[{ scale: selectedItem.tshirtFrontOption.frontChest.chestImageSetting.scale ?? 1}]
  //     },
  textWithShadow: {
    fontSize: 25,
    textShadowColor: "rgba(140, 10, 10, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default ChestText;
