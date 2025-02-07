import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { iconLink, imageLink } from "@/constants/image";
import BottomSheetHeader from "./BottomSheetComponent/BottomSheetHeader";
import TshirtMenuCard from "./BottomSheetComponent/TshirtMenuCard";
import TemplateCard from "./BottomSheetComponent/TemplateCard";
import TshirtButtonColor from "./BottomSheetComponent/TshirtButtonColor";
import ChestStripingCard from "./BottomSheetComponent/ChestStripingCard";

const TshirtBottomSheet = forwardRef<BottomSheet>((_, ref) => {
  const [tshirtType, setTshirtType] = useState<{ tshirtType: string } | null>(
    null
  );
  const [isTemplateOpened, setIsTemplateOpened] = useState<boolean>(false);
  const [isTemplateFilterOpen, setIsTemplateFilterOpen] =
    useState<boolean>(false);
  const [IsChestStriping, setIsChestStriping] = useState<boolean>(false);

  // Callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  useEffect(() => {
    if (tshirtType?.tshirtType === "Template") {
      setIsTemplateOpened(true);
    } else if (tshirtType?.tshirtType === "Chest Stripping") {
      setIsChestStriping(true);
    } else {
      console.log("====>");
    }
  }, [tshirtType]);

  const handletemFilterClick = () => {
    setIsTemplateFilterOpen(!isTemplateFilterOpen);
  };
  const handleTemplateBackClick = () => {
    setIsTemplateFilterOpen(false);
    setIsTemplateOpened(false);
  };

  const handleChestStripingBackClick = () => {
    setIsChestStriping(false);
  };
  console.log("tshirtType", tshirtType);
  console.log("isTemplateOpened", isTemplateOpened);
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={ref}
        snapPoints={["95%", "95%"]}
        backgroundStyle={{ backgroundColor: "#1D1F24" }}
        onChange={handleSheetChanges}
      >
        {isTemplateOpened ? (
          //   <BottomSheetView style={styles.contentContainer}>
          <View style={{ flex: 1 }}>
            <BottomSheetHeader
              title="Template"
              leftIconName={iconLink.leftIcon}
              rightIconName={iconLink.adjust}
              containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
              onPressFirst={handleTemplateBackClick}
              onPressSecond={handletemFilterClick}
              rightIconStyle={
                isTemplateFilterOpen ? { tintColor: "#FD8204" } : {}
              }
            />
            <BottomSheetScrollView horizontal style={styles.contentContainer}>
              <TemplateCard
                isTemplateFilterOpen={isTemplateFilterOpen}
                setIsTemplateFilterOpen={setIsTemplateFilterOpen}
              />
            </BottomSheetScrollView>
            {!isTemplateFilterOpen ? <TshirtButtonColor /> : null}
          </View>
        ) : IsChestStriping ? (
          <View style={{ flex: 1 }}>
            <BottomSheetHeader
              title="Chest Striping"
              leftIconName={iconLink.leftIcon}
              rightIconName={iconLink.adjust}
              containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
              onPressFirst={handleChestStripingBackClick}
              onPressSecond={handletemFilterClick}
              rightIconStyle={
                isTemplateFilterOpen ? { tintColor: "#FD8204" } : {}
              }
            />
            <BottomSheetScrollView horizontal style={styles.contentContainer}>
              <ChestStripingCard
                isTemplateFilterOpen={isTemplateFilterOpen}
                setIsTemplateFilterOpen={setIsTemplateFilterOpen}
              />
            </BottomSheetScrollView>
            <TshirtButtonColor />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <BottomSheetHeader
              title="Menu"
              leftIconName={iconLink.sideMenu}
              rightIconName={iconLink.setting}
              containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
            />
            <BottomSheetView style={styles.contentContainer}>
              <TshirtMenuCard setTshirtType={setTshirtType} />
            </BottomSheetView>
          </View>
        )}
      </BottomSheet>
    </GestureHandlerRootView>
  );
});

export default TshirtBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1.1,
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
  },
  imageStyle: { height: 60, width: 60, resizeMode: "contain" },
});
