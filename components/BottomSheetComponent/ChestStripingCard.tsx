import { themeColor } from "@/constants/colors";
import { getchestStriping } from "@/constants/commonFunction";
import { imageLink } from "@/constants/image";
import { useAppDispatch } from "@/redux/hooks";
import { setChestStripingTypeFront } from "@/redux/slices/tshirtDataSlice";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";

interface ChestStripingCardProps {
  isTemplateFilterOpen: boolean;
  setIsTemplateFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const data = {
  rows: [
    [
      { image: imageLink.none, tshirtType: "None" },
      { image: imageLink.single2, tshirtType: "Single 2" },
      { image: imageLink.triple1, tshirtType: "Triple 1" },
      //   { image: imageLink.tshirtFront, tshirtType: "Sleeve Numbers" },
    ],
    [
      { image: imageLink.single2, tshirtType: "Single1" },
      { image: imageLink.double1, tshirtType: "Double 1" },
      { image: imageLink.triple2, tshirtType: "Triple 2" },
      //   { image: imageLink.tshirtFront, tshirtType: "Back Numbers" },
    ],
    // [
    //   { image: imageLink.tshirtFront, tshirtType: "Waist Striping" },
    //   { image: imageLink.tshirtFront, tshirtType: "Collar" },
    //   { image: imageLink.tshirtFront, tshirtType: "Other Patches" },
    //   //   { image: imageLink.tshirtFront, tshirtType: "Name Bar" },
    // ],
  ],
};
const ChestStripingCard: React.FC<ChestStripingCardProps> = ({
  isTemplateFilterOpen,
  setIsTemplateFilterOpen,
}) => {
  const dispatch = useAppDispatch();

  const { tshirtData, tshirtId } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );
  const [filterType, setFilterType] = useState<boolean>(false);
  const handleTshirtTypePress = (item: string) => {
    const payload = {
      tshirtId: tshirtId,
      data: item,
    };
    dispatch(setChestStripingTypeFront(payload));
    // setIsTemplateFilterOpen(true);
  };

  //   console.log("data", data);
  return (
    <View style={{ gap: 5 }}>
      {data.rows.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: "row", gap: 10 }}>
          {row.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuImgHeader,
                item.tshirtType === getchestStriping(tshirtData, tshirtId) &&
                  styles.activeTemplateType,
              ]}
              onPress={() => handleTshirtTypePress(item.tshirtType)}
            >
              <Image source={item.image} style={styles.imageStyle} />
              {item.tshirtType && (
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    color: "#fff",
                    marginHorizontal: 4,
                  }}
                >
                  {item.tshirtType}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
      {isTemplateFilterOpen ? (
        <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
          <View style={styles.filterHead}>
            <Text style={{ color: "#fff", fontSize: 12 }}>Standard</Text>
          </View>
          <View style={styles.filterHead}>
            <Text style={{ color: "#fff", fontSize: 12 }}>Gradient</Text>
          </View>
          <View style={styles.filterHead}>
            <Text style={{ color: "#fff", fontSize: 12 }}>Special</Text>
          </View>
          <View style={styles.filterHead}>
            <Text style={{ color: "#fff", fontSize: 12 }}>Standard</Text>
          </View>
        </View>
      ) : null}
      {/* <TshirtButtonColor /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.1,
    zIndex: 2,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "#1D1F24",
    gap: 8,
  },
  menuImgHeader: {
    flex: 1,
    backgroundColor: "#4A4B60",
    padding: 4,
    width: 106,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageStyle: { height: 90, width: 65, resizeMode: "contain" },
  filterHead: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 4,
    borderRadius: 4,
    paddingHorizontal: 25,
  },
  activeTemplateType: {
    borderWidth: 1,
    borderColor: themeColor.primary,
  },
});

export default ChestStripingCard;
