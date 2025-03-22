import React from "react";
import { RNText } from "../Text/RNText";
import { StyleSheet, Text, View } from "react-native";
import TextStroke from "../Text/TextStroke";
import SvgEffectsScreen from "../Text/svg";
import { fontFamily } from "@/constants/fontFamily";
import { getFontFamily } from "@/constants/commonFunction";

interface BackNumberProps {
  selectedItem: any;
}
// selectedItem.tshirtFrontOption.frontChest.wordmark.text
const BackNumber: React.FC<BackNumberProps> = ({ selectedItem }) => {
  // selectedItem?.tshirtFrontOption?.frontChest?.wordmark?.chestWordmarkSetting;

  const wordmarkSettingData =
    selectedItem?.tshirtFrontOption?.frontChest?.wordmark?.chestWordmarkSetting;

  const textStyle =
  selectedItem?.tshirtFrontOption?.sleeveNumber?.textStyle;

  const fontFamilyType = selectedItem?.tshirtFrontOption?.sleeveNumber?.fontFamily;

  console.log("fontFamilyType",fontFamilyType)

  // const imageUrl = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05";

  const getStrokeNum = (value: string) => {
    if (value === "Single") {
      return 0;
    } else if (value === "Double") {
      return 0.7;
    } else if (value === "Triple") {
      return 1.2;
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
        // <SvgEffectsScreen title={selectedItem.tshirtFrontOption.frontChest.wordmark.text} stroke={1} isOuterLine />
        <RNText
          style={[
            styles.textWithShadow,
            {
              fontSize: 52 + 12 * wordmarkSettingData?.scale,
            //   marginBottom: Math.sign(wordmarkSettingData?.vertical)
            //     ? wordmarkSettingData?.vertical * 17
            //     : 0,
            //   marginTop:
            //     Math.sign(wordmarkSettingData?.vertical) > 0
            //       ? 0
            //       : Math.abs(wordmarkSettingData?.vertical) * 10,
            fontFamily: getFontFamily(fontFamilyType),
            color: "#ffff"
            },
          ]}
        >
          {selectedItem?.tshirtFrontOption?.sleeveNumber?.number}
        </RNText>
      ) : (
        <TextStroke
          stroke={
            getStrokeNum(
                textStyle
            ) ?? 0
          }
          color="gray"
        >
          <RNText
            style={{
              fontSize: 52 + 12 * wordmarkSettingData?.scale,
            //   marginBottom: Math.sign(wordmarkSettingData?.vertical)
            //     ? wordmarkSettingData?.vertical * 17
            //     : 0,
            //   marginTop:
            //     Math.sign(wordmarkSettingData?.vertical) > 0
            //       ? 0
            //       : Math.abs(wordmarkSettingData?.vertical) * 10,
                  fontFamily: getFontFamily(fontFamilyType),
                  marginBottom: 50,
                  marginRight: 20,
                  color: "#ffff"
            }}
          >
            {selectedItem?.tshirtFrontOption?.sleeveNumber?.number}
          </RNText>
        </TextStroke>
      )}
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
    marginBottom: 50,
    marginRight: 20
  },
});

export default BackNumber;
