import { iconLink, imageLink } from "@/constants/image";
import { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomSheetHeader from "./BottomSheetHeader";
import TshirtButtonColor from "./TshirtButtonColor";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

interface SleeveStripingCardProps {
  isTemplateFilterOpen?: boolean;
  setIsSleeveStripingOpened: (value: boolean) => void;
}
const data = {
  rows: [
    [
      { image: imageLink.none, tshirtType: "None" },
      { image: imageLink.single2, tshirtType: "Single 2" },
      { image: imageLink.triple1, tshirtType: "Triple 1" },
      { image: imageLink.tshirtFront, tshirtType: "Sleeve Numbers" },
    ],
    [
      { image: imageLink.single2, tshirtType: "Single1" },
      { image: imageLink.double1, tshirtType: "Double 1" },
      { image: imageLink.triple2, tshirtType: "Triple 2" },
      { image: imageLink.tshirtFront, tshirtType: "Back Numbers" },
    ],
  ],
};
const SleeveStripingCard: React.FC<SleeveStripingCardProps> = ({
  isTemplateFilterOpen,
  setIsSleeveStripingOpened,
}) => {
  const router = useRouter();
  const [filterType, setFilterType] = useState<boolean>(false);
  const handleTshirtTypePress = () => {
    // setIsTemplateFilterOpen(true);
  };

  const handleSleeveStripingBackClick = () => {
    setIsSleeveStripingOpened(false);
  };

  const handletemFilterClick = () => {
    // navigation.navigate("products", {profile: "121212121"} )
    // const data = { id: 123, name: "Product Name" };
    router.push({
      pathname: "/products",
      // params: data,
    });
  };

  return (
    <BottomSheetView style={styles.container}>
      <BottomSheetHeader
        title="Sleeve Striping"
        leftIconName={iconLink.leftIcon}
        rightIconName={iconLink.adjust}
        containerStyle={{ marginBottom: 5 }}
        onPressFirst={handleSleeveStripingBackClick}
        onPressSecond={handletemFilterClick}
        // rightIconStyle={isTemplateFilterOpen ? { tintColor: "#FD8204" } : {}}
      />
      <BottomSheetScrollView horizontal>
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
        </View>
      </BottomSheetScrollView>
      <TshirtButtonColor
        containerStyle={{ marginHorizontal: 0, marginTop: 5 }}
      />
    </BottomSheetView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "#1D1F24",
    gap: 8,
  },
  menuImgHeader: {
    flex: 1,
    backgroundColor: "#3E3E3E",
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

export default SleeveStripingCard;
