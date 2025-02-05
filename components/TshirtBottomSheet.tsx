import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { iconLink, imageLink } from "@/constants/image";
import BottomSheetHeader from "./BottomSheetComponent/BottomSheetHeader";
import TshirtMenuCard from "./BottomSheetComponent/TshirtMenuCard";

const TshirtBottomSheet = forwardRef<BottomSheet>((_, ref) => {
  const [tshirtType, setTshirtType] = useState<{ tshirtType: string } | null>(
    null
  );
  const [isTemplateOpened, setIsTempllateOpened] = useState<boolean>(false);

  // Callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  useEffect(() => {
    if (tshirtType?.tshirtType === "Template") {
      setIsTempllateOpened(true);
    } else {
      console.log("====>");
    }
  }, [tshirtType]);
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
        <BottomSheetView style={styles.contentContainer}>
          <BottomSheetHeader
            leftIconName={iconLink.sideMenu}
            rightIconName={iconLink.setting}
          />
          {!isTemplateOpened ? (
            <TshirtMenuCard setTshirtType={setTshirtType} />
          ) : null}
        </BottomSheetView>
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
