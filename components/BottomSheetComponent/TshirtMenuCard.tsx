import { imageLink } from "@/constants/image";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface TshirtMenuCardProps {
  setTshirtType?: any;
}
const data = {
  rows: [
    [
      { image: imageLink.template, tshirtType: "Template" },
      { image: imageLink.chestStripping, tshirtType: "Chest Stripping" },
      { image: imageLink.frontCrest, tshirtType: "Front Crest" },
      { image: imageLink.sleeveNumbers, tshirtType: "Sleeve Numbers" },
    ],
    [
      { image: imageLink.sleeveStriping, tshirtType: "Sleeve Striping" },
      { image: imageLink.shoulderYoke, tshirtType: "Shoulder Yoke" },
      { image: imageLink.shoulderPatch, tshirtType: "Shoulder Patch" },
      { image: imageLink.backNumbers, tshirtType: "Back Numbers" },
    ],
    [
      { image: imageLink.waistStriping, tshirtType: "Waist Striping" },
      { image: imageLink.collar, tshirtType: "Collar" },
      { image: imageLink.otherPatches, tshirtType: "Other Patches" },
      { image: imageLink.nameBar, tshirtType: "Name Bar" },
    ],
  ],
};
const TshirtMenuCard: React.FC<TshirtMenuCardProps> = ({ setTshirtType }) => {
  // const platform = Platform.OS;
  const handleTshirtTypePress = (item: object) => {
    setTshirtType(item);
  };  
  return (
    <View style={{ gap: 10 }}>
      {data.rows.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: "row", gap: 10 }}>
          {row.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuImgHeader}
              onPress={() => handleTshirtTypePress(item)}
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
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageStyle: {
    height: Platform.OS === "android" ? 65 : 80,
    width: 50,
    resizeMode: "contain",
  },
});

export default TshirtMenuCard;
