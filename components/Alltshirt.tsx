import { themeColor } from "@/constants/colors";
import { useAppDispatch } from "@/redux/hooks";
import { setTshirtId } from "@/redux/slices/tshirtDataSlice";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const AllTshirt = () => {
  const dispatch = useAppDispatch();
  const { tshirtData, tshirtId } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );

  const [tshirtType, setTshirtType] = useState<string>("");

  // console.log("tshirtId=====>",tshirtId);

  const handleTshirtSelect = (item: any) => {
    console.log("tshirt selected", item);
    dispatch(setTshirtId(item.id));
  };
  return (
    <View>
      {tshirtData.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleTshirtSelect(item)}>
          <Image source={item.frontImage} style={styles.imageStyle} />
        </TouchableOpacity>
      ))}
      <Text style={{ color: themeColor.white }}>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
});

export default AllTshirt;
