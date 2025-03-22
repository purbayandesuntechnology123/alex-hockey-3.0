import { iconLink, imageLink } from "@/constants/image";
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
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Slider from "@react-native-community/slider";
import { themeColor } from "@/constants/colors";

interface FrontCrestPatternCardProps {
  patterName: string | undefined;
  handlePatternClick: (value: string) => void;
  setFrontCrestPattern: (value: boolean) => void;
}
const data = {
  rows: [
    [
      { image: imageLink.patternNone, tshirtType: "None" },
      { image: imageLink.hexagonsDark, tshirtType: "Hexagons Dark" },
      { image: imageLink.pride1, tshirtType: "Pride 1" },
      { image: imageLink.tshirtFront, tshirtType: "Sleeve Numbers" },
    ],
    [
      { image: imageLink.felt, tshirtType: "Felt" },
      { image: imageLink.hexagonsLight, tshirtType: "Hexagons Light" },
      { image: imageLink.pride2, tshirtType: "Pride 2" },
      { image: imageLink.tshirtFront, tshirtType: "Back Numbers" },
    ],
  ],
};
const FrontCrestPatternCard: React.FC<FrontCrestPatternCardProps> = ({
  patterName,
  handlePatternClick,
  setFrontCrestPattern,
}) => {
  const [leftVal, setLeftVal] = useState(1.0);
  const [rightVal, setRightVal] = useState(2.0);

  const handleFrontCrestLeftClick = () => {
    setFrontCrestPattern(false);
  };
  return (
    <View style={styles.container}>
      <BottomSheetHeader
        title="Pattern"
        leftIconName={iconLink.leftIcon}
        onPressFirst={handleFrontCrestLeftClick}
        containerStyle={{ marginHorizontal: 0, marginBottom: 10 }}
      />
      <View style={{ flexDirection: "row", marginBlockEnd: 5, gap: 5 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View>
            <Image
              source={iconLink.vector}
              style={{ height: 15, width: 15, resizeMode: "contain" }}
            />
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10}
            value={leftVal}
            onValueChange={setLeftVal}
            thumbTintColor="#fff"
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#999999"
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View>
            <Image
              source={iconLink.vector}
              style={{ height: 15, width: 15, resizeMode: "contain" }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Slider
              style={styles.slider}
              minimumValue={5}
              maximumValue={10}
              value={rightVal}
              onValueChange={setRightVal}
              thumbTintColor="#fff"
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#999999"
            />
          </View>
        </View>
      </View>
      <BottomSheetScrollView horizontal>
        <View style={{ gap: 5 }}>
          {data.rows.map((row, rowIndex) => (
            <View key={rowIndex} style={{ flexDirection: "row", gap: 10 }}>
              {row.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.menuImgHeader,
                    item.tshirtType === patterName && styles.selectedStyle,
                  ]}
                  onPress={() => handlePatternClick(item.tshirtType)}
                >
                  <View style={{ alignItems: "center" }}>
                    <Image source={item.image} style={styles.imageStyle} />
                  </View>
                  {item.tshirtType && (
                    <View>
                      <Text
                        style={{
                          textAlign: "left",
                          fontSize: 10,
                          color: "#fff",
                          marginHorizontal: 4,
                        }}
                      >
                        {item.tshirtType}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </BottomSheetScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1.1,
    // zIndex: 2,
    marginHorizontal: 15,
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
    width: 100,
    borderRadius: 8,
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  imageStyle: { height: 90, width: 80, resizeMode: "contain" },
  filterHead: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 4,
    borderRadius: 4,
    paddingHorizontal: 25,
  },
  slider: {
    flex: 1,
    // marginHorizontal: -10,
  },
  selectedStyle: {
    borderWidth: 1,
    borderColor: themeColor.primary,
  },
});

export default FrontCrestPatternCard;
