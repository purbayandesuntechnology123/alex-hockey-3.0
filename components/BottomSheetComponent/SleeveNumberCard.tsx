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
import TshirtButtonColor from "./TshirtButtonColor";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import BottomSheetHeader from "./BottomSheetHeader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import {
  setSleeveNumber,
  setSleeveNumberStyleName,
  setSleevesFontFamilyName,
} from "@/redux/slices/tshirtDataSlice";
import {
  getSingleTshirt,
  getSleevesFontFamilyName,
} from "@/constants/commonFunction";
import { fontFamily } from "@/constants/fontFamily";

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
      { id: 1, fontFamilyName: "NY Manhattan" },
      { id: 2, fontFamilyName: "NY Long Island" },
      { id: 3, fontFamilyName: "Ottawa 2" },
      { id: 4, fontFamilyName: "None" },
    ],
    [
      { id: 5, fontFamilyName: "NY Long Island2" },
      { id: 6, fontFamilyName: "Ottawa" },
      { id: 7, fontFamilyName: "Philadelphia" },
      { id: 8, fontFamilyName: "None2" },
    ],
  ],
};
console.log("font family====>");

interface SleeveNumberCardProps {
  setIsSleeveNumberOpened: (value: boolean) => void;
}

const SleeveNumberCard: React.FC<SleeveNumberCardProps> = ({
  setIsSleeveNumberOpened,
}) => {
  const dispatch = useAppDispatch();

  const { tshirtId, tshirtById, tshirtData } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );

  const selectedData = getSingleTshirt(tshirtData, tshirtId);

  // const [fontTypeName, setFontTypeName] = useState("Single");
  // const [sleeveText, setSleeveText] = useState<string>("");
  const [selectedFontStyle, setSelectedFontStyle] = useState<string>("");

  const fontTypeName = selectedData?.tshirtFrontOption?.sleeveNumber?.textStyle;
  const handleFontTypeClick = (item: string) => {
    // setFontTypeName(item);
    const payload = {
      tshirtId: tshirtId,
      data: item,
    };
    dispatch(setSleeveNumberStyleName(payload));
  };

  // console.log("fontTypeName", fontTypeName);

  const sleeveText = selectedData?.tshirtFrontOption?.sleeveNumber?.number;

  // console.log("fontTypeName",fontTypeName);

  // console.log("selectedData====>",selectedData?.tshirtFrontOption?.sleeveNumber?.textStyle);

  const handleSleeveNumberBackClick = () => {
    setIsSleeveNumberOpened(false);
  };

  const handleNumber = (txt: string) => {
    // console.log("txt number=====>", typeof Number(txt))
    // setSleeveText(txt)
    const payload = {
      tshirtId: tshirtId,
      data: txt,
    };
    dispatch(setSleeveNumber(payload));
  };

  const handleFonFamilyPress = (txt: string) => {
    // console.log("txt====>", txt);
    // setSelectedFontStyle(txt);
    const payload = {
      tshirtId: tshirtId,
      data: txt,
    };
    dispatch(setSleevesFontFamilyName(payload));
    // setWordmarkFontFamilyName
  };

  return (
    <View style={styles.container}>
      <BottomSheetHeader
        title="Sleeve Numbers"
        leftIconName={iconLink.leftIcon}
        onPressFirst={handleSleeveNumberBackClick}
        containerStyle={{ marginBottom: 10 }}
      />
      <View
        style={{
          backgroundColor: "#3E3E3E",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 6,
          borderRadius: 6,
        }}
      >
        {fontType.map((item) => (
          <TouchableOpacity
            style={[
              {
                padding: 4,
                backgroundColor:
                  item.name === fontTypeName ? "#FD8204" : "#3E3E3E",
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
      <View
        style={{
          marginVertical: 5,
          flexDirection: "row",
          gap: 5,
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={styles.smallInput}
          placeholder=""
          maxLength={2}
          value={sleeveText}
          keyboardType="numeric"
          onChangeText={(txt) => handleNumber(txt)}
        />

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
                  key={index}
                  onPress={() => handleFonFamilyPress(item.fontFamilyName)}
                  disabled={sleeveText?.length <= 0}
                >
                  <View
                    style={{
                      height: 74,
                      width: 102,
                      backgroundColor: "#3E3E3E",
                      borderRadius: 6,
                      paddingVertical: 5,
                      borderWidth: 1,
                      borderColor:
                        item.fontFamilyName ===
                        getSleevesFontFamilyName(tshirtData, tshirtId)
                          ? "#FD8204"
                          : undefined,
                    }}
                  >
                    <View style={{ flex: 1, justifyContent: "center" }}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 29,
                          color: "#fff",
                          fontFamily: fontFamily.ottawa[700],
                        }}
                      >
                        {sleeveText}
                      </Text>
                    </View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: "#fff",
                      }}
                    >
                      {item?.fontFamilyName}
                    </Text>
                  </View>
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
          backgroundColor: "#3E3E3E",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: 15,
  },
  headerTxt: { color: "#fff", fontSize: 12 },
  smallInput: {
    width: 40,
    // flex: 1,
    height: 30,
    // borderWidth: 1,
    // borderColor: "#ddd",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 14,
    color: "#fff",
    backgroundColor: "#3E3E3E",
  },
});

export default SleeveNumberCard;
