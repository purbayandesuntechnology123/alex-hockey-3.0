import { iconLink } from "@/constants/image";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomSwitch from "../CustomSwitch";
import TshirtButtonColor from "./TshirtButtonColor";
import { themeColor } from "@/constants/colors";
import * as ImagePicker from 'expo-image-picker';
import { useAppDispatch } from "@/redux/hooks";
import { setFrontChestImage } from "@/redux/slices/tshirtDataSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface FrontCrestImageCardProps {
  setFrontCrestPattern: (value: boolean) => void;
}

const FrontCrestImageCard: React.FC<FrontCrestImageCardProps> = ({
  setFrontCrestPattern,
}) => {

  const dispatch = useAppDispatch();

  const { tshirtId } = useSelector((state: RootState) => state.tshirtStoreValue)

  const [image, setImage] = useState<string | null>(null);

  console.log("image",image)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      const payload = {
        tshirtId: tshirtId,
        data: result.assets[0].uri
      }
      dispatch(setFrontChestImage(payload));
    }
  };
  const [scale, setScale] = useState(1.0);
  const [pattern, setPattern] = useState(1.0);
  //   const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleFrontCrestPatterClick = () => {
    setFrontCrestPattern(true);
  };
  return (  
    <View style={styles.container}>
      {/* <Text style={{ color: "#fff" }}>front crest image card</Text> */}
      {/* {image && <Image source={{uri: image}} style={{height: 100, width: 100}} />} */}
      <View
        style={{ flexDirection: "row", borderRadius: 8, marginTop: 8, gap: 2 }}
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
          <Image
            source={iconLink.gallery}
            style={{ height: 70, width: 70, resizeMode: "contain" }}
          />
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
                  style={{ color: "#fff", textAlign: "center", fontSize: 12 }}
                >
                  {scale.toFixed(2)}
                </Text>
              </View>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={-10}
              maximumValue={10}
              value={scale}
              onValueChange={setScale}
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
                    style={{ color: "#fff", textAlign: "center", fontSize: 12 }}
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
