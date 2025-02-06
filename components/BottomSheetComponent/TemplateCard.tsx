import { imageLink } from "@/constants/image";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface TemplateCardProps {
  isTemplateFilterOpen: boolean;
  setIsTemplateFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const data = {
  rows: [
    [
      { image: imageLink.plainShirt, tshirtType: "Plain" },
      { image: imageLink.shortCuff1, tshirtType: "Short Cuff 1" },
      { image: imageLink.midCuff, tshirtType: "Mid Cuff" },
      { image: imageLink.tshirtFront, tshirtType: "Sleeve Numbers" },
    ],
    [
      { image: imageLink.thinCuff, tshirtType: "Sleeve Striping" },
      { image: imageLink.shortCuff2, tshirtType: "Shoulder Yoke" },
      { image: imageLink.twoToneSleeves, tshirtType: "Shoulder Patch" },
      { image: imageLink.tshirtFront, tshirtType: "Back Numbers" },
    ],
    // [
    //   { image: imageLink.tshirtFront, tshirtType: "Waist Striping" },
    //   { image: imageLink.tshirtFront, tshirtType: "Collar" },
    //   { image: imageLink.tshirtFront, tshirtType: "Other Patches" },
    //   //   { image: imageLink.tshirtFront, tshirtType: "Name Bar" },
    // ],
  ],
};
const TemplateCard: React.FC<TemplateCardProps> = ({
  isTemplateFilterOpen,
  setIsTemplateFilterOpen,
}) => {
  const [filterType, setFilterType] = useState<boolean>(false);
  const handleTshirtTypePress = () => {
    setIsTemplateFilterOpen(true);
  };

  //   console.log("data", data);
  return (
    <View style={{ gap: 5 }}>
      {data.rows.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: "row", gap: 10 }}>
          {row.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuImgHeader}
              //   onPress={() => handleTshirtTypePress(item)}
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
        <ScrollView style={{backgroundColor: "red", width: "50%"}} horizontal>
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
        </ScrollView>
      ) : null}
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
});

export default TemplateCard;
