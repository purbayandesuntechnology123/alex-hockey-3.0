import BottomSheetHeader from "@/components/BottomSheetComponent/BottomSheetHeader";
import Button from "@/components/Button";
import ChooseYourColor from "@/components/ChooseYourColor";
import ColorPickerModal from "@/components/ColorPickerModal";
import { iconLink, imageLink } from "@/constants/image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native";
import { StatusBar } from "react-native";
import { Text, View } from "react-native";

const defaultColor = ["#9BB8D3", "#69B3E7", "#0C2340", "#FFFF"];

const OwnDesign = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [startFrom, setStartFrom] = useState<string>("blank");
  const [startColor, setStartColor] = useState<string>("");
  const [colorOption, setColorOption] = useState<boolean>(false);
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [colorFromPicker, setColorFromPicker] = useState<string>("");
  const [currentColorIndex, setCurrectColorIndex] = useState<number>();
  const [selectedColor, setSelectedColor] =
    useState<Array<string>>(defaultColor);

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
    const randomColors = Array.from({ length: numRandomColors }, () =>
      getRandomColor()
    );
    return [...randomColors, staticColor];
  };

  const handleColorChange = (index: number) => {
    setIsModalShow(true);
    setCurrectColorIndex(index);
    // setSelectedColor(
    //   selectedColor.map((color, i) =>
    //     i === index? colorFromPicker : color
    //   )
    // );
    // setSelectedColor(selectedColor)
    console.log(index);
    console.log("colorFromPicker", colorFromPicker);
  };

  const onPressWork = () => {
    setIsModalShow(false);
    setSelectedColor(
      selectedColor.map((color, i) =>
        i === currentColorIndex ? colorFromPicker : color
      )
    );
  };
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
                <Text style={styles.Lable}>Name:</Text>
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
                    <Text style={styles.Lable}>Staff From:</Text>
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
                      <Text style={[styles.Lable, { textAlign: "center" }]}>
                        Blank
                      </Text>
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
                      <Text style={[styles.Lable, { textAlign: "center" }]}>
                        Randomized
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ marginVertical: 20 }}>
                    <Text style={styles.Lable}>Starting Colors:</Text>
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
                      <Text style={[styles.Lable, { textAlign: "center" }]}>
                        Browse
                      </Text>
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
                      <Text style={[styles.Lable, { textAlign: "center" }]}>
                        Random
                      </Text>
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
                      backgroundColor: item,
                      height: 35,
                      borderRadius: 3,
                      marginHorizontal: 5,
                      alignItems: "center",
                      justifyContent: "center",
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
                {/* <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: "#9BB8D3",
                    height: 35,
                    borderRadius: 3,
                  }}
                />
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: "#0C2340",
                    height: 35,
                    borderRadius: 3,
                  }}
                />
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: "#69B3E7",
                    height: 35,
                    borderRadius: 3,
                  }}
                />
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    height: 35,
                    borderRadius: 3,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  children={
                    <Image
                      source={iconLink.cross}
                      style={{ resizeMode: "contain", width: 25, height: 25 }}
                    />
                  }
                /> */}
              </View>
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
            </View>
          )}
        </View>
      </ImageBackground>
      <ColorPickerModal
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
        setColorFromPicker={setColorFromPicker}
        onPressWork={onPressWork}
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
  Lable: { color: "#fff", fontSize: 13, lineHeight: 13 },
});

export default OwnDesign;
