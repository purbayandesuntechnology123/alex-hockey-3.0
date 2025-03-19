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
import MenuSettingCard from "./BottomSheetComponent/MenuSettingCard";
import FrontCrestImageCard from "./BottomSheetComponent/FrontCrestImageCard";
import FrontCrestWordmarkCard from "./BottomSheetComponent/FrontCrestWordmarkCard";
import CrestSettingCard from "./BottomSheetComponent/CrestSettingCard";
import WordmarkSettingCard from "./BottomSheetComponent/WordmarkSettingCard";
import FrontCrestPatternCard from "./BottomSheetComponent/FrontCrestPatternCard";
import SleeveNumberCard from "./BottomSheetComponent/SleeveNumberCard";
import SleeveStripingCard from "./BottomSheetComponent/SleeveStripingCard";
import AllTshirt from "./Alltshirt";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TemplateSheet from "./Template/TemplateSheet";
// import CrestSettingCard from "./BottomSheetComponent/CrestSettingCard";
// import WordmarkSettingCard from "./BottomSheetComponent/WordmarkSettingCard";

const TshirtBottomSheet = forwardRef<BottomSheet>((_, ref) => {
  const { tshirtData, tshirtId } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );
  const [tshirtType, setTshirtType] = useState<{ tshirtType: string } | null>(
    null
  );
  const [isTemplateOpened, setIsTemplateOpened] = useState<boolean>(false);
  const [createdBy, setCreatedBy] = useState<string>("");
  const [isMenuSettingOpen, setIsMenuSettingOpen] = useState<boolean>(false);
  const [isTemplateFilterOpen, setIsTemplateFilterOpen] =
    useState<boolean>(false);
  const [frontCrestOpened, setFrontCrestOpened] = useState<boolean>(false);
  const [isCrestSetting, SetIsCrestSetting] = useState<boolean>(false);
  const [isWordmarkSetting, setIsWordmarkSetting] = useState<boolean>(false);
  const [isWordmark, setIsWordmark] = useState<boolean>(false);
  const [frontCrestPattern, setFrontCrestPattern] = useState<boolean>(false);
  const [IsChestStriping, setIsChestStriping] = useState<boolean>(false);
  const [isSleeveNumberOpened, setIsSleeveNumberOpened] =
    useState<boolean>(false);
  const [isSleeveStripingOpened, setIsSleeveStripingOpened] =
    useState<boolean>(false);

  const [isOpenAlltshirt, setIsOpenAlltshirt] = useState<boolean>(false);

  const selectedItem = tshirtData.find((item) => item.id === tshirtId);

  // Callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    if (tshirtType?.tshirtType === "Template") {
      setIsTemplateOpened(true);
    } else if (tshirtType?.tshirtType === "Chest Stripping") {
      setIsChestStriping(true);
    } else if (tshirtType?.tshirtType === "Front Crest") {
      setFrontCrestOpened(true);
    } else if (tshirtType?.tshirtType === "Sleeve Numbers") {
      setIsSleeveNumberOpened(true);
    } else if (tshirtType?.tshirtType === "Sleeve Striping") {
      setIsSleeveStripingOpened(true);
    } else {
      console.log("====>");
    }
  }, [tshirtType]);

  const commonBack = () => {
    setTshirtType(null);
  };

  const handleMenuLeftPress = () => {
    setIsMenuSettingOpen(false);
    setIsOpenAlltshirt(true);
  };

  const handleAllTshirtLeftPress = () => {
    // setIsMenuSettingOpen(true);
    setIsOpenAlltshirt(false);
  };

  const handletemFilterClick = () => {
    setIsTemplateFilterOpen(!isTemplateFilterOpen);
    setTshirtType(null);
  };
  const handleTemplateBackClick = () => {
    setIsTemplateFilterOpen(false);
    setIsTemplateOpened(false);
    setTshirtType(null);
  };

  const handleChestStripingBackClick = () => {
    setIsChestStriping(false);
  };

  const handleMenuSettingLeftIconPress = () => {
    setIsMenuSettingOpen(false);
  };
  const handlemenuSeting = () => {
    setIsMenuSettingOpen(true);
  };

  //   Front creat actions start
  const handleFrontCrestBackClick = () => {
    setFrontCrestOpened(false);
  };

  const handleFrontCrestSettingClick = () => {
    if (isWordmark) {
      setIsWordmarkSetting(true);
    } else {
      if (selectedItem?.tshirtFrontOption?.frontChest.frontChestImage) {
        SetIsCrestSetting(true);
      }
    }
  };

  const handleCrestSettingLeftClick = () => {
    SetIsCrestSetting(false);
  };
  const handleWordMarkSettingLeftClick = () => {
    setIsWordmarkSetting(false);
  };

  const handleCrestImageClick = () => {
    setIsWordmark(false);
  };

  const handleFrontCrestWordmarkClick = () => {
    setIsWordmark(true);
  };

  //   Front crest action end
  // console.log("tshirtType", tshirtType);
  //   console.log("isTemplateOpened", isTemplateOpened);
  return (
    <GestureHandlerRootView
      style={[styles.container, isMenuSettingOpen && { flex: 0.5 }]}
    >
      <BottomSheet
        ref={ref}
        snapPoints={["95%", "95%"]}
        // snapPoints={isMenuSettingOpen ? ["95%", "95%"] : ["95%", "95%"]}
        backgroundStyle={{ backgroundColor: "#1D1F24" }}
        onChange={handleSheetChanges}
        enableContentPanningGesture={false}
        enablePanDownToClose={false}
        enableDynamicSizing={false}
      >
        {isTemplateOpened ? (
          <TemplateSheet
            setIsTemplateOpened={setIsTemplateOpened}
            commonBack={commonBack}
          />
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
        ) : frontCrestOpened ? (
          <View style={{ flex: 1 }}>
            {isCrestSetting ? (
              <View style={{ flex: 1 }}>
                <BottomSheetHeader
                  title="Crest Setting"
                  leftIconName={iconLink.leftIcon}
                  onPressFirst={handleCrestSettingLeftClick}
                  containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
                />
                <BottomSheetView style={styles.contentContainer}>
                  <CrestSettingCard />
                </BottomSheetView>
              </View>
            ) : isWordmarkSetting ? (
              <View style={{ flex: 1 }}>
                <BottomSheetHeader
                  title="Wordmark Setting"
                  leftIconName={iconLink.leftIcon}
                  onPressFirst={handleWordMarkSettingLeftClick}
                  containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
                />
                <BottomSheetView style={styles.contentContainer}>
                  <WordmarkSettingCard />
                </BottomSheetView>
              </View>
            ) : frontCrestPattern ? (
              <View style={{ flex: 1 }}>
                <FrontCrestPatternCard
                  setFrontCrestPattern={setFrontCrestPattern}
                />
              </View>
            ) : (
              <View style={{ flex: 1 }}>
                <BottomSheetHeader
                  leftIconName={iconLink.leftIcon}
                  rightIconName={iconLink.setting}
                  title="front chest"
                  isTab
                  onPressFirst={handleFrontCrestBackClick}
                  onPressSecond={handleFrontCrestSettingClick}
                  isWordmark={isWordmark}
                  containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
                  onTabLeftPress={handleCrestImageClick}
                  onTabRightPress={handleFrontCrestWordmarkClick}
                />
                <BottomSheetView style={styles.contentContainer}>
                  {!isWordmark ? (
                    <FrontCrestImageCard
                      setFrontCrestPattern={setFrontCrestPattern}
                    />
                  ) : (
                    <FrontCrestWordmarkCard />
                  )}
                </BottomSheetView>
              </View>
            )}
          </View>
        ) : isSleeveNumberOpened ? (
          <BottomSheetView style={{ flex: 1 }}>
            <SleeveNumberCard
              setIsSleeveNumberOpened={setIsSleeveNumberOpened}
            />
          </BottomSheetView>
        ) : isSleeveStripingOpened ? (
          <BottomSheetView style={{ flex: 1 }}>
            <SleeveStripingCard
              setIsSleeveStripingOpened={setIsSleeveStripingOpened}
            />
          </BottomSheetView>
        ) : (
          <View style={{ flex: 1 }}>
            {isOpenAlltshirt ? (
              <View style={{ flex: 1 }}>
                <BottomSheetHeader
                  title="Select Tshirt"
                  leftIconName={iconLink.leftIcon}
                  // rightIconName={iconLink.setting}
                  onPressFirst={handleAllTshirtLeftPress}
                  onPressSecond={handlemenuSeting}
                  containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
                />
                <AllTshirt />
              </View>
            ) : !isMenuSettingOpen ? (
              <>
                <BottomSheetHeader
                  title="Menu"
                  leftIconName={iconLink.sideMenu}
                  rightIconName={iconLink.setting}
                  onPressFirst={handleMenuLeftPress}
                  onPressSecond={handlemenuSeting}
                  containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
                />
                <BottomSheetScrollView style={styles.contentContainer}>
                  <TshirtMenuCard setTshirtType={setTshirtType} />
                </BottomSheetScrollView>
              </>
            ) : (
              <>
                {/* jersey Option start */}
                <BottomSheetHeader
                  title="Jersey Options"
                  leftIconName={iconLink.leftIcon}
                  onPressFirst={handleMenuSettingLeftIconPress}
                  containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
                />
                <BottomSheetView style={styles.contentContainer}>
                  <MenuSettingCard />
                </BottomSheetView>
                {/* jersey Option end */}

                {/* Crest Setting start */}
                {/* <BottomSheetHeader
                  title="Crest Setting"
                  leftIconName={iconLink.leftIcon}
                  onPressFirst={handlemenuLeftIconPress}
                  containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
                />
                <BottomSheetView style={styles.contentContainer}>
                  <CrestSettingCard />
                </BottomSheetView> */}
                {/* Crest Setting end */}

                {/* Wordmark Setting start */}
                {/* <BottomSheetHeader
                  title="Wordmark Setting"
                  leftIconName={iconLink.leftIcon}
                  onPressFirst={handlemenuLeftIconPress}
                  containerStyle={{ marginHorizontal: 10, marginBottom: 5 }}
                />
                <BottomSheetView style={styles.contentContainer}>
                  <WordmarkSettingCard />
                </BottomSheetView> */}
                {/* Wordmark Setting end */}
              </>
            )}
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
