import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BottomSheetHeader from "./BottomSheetComponent/BottomSheetHeader";
import { iconLink, imageLink } from "@/constants/image";
import { Ionicons } from "@expo/vector-icons";
import { themeColor } from "@/constants/colors";

interface ChooseYourColorProps {
  setColorOption: (value: boolean) => void;
  setSelectedColor: (value: Array<{ id: string; color: string }>) => void;
}

interface ColorItem {
  colorName: string;
  color: { id: string; color: string }[];
}

interface DataStructure {
  rows: ColorItem[][];
}

const data: DataStructure = {
  rows: [
    [
      {
        colorName: "Anaheim",
        color: [
          { id: "1", color: "#010101" },
          { id: "2", color: "#B9975B" },
          { id: "3", color: "#FD8204" },
          { id: "4", color: "#FFFFFF" },
        ],
      },
      {
        colorName: "Anaheim RR2",
        color: [
          { id: "1", color: "#FFFFFF" },
          { id: "2", color: "#FC4C02" },
          { id: "3", color: "#010101" },
          { id: "4", color: "#010101" },
        ],
      },
      {
        colorName: "Atlanta",
        color: [
          { id: "1", color: "#041E42" },
          { id: "2", color: "#862633" },
          { id: "3", color: "#FD8204" },
          { id: "4", color: "#FFFFFF" },
        ],
      },
    ],
    [
      {
        colorName: "Anaheim Alt",
        color: [
          { id: "1", color: "#FC4C02" },
          { id: "2", color: "#010101" },
          { id: "3", color: "#B9975B" },
          { id: "4", color: "#FFFFFF" },
        ],
      },
      {
        colorName: "Arizona",
        color: [
          { id: "1", color: "#862633" },
          { id: "2", color: "#010101" },
          { id: "3", color: "#DDCBA4" },
          { id: "4", color: "#FFFFFF" },
        ],
      },
      {
        colorName: "Atlanta Alt",
        color: [
          { id: "1", color: "#010101" },
          { id: "2", color: "#FFB81C" },
          { id: "3", color: "#FFFFFF" },
          { id: "4", color: "#FFFFFF" },
        ],
      },
    ],
    [
      {
        colorName: "Anaheim Alt 2",
        color: [
          { id: "1", color: "#512A44" },
          { id: "2", color: "#00685E" },
          { id: "3", color: "#A2AAAD" },
          { id: "4", color: "#FFFFFF" },
        ],
      },
      {
        colorName: "Arizona Alt",
        color: [
          { id: "1", color: "#010101" },
          { id: "2", color: "#6F263D" },
          { id: "3", color: "#154734" },
          { id: "4", color: "#DDCBA4" },
        ],
      },
      {
        colorName: "Boston",
        color: [
          { id: "1", color: "#041E42" },
          { id: "2", color: "#5C88DA" },
          { id: "3", color: "#862633" },
          { id: "4", color: "#FFFFFF" },
        ],
      },
    ],
    [
      {
        colorName: "Anaheim Retro",
        color: [
          { id: "1", color: "#00685E" },
          { id: "2", color: "#4B3048" },
          { id: "3", color: "#A2AAAD" },
          { id: "4", color: "#FFFFFF" },
        ],
      },
      {
        colorName: "Arizona RR",
        color: [
          { id: "1", color: "#010101" },
          { id: "2", color: "#B9975B" },
          { id: "3", color: "#FD8204" },
          { id: "4", color: "#FFFFFF" },
        ],
      },
      {
        colorName: "Boston RR",
        color: [
          { id: "1", color: "#FFB81C" },
          { id: "2", color: "#010101" },
          { id: "3", color: "#FFFFFF" },
          { id: "4", color: "#FFFFFF" },
        ],
      },
    ],
    [
      {
        colorName: "Anaheim RR",
        color: [
          { id: "1", color: "#FFFFFF" },
          { id: "2", color: "#00685E" },
          { id: "3", color: "#4B3048" },
          { id: "4", color: "#00685E" },
        ],
      },
      {
        colorName: "Arizona RR2",
        color: [
          { id: "1", color: "#A9431E" },
          { id: "2", color: "#010101" },
          { id: "3", color: "#6F263D" },
          { id: "4", color: "#DDCBA4" },
        ],
      },
      {
        colorName: "Boston RR2",
        color: [
          { id: "1", color: "#FFFFFF" },
          { id: "2", color: "#010101" },
          { id: "3", color: "#FFC72C" },
          { id: "4", color: "#010101" },
        ],
      },
    ],
  ],
};
const ChooseYourColor: React.FC<ChooseYourColorProps> = ({
  setColorOption,
  setSelectedColor,
}) => {
  const [search, setSearch] = useState("");

  const filterByColorName = (query: any) => {
    if (!query) return data; // Return original data if query is empty

    // Flatten and filter the data based on colorName
    const filteredItems = data.rows
      .flat()
      .filter((item) =>
        item.colorName.toLowerCase().includes(query.toLowerCase())
      );

    // Re-group into rows of 3 items each
    const newRows = [];
    for (let i = 0; i < filteredItems.length; i += 3) {
      newRows.push(filteredItems.slice(i, i + 3));
    }

    return { rows: newRows }; // Maintain the same object format
  };

  const filteredData = useMemo(() => {
    if (search) {
      return filterByColorName(search);
    } else {
      return data;
    }
  }, [search]);
  //   const filteredData = filterByColorName(search);

  //   console.log("filteredData====>", filteredData);
  const handleColorback = () => {
    setColorOption(false);
  };

  const handleColorPress = (item: ColorItem) => {
    // console.log("item===>", item);
    setSelectedColor(
      item.color.map((colorObj, index) => ({
        id: `${item.colorName}-${index}`,
        color: colorObj.color as string,
      }))
    );
    setColorOption(false);
  };
  return (
    <View>
      <BottomSheetHeader
        leftIconName={iconLink.leftIcon}
        title="Colors"
        onPressFirst={handleColorback}
        children={
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: themeColor.darkGray,
              paddingLeft: 10,
              borderRadius: 2,
            }}
          >
            <Ionicons name="search" size={15} color={themeColor.white} />
            <TextInput
              style={styles.smallInput}
              placeholder="Search"
              maxLength={8}
              value={search}
              placeholderTextColor={themeColor.white}
              onChangeText={setSearch}
            />
          </View>
        }
        containerStyle={{ marginBottom: 20 }}
      />
      <View style={{ gap: 10 }}>
        {filteredData.rows.map((row: ColorItem[], rowIndex: number) => (
          <View key={rowIndex} style={{ flexDirection: "row", gap: 10 }}>
            {row.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuImgHeader}
                onPress={() => handleColorPress(item)}
              >
                <View style={{ marginBottom: 10 }}>
                  {item.colorName && (
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: "#fff",
                        marginHorizontal: 4,
                      }}
                    >
                      {item.colorName}
                    </Text>
                  )}
                </View>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  {item.color &&
                    item.color.map((itemColor) => (
                      <View
                        key={itemColor.id}
                        style={{
                          backgroundColor: itemColor.color,
                          flex: 1,
                          padding: 10,
                        }}
                      />
                    ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuImgHeader: {
    // flex: 1,
    width: "32%",
    backgroundColor: themeColor.gray,
    padding: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  imageStyle: { height: 45, width: 50, resizeMode: "contain" },
  smallInput: {
    width: 70,
    // flex: 1,
    height: 30,
    padding: 5,
    borderRadius: 4,
    fontSize: 14,
    color: themeColor.white,
    backgroundColor: themeColor.darkGray,
  },
});

export default ChooseYourColor;
