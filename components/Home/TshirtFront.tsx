import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ChestText from "../ChestComponent/ChestText";
import { RootState } from "@/redux/store";

const TshirtFront = () => {
  const { tshirtData, tshirtId } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );

  const selectedItem = tshirtData.find((item) => item.id === tshirtId);

  // console.log("selectedItem forn common shirt component=====>", selectedItem);
  return (
    <View style={{ height: 300, width: "100%" }}>
      <Image source={selectedItem?.frontImage} style={styles.tshirt} />
      {selectedItem?.tshirtFrontOption?.frontChest.frontChestImage ? (
        <View
          style={{
            position: "absolute",
            height: 300,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: selectedItem?.tshirtFrontOption?.frontChest?.frontChestImage,
            }}
            style={[
              styles.imageStyle,
              {
                marginLeft:
                  selectedItem.tshirtFrontOption.frontChest.chestImageSetting
                    .horizontal * 4,
                marginBottom:
                  selectedItem.tshirtFrontOption.frontChest.chestImageSetting
                    .vertical * 8,
                transform: [
                  {
                    scale:
                      selectedItem.tshirtFrontOption.frontChest
                        .chestImageSetting.scale,
                  },
                ],
              },
            ]}
          />
        </View>
      ) : null}
      <ChestText selectedItem={selectedItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  tshirt: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  imageStyle: {
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
});

export default TshirtFront;
