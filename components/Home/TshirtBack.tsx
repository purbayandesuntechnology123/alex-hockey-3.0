import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import HockeyJerseyBack from "@/assets/images/svg/HockeyJerseyBack";
import BackNumber from "../ChestComponent/BackNumber";

const TshirtBack = () => {
  const { tshirtData, tshirtId } = useSelector(
    (state) => state.tshirtStoreValue
  );

  const selectedItem = tshirtData.find((item) => item.id === tshirtId);

  console.log("back number", selectedItem?.tshirtFrontOption?.sleeveNumber)

  // console.log("selectedItem forn common shirt component=====>", selectedItem);
  return (
    <View style={{ height: 300, width: "100%", justifyContent: "center",
      alignItems: "center", }}>
      <HockeyJerseyBack />
      
      <BackNumber selectedItem={selectedItem} />
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
    // resizeMode: "contain",
  },
});

export default TshirtBack;
