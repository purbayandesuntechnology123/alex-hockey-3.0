import { themeColor } from "@/constants/colors";
import { imageLink } from "@/constants/image";
import { useAppDispatch } from "@/redux/hooks";
import {
  addNewTshirt,
  removeTshirt,
  setSingleTshirt,
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
  const { tshirtData, tshirtId, tshirtById } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );

  console.log("tahirtById", tshirtById);

  const [tshirtType, setTshirtType] = useState<string>("");

  // console.log("tshirtId=====>",tshirtId);

  const handleTshirtSelect = (item: any) => {
    // console.log("tshirt selected", item);
    dispatch(setTshirtId(item.id));
    dispatch(setSingleTshirt(item));
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
        template: {
          templateName: "Plain",
          templateColor: [
            { id: 1, color: "#ffff", canChange: true },
            { id: 2, color: "#ffff", canChange: true },
            { id: 3, color: "#ffff", canChange: true },
            { id: 4, color: "#ffff", canChange: false },
            // { id: 1, color: "#9BB8D3", canChange: true },
            // { id: 2, color: "#69B3E7", canChange: true },
            // { id: 3, color: "#0C2340", canChange: true },
            // { id: 4, color: "#FFFF", canChange: false },
          ],
        },
        chestStripingName: "None",
        frontChest: {
          frontChestImage: null,
          imagePattern: {
            patternName: "None",
            patternOpacity: 0.5,
          },
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
            wordmarkColor: [
              { id: 1, color: "#9BB8D3", canChange: true },
              { id: 2, color: "#69B3E7", canChange: true },
              { id: 3, color: "#0C2340", canChange: true },
              { id: 4, color: "#FFFF", canChange: false },
            ],
            chestWordmarkSetting: {
              vertical: 0,
              scale: 1,
              arching: 1.0,
            },
            wordmarkPattern: {
              patternName: "None",
              patternOpacity: .5,
            },
          },
        },
        sleeveNumber: {
          number: "",
          textStyle: "Single",
          fontFamily: "NY Manhattan",
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
            style={[
              styles.shirtHeader,
              {
                justifyContent: "center",
                alignItems: "center",
                height: 90,
                width: 105,
                padding: 2,
              },
            ]}
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
