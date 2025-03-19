import React, { useState } from "react";
import { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";
import BottomSheetHeader from "../BottomSheetComponent/BottomSheetHeader";
import TemplateCard from "../BottomSheetComponent/TemplateCard";
import ColorPickerButton from "../Button/ColorPickerButton";
import { iconLink } from "@/constants/image";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/hooks";
import { setTemplateColor } from "@/redux/slices/tshirtDataSlice";

// interface TemplateSheetProps {

// }

const TemplateSheet = ({ setIsTemplateOpened, commonBack}) => {
      const dispatch = useAppDispatch();

    const { tshirtData, tshirtId } = useSelector(
        (state) => state.tshirtStoreValue
      );
    const selectedItem = tshirtData.find((item) => item.id === tshirtId);
  const [isTemplateFilterOpen, setIsTemplateFilterOpen] =
    useState<boolean>(false);
  const handletemFilterClick = () => {
    setIsTemplateFilterOpen(!isTemplateFilterOpen);
    // setTshirtType(null);
  };
  const handleTemplateBackClick = () => {
    setIsTemplateFilterOpen(false);
    setIsTemplateOpened(false);
    commonBack();
  };
  const selectedColor = selectedItem?.tshirtFrontOption?.template.templateColor || [];
      // tshirtData?.tshirtFrontOption?.frontChest.wordmark.wordmarkColor || [];
  
      const handleTemplateColorChange = (newColor, index) => {
        const updatedColor = selectedColor.map((color, i) =>
          i === index ? { ...color, color: newColor } : color
        );
        dispatch(setTemplateColor({ tshirtId, data: updatedColor }));
      };
  return (
    <BottomSheetView style={styles.contentContainer}>
      <BottomSheetHeader
        title="Template"
        leftIconName={iconLink.leftIcon}
        rightIconName={iconLink.adjust}
        containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
        onPressFirst={handleTemplateBackClick}
        onPressSecond={handletemFilterClick}
        rightIconStyle={isTemplateFilterOpen ? { tintColor: "#FD8204" } : {}}
      />
      <BottomSheetScrollView style={[styles.contentContainer, { gap: 0 }]}>
        <TemplateCard
          isTemplateFilterOpen={isTemplateFilterOpen}
          setIsTemplateFilterOpen={setIsTemplateFilterOpen}
        />
        {!isTemplateFilterOpen ? (
          <ColorPickerButton
          containerStyle={{marginTop: 10}}
            colorOptions={selectedColor}
            onColorChange={handleTemplateColorChange}
          />
        ) :
        null}
      </BottomSheetScrollView>
    </BottomSheetView>
  );
};

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
});

export default TemplateSheet;
