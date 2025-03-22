import { iconLink } from "@/constants/image";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomSwitch from "../CustomSwitch";
import TshirtButtonColor from "./TshirtButtonColor";
import { themeColor } from "@/constants/colors";
import * as ImagePicker from "expo-image-picker";
import { useAppDispatch } from "@/redux/hooks";
import {
  setFrontChestImage,
  setFrontChestPattern,
  setFrontChestSettingScale,
} from "@/redux/slices/tshirtDataSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getSingleTshirt } from "@/constants/commonFunction";
import FrontCrestPatternCard from "./FrontCrestPatternCard";

interface FrontCrestImageCardProps {
  frontCrestPattern: boolean;
  setFrontCrestPattern: (value: boolean) => void;
}

const FrontCrestImageCard: React.FC<FrontCrestImageCardProps> = ({
  frontCrestPattern,
  setFrontCrestPattern,
}) => {
  const dispatch = useAppDispatch();

  const { tshirtId, tshirtData } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );

  const selectedData = getSingleTshirt(tshirtData, tshirtId);

  const [image, setImage] = useState<string | null>(null);

  // console.log("image",image)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      const payload = {
        tshirtId: tshirtId,
        data: result.assets[0].uri,
      };
      dispatch(setFrontChestImage(payload));
    }
  };
  const [scale, setScale] = useState(
    selectedData?.tshirtFrontOption?.frontChest.chestImageSetting.scale || 1.0
  );
  const [pattern, setPattern] = useState(1.0);

  const patterName =
    selectedData?.tshirtFrontOption?.frontChest?.imagePattern?.patternName;
  //   const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // console.log("selectedData.shirtFrontOption?.frontChest?.frontChestImage",selectedData?.tshirtFrontOption?.frontChest?.frontChestImage)

  // console.log("patter name fron redux===>", patterName)
  const handleFrontCrestPatterClick = () => {
    setFrontCrestPattern(true);
  };

  const handleScale = (val: number) => {
    const payload = {
      tshirtId: tshirtId,
      data: val,
    };
    dispatch(setFrontChestSettingScale(payload));
  };

  const handlePatternClick = (text: string) => {
    // console.log("patter name===>",text)
    const payload = {
      tshirtId: tshirtId,
      data: text,
    };
    dispatch(setFrontChestPattern(payload));
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{ color: "#fff" }}>front crest image card</Text> */}
      {/* {image && <Image source={{uri: image}} style={{height: 100, width: 100}} />} */}
      {!frontCrestPattern ? (
        <View>
          <View
            style={{
              flexDirection: "row",
              borderRadius: 8,
              marginTop: 8,
              gap: 2,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: themeColor.gray,
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
              }}
              onPress={pickImage}
            >
              {selectedData?.tshirtFrontOption?.frontChest?.frontChestImage ? (
                <View>
                  <View>
                    <Image
                      source={{
                        uri: selectedData?.tshirtFrontOption?.frontChest
                          ?.frontChestImage,
                      }}
                      style={{ height: 70, width: 70, resizeMode: "cover" }}
                    />
                  </View>
                  {/* commented because need to implement functionality */}
                  {/* <TouchableOpacity style={{position: "absolute", top: -20, right: -20}}>
                <Ionicons name="close-circle" size={34} color="#fff" />
              </TouchableOpacity> */}
                </View>
              ) : (
                <Image
                  source={iconLink.gallery}
                  style={{ height: 70, width: 70, resizeMode: "contain" }}
                />
              )}
            </TouchableOpacity>
            <View
              style={{
                flex: 2,
                backgroundColor: themeColor.gray,
                paddingHorizontal: 10,
                paddingVertical: 10,
                gap: 20,
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // marginBlock: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ color: "#fff" }}>Scale</Text>
                  <View style={styles.input}>
                    <Text
                      style={{
                        color: "#fff",
                        textAlign: "center",
                        fontSize: 12,
                      }}
                    >
                      {scale.toFixed(2)}
                    </Text>
                  </View>
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={0.5}
                  maximumValue={2.0}
                  value={scale}
                  onValueChange={(val) => {
                    handleScale(val);
                  }}
                  thumbTintColor="#fff"
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#999999"
                />
              </View>
              <View style={{ marginBottom: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ color: "#fff" }}>Pattern</Text>
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <TouchableOpacity
                      style={styles.input}
                      onPress={handleFrontCrestPatterClick}
                    >
                      <Image
                        source={iconLink.patternFile}
                        style={{ height: 15, width: 15 }}
                      />
                    </TouchableOpacity>
                    <View style={styles.input}>
                      <Text
                        style={{
                          color: "#fff",
                          textAlign: "center",
                          fontSize: 12,
                        }}
                      >
                        {scale.toFixed(2)}
                      </Text>
                    </View>
                  </View>
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={-10}
                  maximumValue={10}
                  value={pattern}
                  onValueChange={setPattern}
                  thumbTintColor="#fff"
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#999999"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
              paddingVertical: 5,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>Colors</Text>
            <CustomSwitch />
          </View>
          <TshirtButtonColor
            containerStyle={{ marginHorizontal: 0, borderRadius: 2 }}
          />
        </View>
      ) : (
        <FrontCrestPatternCard
          patterName={patterName}
          handlePatternClick={handlePatternClick}
          setFrontCrestPattern={setFrontCrestPattern}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  slider: {
    flex: 1,
    marginHorizontal: -10,
  },
  input: {
    backgroundColor: "#1D1F24",
    color: "white",
    // width: 40,
    paddingHorizontal: 6,
    textAlign: "center",
    borderRadius: 6,
    // height: 30,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FrontCrestImageCard;
