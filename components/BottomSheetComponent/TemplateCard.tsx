import { themeColor } from "@/constants/colors";
import { getName } from "@/constants/commonFunction";
import { imageLink } from "@/constants/image";
import { useAppDispatch } from "@/redux/hooks";
import { setTemplateTypeFront, setTshirtcolor } from "@/redux/slices/tshirtDataSlice";
import { RootState } from "@/redux/store";
import { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";

interface TemplateCardProps {
  isTemplateFilterOpen: boolean;
  setIsTemplateFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const data = {
  rows: [
    [
      {
        image: imageLink.plainShirt,
        tshirtType: "Plain",
        category: "Standard",
      },
      {
        image: imageLink.shortCuff1,
        tshirtType: "Short Cuff 1",
        category: "Gradient",
      },
      { image: imageLink.midCuff, tshirtType: "Mid Cuff", category: "Special" },
      {
        image: imageLink.tshirtFront,
        tshirtType: "Sleeve Numbers",
        category: "Special",
      },
    ],
    [
      {
        image: imageLink.thinCuff,
        tshirtType: "Sleeve Striping",
        category: "Special",
      },
      {
        image: imageLink.shortCuff2,
        tshirtType: "Shoulder Yoke",
        category: "Standard",
      },
      {
        image: imageLink.twoToneSleeves,
        tshirtType: "Shoulder Patch",
        category: "Gradient",
      },
      {
        image: imageLink.tshirtFront,
        tshirtType: "Back Numbers",
        category: "Standard",
      },
    ],
  ],
};

const filterTypes = [
  {
    id: 1,
    name: "Standard",
  },
  {
    id: 2,
    name: "Gradient",
  },
  {
    id: 3,
    name: "Special",
  },
  {
    id: 4,
    name: "Standards",
  },
];
const TemplateCard: React.FC<TemplateCardProps> = ({
  isTemplateFilterOpen,
  setIsTemplateFilterOpen,
}) => {   

  const dispatch = useAppDispatch();

  const { tshirtData, tshirtId, buttonColor } = useSelector((state: RootState )=> state.tshirtStoreValue)

  const [filterType, setFilterType] = useState<string>("");
   const [currentColorIndex, setCurrectColorIndex] = useState<number>();
  const [templateTshirtType, seTemplateTshirtType] = useState<string>(getName(tshirtData, tshirtId));
  const handleTshirtTypePress = (item: string) => {
    // seTemplateTshirtType(item);
    const payload = {
      tshirtId: tshirtId,
      data: item
    }
    dispatch(setTemplateTypeFront(payload));
  };

  const handleCategoryFilter = (type: string) => {
    // console.log("type", type);
    if (type !== filterType) {
      setFilterType(type);
      filterByColorName(type);    
    } else {
      setFilterType("");
      filterByColorName("");   
    }
  };

  // console.log("tshirtData form store",tshirtData)

  const filterByColorName = (query: any) => {
    if (!query) return data; // Return original data if query is empty

    // Flatten and filter the data based on colorName
    const filteredItems = data.rows
      .flat()
      .filter((item) =>
        item.category.toLowerCase().includes(query.toLowerCase())
      );

    // Re-group into rows of 3 items each
    const newRows = [];
    for (let i = 0; i < filteredItems.length; i += 3) {
      newRows.push(filteredItems.slice(i, i + 3));
    }

    return { rows: newRows }; // Maintain the same object format
  };

  const filteredData = useMemo(() => {
    if (filterType) {
      return filterByColorName(filterType);
    } else {
      return data;
    }
  }, [filterType]);

  // console.log("filteredData", filteredData);
  return (
    <BottomSheetView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <BottomSheetScrollView horizontal>
            <View style={{ gap: 5 }}>
              {filteredData.rows.map((row, rowIndex) => (
                <View key={rowIndex} style={{ flexDirection: "row", gap: 10 }}>
                  {row.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.menuImgHeader,
                        item.tshirtType === getName(tshirtData, tshirtId) &&
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
                            color: themeColor.white,
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
          </BottomSheetScrollView>
        </View>

        <View>
          <BottomSheetScrollView horizontal>
            {isTemplateFilterOpen ? (
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                {filterTypes.map((item, index) => (
                  <TouchableOpacity
                    style={[
                      styles.filterHead,
                      filterType === item.name && styles.activeCategory,
                    ]}
                    key={item.id}
                    onPress={() => handleCategoryFilter(item.name)}
                  >
                    <Text
                      style={[
                        styles.text,
                        filterType === item.name && styles.activeText,
                      ]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
          </BottomSheetScrollView>
        </View>
      </View>
    </BottomSheetView>
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
    backgroundColor: themeColor.white,
  },
  activeCategory: {
    backgroundColor: themeColor.primary,
  },
  text: { color: themeColor.textPrimary, fontSize: 12 },
  activeText: { color: themeColor.white },
  activeTemplateType: {
    borderWidth: 1,
    borderColor: themeColor.primary,
  },
});

export default TemplateCard;
