import { themeColor } from "@/constants/colors";
import { imageLink } from "@/constants/image";
import { useAppDispatch } from "@/redux/hooks";
import {
  addNewTshirt,
  removeTshirt,
  setTshirtId,
} from "@/redux/slices/tshirtDataSlice";
import { RootState } from "@/redux/store";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
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
    // console.log("tshirt selected", item);
    dispatch(setTshirtId(item.id));
  };

  const handleAddNewTshirt = () => {
    const generateRandomId = () => {
      return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      );
    };

    const newId = generateRandomId();

    const newTshirt = {
      id: newId,
      frontImage: imageLink.tshirtFront, // Change as needed
      backImage: imageLink.tshirtBack, // Change as needed
      tshirtFrontOption: {
        template: "Plain",
        chestStripingName: "None",
        frontChest: {
          frontChestImage: null,
          chestImageSetting: {
            horizontal: 0,
            vertical: 0,
            scale: 1.0,
          },
          wordmark: {
            text: "",
            textStyle: "Single",
            textDirection: "xaxis",   
            fontFamily: "",
            chestWordmarkSetting: {
              vertical: 0,
              scale: 1,
              arching: 1.0,
            },
          },
        },
        sleeveStriping: "None",
      },
    };
    dispatch(addNewTshirt(newTshirt));
  };

  // console.log("tshirtId", tshirtId);
  const handleRemoveTshirt = (idToRemove: string) => {
    dispatch(removeTshirt({ id: idToRemove }));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <TouchableOpacity
        style={{
          borderWidth: 1,
          backgroundColor: themeColor.gray,
          padding: 10,
        }}
        onPress={() => handleRemoveTshirt(tshirtId)}
      >
        <Text style={{ color: themeColor.white }}>Remove</Text>
      </TouchableOpacity> */}
      <BottomSheetScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}>
          <TouchableOpacity
            onPress={() => handleAddNewTshirt()}
            style={[styles.shirtHeader, { justifyContent: "center", alignItems: "center", height: 90, width: 105, padding: 2}]}
          >
            <Ionicons name="add" color={themeColor.white} size={45} />
            {/* <Image source={imageLink.tshirtFront} style={styles.imageStyle} /> */}
          </TouchableOpacity>
          {tshirtData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleTshirtSelect(item)}
              style={[
                styles.shirtHeader,
                item.id === tshirtId && styles.activeCard,
              ]}
            >
              <Image source={item.frontImage} style={styles.imageStyle} />
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheetScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 80,
    width: 100,
    resizeMode: "contain",
  },
  shirtHeader: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: themeColor.gray,
    padding: 2,
  },
  activeCard: {
    borderColor: themeColor.primary,
  },
});

export default AllTshirt;
