import BottomSheetHeader from "@/components/BottomSheetComponent/BottomSheetHeader";
import Button from "@/components/Button";
import ChooseYourColor from "@/components/ChooseYourColor";
import ColorPickerModal from "@/components/ColorPickerModal";
import DraggableButtonList, {
  ButtonItem,
} from "@/components/DragButton/DraggableButtonList";
import TextStroke from "@/components/Text/TextStroke";
// import { themeColor } from "@/constants/colors";
// import DraggableButtonList, { ButtonItem } from "@/components/DraggableButton";
// import DraggableButton from "@/components/DraggableButton";
import { iconLink, imageLink } from "@/constants/image";
import { useRouter } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native";
import { StatusBar } from "react-native";
import { Text, View } from "react-native";
import ArcText from "@/components/Text/ArcText";
import Slider from "@react-native-community/slider";
import MyCurvedText from "@/components/Text/MyCurvedText";
import CurvedSvgText from "@/components/Text/CurvedSvgText";
import CustomTextC from "@/components/Text/CustomTextC";
import { RNText } from "@/components/Text/RNText";
import { fontFamily } from "@/constants/fontFamily";
import { setButtonColor } from "./../redux/slices/tshirtSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { themeColor } from "@/constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const defaultColor = [
  { id: "1", color: "#9BB8D3", canChange: true },
  { id: "2", color: "#69B3E7", canChange: true },
  { id: "3", color: "#0C2340", canChange: true },
  { id: "4", color: "#FFFF", canChange: false },
];

const OwnDesign = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { value } = useAppSelector((state) => state.counter);

  const { buttonColor } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );

  const [name, setName] = useState<string>("");
  const [startFrom, setStartFrom] = useState<string>("blank");
  const [startColor, setStartColor] = useState<string>("");
  const [colorOption, setColorOption] = useState<boolean>(false);
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [colorFromPicker, setColorFromPicker] = useState<string>("");
  const [currentColorIndex, setCurrectColorIndex] = useState<number>();
  // const [selectedColor, setSelectedColor] =
  //   useState<Array<{ id: string; color: string }>>(buttonColor);
  const [selectedColor, setSelectedColor] =
    useState<Array<{ id?: string; color: string }>>(buttonColor);
  const [arcHeight, setArcHeight] = useState(70);

  const arcHeightRef = useRef(arcHeight);
  const handleValueChange = useCallback((value: any) => {
    arcHeightRef.current = value;
    setArcHeight(value); // Update state immediately, but efficiently
  }, []);

  //   console.log("selectedColor======>", selectedColor);

  const handleBackClick = () => {
    router.back();
  };

  const handleBrowse = () => {
    setStartColor("browse");
    setColorOption(true);
  };

  const handleRandomPress = () => {
    setStartColor("random");
    setSelectedColor(generateColorPalette(3));
    dispatch(setButtonColor(generateColorPalette(3)));
  };

  const handleCreate = () => {
    router.push("/HomePage");
  };

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };  

  const generateColorPalette = (numRandomColors: number) => {
    const staticColor = defaultColor[3]; // Static color
    const randomColors = Array.from(
      { length: numRandomColors },
      (_, index) => ({
        id: (index + 1).toString(),
        color: getRandomColor(),
      })
    );
    return [...randomColors, staticColor];
  };

  const handleColorChange = (index: number) => {
    setIsModalShow(true);
    setCurrectColorIndex(index);
    console.log(index);
    console.log("colorFromPicker", colorFromPicker);
  };

  const onPressWork = () => {
    setIsModalShow(false);
    setSelectedColor(
      selectedColor.map((color, i) =>
        i === currentColorIndex ? { ...color, color: colorFromPicker } : color
      )
    );
  };

  const handleDraggableColorChange = (index: any) => {
    console.log("item===>", index);
    setIsModalShow(true);
    setCurrectColorIndex(Number(index));
  };

  // const newColorSet = (data) => {
  //   dispatch(setButtonColor(data));
  // };

  // color stored in a localstorage
  const storeData = async (colorData: any) => {
    try {
      const jsonValue = JSON.stringify(colorData);
      await AsyncStorage.setItem("colors", jsonValue);
      console.log("Data stored successfully!");
    } catch (e) {
      console.error("Error storing data:", e);
    }
  };
  const handleNewDataChange = (retData: any[]) => {
    // console.log("retData===>", retData);
    setSelectedColor(retData);
    // storeData(retData);
    // dispatch(setTshirtcolor(retData))
    // newColorSet(retData);
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("colors");
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error("Error retrieving data:", e);
    }
  };
  // console.log("selectedColor====+++++++===>", selectedColor);
  // console.log("buttonColor====+++++++===>", buttonColor);

  // getData().then(data => console.log('Retrieved data:', data));

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="transparent" translucent />
      <ImageBackground source={imageLink.tshirtBG} style={styles.container}>
        <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
          <Image source={imageLink.tshirtFront} style={styles.tshirt} />
        </View>
        <View
          style={{
            backgroundColor: "#1D1F24",
            padding: 5,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingTop: 15,
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          {colorOption ? (
            <ChooseYourColor
              setColorOption={setColorOption}
              setSelectedColor={setSelectedColor}
            />
          ) : (
            <View>
              <BottomSheetHeader
                onPressFirst={handleBackClick}
                leftIconName={iconLink.leftIcon}
                title="New"
              />
              <View style={{ marginVertical: 20 }}>
                <RNText style={styles.Lable}>Name:</RNText>
              </View>
              <TextInput
                style={styles.smallInput}
                placeholder=""
                maxLength={8}
                value={name}
                onChangeText={setName}
              />
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={{ flex: 1 }}>
                  <View style={{ marginVertical: 20 }}>
                    <RNText style={styles.Lable}>Staff From:</RNText>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#8B8888",
                      borderRadius: 6,
                      padding: 5,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        paddingVertical: 10,
                        borderRadius: 3,
                        backgroundColor:
                          startFrom === "blank" ? "#FD8204" : "#8B8888",
                      }}
                      onPress={() => setStartFrom("blank")}
                    >
                      <RNText style={[styles.Lable, { textAlign: "center" }]}>
                        Blank
                      </RNText>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        paddingVertical: 10,
                        borderRadius: 3,
                        backgroundColor:
                          startFrom === "randomized" ? "#FD8204" : "#8B8888",
                      }}
                      onPress={() => setStartFrom("randomized")}
                    >
                      <RNText style={[styles.Lable, { textAlign: "center" }]}>
                        Randomized
                      </RNText>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ marginVertical: 20 }}>
                    <RNText style={styles.Lable}>Starting Colors:</RNText>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#8B8888",
                      borderRadius: 6,
                      padding: 5,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        paddingVertical: 10,
                        borderRadius: 3,
                        backgroundColor:
                          startColor === "browse" ? "#FD8204" : "#8B8888",
                      }}
                      onPress={handleBrowse}
                    >
                      <RNText style={[styles.Lable, { textAlign: "center" }]}>
                        Browse
                      </RNText>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        paddingVertical: 10,
                        borderRadius: 3,
                        backgroundColor:
                          startColor === "random" ? "#FD8204" : "#8B8888",
                      }}
                      onPress={handleRandomPress}
                    >
                      <RNText style={[styles.Lable, { textAlign: "center" }]}>
                        Random
                      </RNText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={[
                  {
                    flexDirection: "row",
                    gap: 5,
                    // marginHorizontal: 20,
                    // paddingHorizontal: 10,
                    borderBottomEndRadius: 8,
                    borderBottomStartRadius: 8,
                    alignItems: "center",
                    marginTop: 20,
                    marginBottom: 10,
                  },
                ]}
              >
                {selectedColor.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flex: 1,
                      backgroundColor: item.color,
                      height: 35,
                      borderRadius: 3,
                      marginHorizontal: 5,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: themeColor.lightGray,
                    }}
                    children={
                      index === 3 ? (
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
                    onPress={() => {
                      handleColorChange(index);
                    }}
                  />
                ))}
              </View>
              {/* <CurvedSvgText /> */}

              <View
                style={{
                  backgroundColor: themeColor.lightGray,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <SvgTextWithStroke text="Hello" /> */}
                {/* <StrokeText text="H" /> */}
                {/* <TextStroke stroke={3} color={"#000000"}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#FFFFFF",
                    //   textAlign: "center",
                    }}
                  >
                    Sample Text
                  </Text>
                </TextStroke> */}
                {/* <OutlinedText
                  text={"Hello World"}
                  color={"#000"}
                  fontSize={50}
                  fontWeight={"500"}
                  outlineColor={"#fff"}
                  shadowLine={1}
                /> */}
                {/* <ArcText
                  text="Outlined"
                  setArcHeight={setArcHeight}
                  arcHeight={arcHeight}
                /> */}
                {/* <ReactCurvedText /> */}
                {/* <MyCurvedText item={arcHeight} /> */}
                {/* <RNText style={{ fontFamily: fontFamily[700] }}>
                  Hello{arcHeight}
                </RNText> */}
                {/* <CustomTextC text="heeees" direction="horizontal" /> */}
              </View>
              {/* <DraggableButtonList
                // data={useAppSelector((state) => state.tshirtCustomizer.buttonColor)}
                data={selectedColor}
                onReorder={handleNewDataChange}
                onPress={handleDraggableColorChange}
                // data={selectedColor}
                // onReorder={setSelectedColor}
              /> */}
              <Button
                text={"Create"}
                containerStyle={{
                  alignSelf: "center",
                  borderRadius: 5,
                  paddingHorizontal: 40,
                  padding: 5,
                  marginVertical: 10,
                }}
                style={{ fontSize: 15 }}
                onPress={handleCreate}
              />
              {/* <Slider
                style={{ flex: 1 }}
                minimumValue={20}
                maximumValue={300}
                // step={1}
                value={arcHeight}
                onValueChange={setArcHeight}
                thumbTintColor="#fff"
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#999999"
              /> */}
              {/* <Slider
                style={{ flex: 1 }}
                minimumValue={20}
                maximumValue={300}
                value={arcHeight}
                value={arcHeightRef.current}
                onValueChange={handleValueChange}
                onSlidingComplete={(value) => {
                  setArcHeight(value); // Update state only when user stops sliding
                }}    
                thumbTintColor="#fff"
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#999999"
              /> */}
            </View>
          )}
        </View>
      </ImageBackground>
      <ColorPickerModal
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
        setColorFromPicker={setColorFromPicker}
        onPressWork={onPressWork}
        selectedColor={
          currentColorIndex !== undefined
            ? selectedColor[currentColorIndex].color
            : undefined
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FD8204",
    paddingTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
  },
  tshirt: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    // marginBottom: 10,
  },
  smallInput: {
    height: 40,
    padding: 5,
    borderRadius: 4,
    fontSize: 14,
    color: "#fff",
    backgroundColor: "#8B8888",
  },
  Lable: { color: "#fff", fontSize: 13, lineHeight: 13.8 },
});

export default OwnDesign;
