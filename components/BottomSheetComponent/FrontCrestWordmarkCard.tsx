import { iconLink } from "@/constants/image";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CustomSwitch from "../CustomSwitch";
import TshirtButtonColor from "./TshirtButtonColor";
import index from "@/app/registration";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useAppDispatch } from "@/redux/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  setFrontChestWordmarkName,
  setWordmarkFontFamilyName,
  setWordmarkFontStyleName,
} from "@/redux/slices/tshirtDataSlice";
import { themeColor } from "@/constants/colors";
import { getFontFamilyName } from "@/constants/commonFunction";

const fontType = [
  {
    id: 1,
    name: "Single",
  },
  {
    id: 2,
    name: "Double",
  },
  {
    id: 3,
    name: "Triple",
  },
  {
    id: 4,
    name: "Cowboy",
  },
  {
    id: 5,
    name: "Shadow",
  },
  {
    id: 6,
    name: "Devilish",
  },
];

const data = {
  rows: [
    [
      { id: 1, fontFamilyName: "Anaheim" },
      { id: 2, fontFamilyName: "Atlanta" },
      { id: 3, fontFamilyName: "Boston" },
      { id: 4, fontFamilyName: "None" },
    ],
    [
      { id: 5, fontFamilyName: "Anaheim 2" },
      { id: 6, fontFamilyName: "Arizona" },
      { id: 7, fontFamilyName: "Buffalo" },
      { id: 8, fontFamilyName: "None2" },
    ],
  ],
};

const FrontCrestWordmarkCard = () => {
  const dispatch = useAppDispatch();

  const { tshirtId, tshirtData } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );
  const selectedData = tshirtData.find((item) => item.id === tshirtId);
  const textStyle =
    selectedData?.tshirtFrontOption?.frontChest?.wordmark?.textStyle;
  const frontText = selectedData?.tshirtFrontOption?.frontChest?.wordmark?.text;

  const [fontTypeName, setFontTypeName] = useState("Single");
  const [textDirection, setTextDirection] = useState("xaxis");
  const [fronttext, setFrontText] = useState<string>("");

  // console.log("selectedData====>",selectedData?.tshirtFrontOption?.frontChest?.wordmark)

  const handleFontTypeClick = (item: string) => {
    // setFontTypeName(item);
    const payload = {
      tshirtId: tshirtId,
      data: item,
    };
    dispatch(setWordmarkFontStyleName(payload));
  };

  const handleName = (txt: string) => {
    // setFrontText(txt);
    const payload = {
      tshirtId: tshirtId,
      data: txt,
    };

    if (txt === "") {
      dispatch(setWordmarkFontFamilyName(payload));
    }
    dispatch(setFrontChestWordmarkName(payload));
  };

  const handleFonFamilyPress = (txt: string) => {
    // console.log("txt====>", txt);
    const payload = {
      tshirtId: tshirtId,
      data: txt,
    };
    dispatch(setWordmarkFontFamilyName(payload));
    // setWordmarkFontFamilyName
  };

  // console.log("fontTypeName", fontTypeName);

  const handleAxisData = (axisType: string) => {
    setTextDirection(axisType);
    const payload = {
      tshirtId: tshirtId,
      data: axisType,
    };
    // this will be used later
    // dispatch(setFrontChestWordmarkName(payload));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#3E3E3E",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 6,
        }}
      >
        {fontType.map((item, index) => (
          <TouchableOpacity
            style={[
              {
                padding: 4,
                backgroundColor:
                  item.name === textStyle ? "#FD8204" : "#3E3E3E",
                borderRadius: 6,
              },
            ]}
            key={item?.id}
            onPress={() => handleFontTypeClick(item?.name)}
          >
            <Text style={styles.headerTxt}>{item?.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginVertical: 5, flexDirection: "row", gap: 5 }}>
        <TextInput
          style={styles.smallInput}
          placeholder=""
          maxLength={8}
          value={frontText}
          onChangeText={(txt) => handleName(txt)}
        />
        <View
          style={{
            backgroundColor: "#3E3E3E",
            borderRadius: 6,
            flexDirection: "row",
            // flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 4,
            gap: 20,
          }}
        >
          <TouchableOpacity onPress={() => handleAxisData("xaxis")}>
            <View
              style={{
                padding: 2,
                borderRadius: 2,
                backgroundColor:
                  textDirection === "xaxis" ? "#FD8204" : "#3E3E3E",
              }}
            >
              <Image
                source={iconLink?.leftIcon}
                style={{ height: 15, width: 15, resizeMode: "contain" }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAxisData("yaxis")}>
            <View
              style={{
                padding: 4,
                borderRadius: 2,
                backgroundColor:
                  textDirection === "yaxis" ? "#FD8204" : "#3E3E3E",
              }}
            >
              <Image
                source={iconLink?.arrow_y}
                style={{ height: 15, width: 15, resizeMode: "contain" }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAxisData("zaxis")}>
            <View
              style={{
                padding: 4,
                borderRadius: 2,
                backgroundColor:
                  textDirection === "zaxis" ? "#FD8204" : "#3E3E3E",
              }}
            >
              <Image
                source={iconLink?.arrow_z}
                style={{ height: 15, width: 15, resizeMode: "contain" }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <View
            style={{ padding: 6, backgroundColor: "#3E3E3E", borderRadius: 6 }}
          >
            <Image
              source={iconLink?.patternFile}
              style={{ height: 15, width: 18, resizeMode: "contain" }}
            />
          </View>
          <View
            style={{ padding: 6, backgroundColor: "#3E3E3E", borderRadius: 6 }}
          >
            <Image
              source={iconLink?.file}
              style={{ height: 18, width: 18, resizeMode: "contain" }}
            />
          </View>
        </View>
      </View>
      <BottomSheetScrollView horizontal>
        <View style={{ gap: 5 }}>
          {data.rows.map((row, rowIndex) => (
            <View key={rowIndex} style={{ flexDirection: "row", gap: 6 }}>
              {row.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.fontHeader,
                    item.fontFamilyName ===
                      getFontFamilyName(tshirtData, tshirtId) &&
                      styles.activeTemplateType,
                  ]}
                  onPress={() => handleFonFamilyPress(item.fontFamilyName)}
                >
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        color: "#fff",
                      }}
                    >
                      {frontText}
                    </Text>
                  </View>
                  <Text
                    style={{ textAlign: "center", fontSize: 12, color: "#fff" }}
                  >
                    {item?.fontFamilyName}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </BottomSheetScrollView>
      <TshirtButtonColor
        containerStyle={{
          marginHorizontal: 0,
          borderRadius: 2,
          height: 35,
          marginVertical: 5,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  headerTxt: { color: "#fff", fontSize: 12 },
  smallInput: {
    // width: 121,
    flex: 1,
    height: 30,
    // borderWidth: 1,
    // borderColor: "#ddd",
    padding: 5,
    borderRadius: 8,
    fontSize: 14,
    color: "#fff",
    backgroundColor: "#3E3E3E",
  },
  fontHeader: {
    height: 74,
    width: 102,
    backgroundColor: "#7B7C8A",
    borderRadius: 6,
    paddingVertical: 5,
  },
  activeTemplateType: {
    borderWidth: 1,
    borderColor: themeColor.primary,
  },
});

export default FrontCrestWordmarkCard;
