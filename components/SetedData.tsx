import React from "react";
import { RootState } from "@/redux/store";
import { Image, StyleSheet, Text, View } from "react-native";
import { themeColor } from "@/constants/colors";
import { useSelector } from "react-redux";
import { RNText } from "./Text/RNText";

const SetedData = () => {
  const { tshirtData, tshirtId } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );

  const selectedItem = tshirtData.find((item) => item.id === tshirtId);

  console.log("-=-=-=-=-=-=-=-=---=-=->", tshirtData);
  return (
    <View style={styles.container}>
      {/* {tshirtData.map((item, index) => {
        return (
          <View style={{ borderWidth: 1, borderRadius: 8, padding: 10 }}>
            <RNText style={{ color: themeColor.primary }}>
              {item.tshirtFrontOption?.template}
            </RNText>
          </View>
          );
          })} */}

      <View style={{ borderWidth: 1, borderRadius: 8, padding: 10 }}>
        {selectedItem?.tshirtFrontOption?.template ? (
          <RNText style={{ color: themeColor.primary }}>
            Temolate:=== {selectedItem?.tshirtFrontOption?.template?.templateName}
          </RNText>
        ) : null}

        {/* chest striping */}
        {selectedItem?.tshirtFrontOption?.chestStripingName ? (
          <RNText style={{ color: themeColor.primary }}>
            Chest Striping:===
            {selectedItem?.tshirtFrontOption?.chestStripingName}
          </RNText>
        ) : null}
        {selectedItem?.tshirtFrontOption?.chestStripingName ? (
          <RNText style={{ color: themeColor.primary }}>
            sleeve Striping:===
            {selectedItem?.tshirtFrontOption?.sleeveStriping}
          </RNText>
        ) : null}
        {/* {
          selectedItem?.tshirtFrontOption?.frontChestImage ?
          <Image source={{uri: selectedItem?.tshirtFrontOption?.frontChestImage}} style={styles.imageStyle} />
          : null
        } */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
  },
  imageStyle: {
    height: 80,
    width: 80,
    resizeMode: "contain"
  }
})

export default SetedData;
