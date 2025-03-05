import ColorPickerModal from "@/components/ColorPickerModal";
import SetedData from "@/components/SetedData";
// import { useBottomSheet } from "../components/CustomBottomSheet";
import TshirtBottomSheet from "@/components/TshirtBottomSheet";
import TshirtButton from "@/components/TshirtButton";
import { iconLink, imageLink } from "@/constants/image";
import { RootState } from "@/redux/store";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
// import PlayerList from "@/components/BottomSheetComponent/PlayerList";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useSelector } from "react-redux";

const HomePage = () => {
  const router = useRouter();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { tshirtData, tshirtId } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const selectedItem = tshirtData.find((item) => item.id === tshirtId);

  const openBottomSheet = () => {
    setIsSheetOpen(true);
    bottomSheetRef.current?.expand();
  };

  const handleCloseSheet = () => {
    if (isSheetOpen) {
      setIsSheetOpen(false);
      bottomSheetRef.current?.close();
    } else {
      setIsSheetOpen(true);
      bottomSheetRef.current?.expand();
    }
  };

  const [isFront, setIsFront] = useState(true);
  const handleFlip = () => {
    setIsFront(!isFront);
  };

  const handleCart = () => {
    router.push("/Cart");
  };

  //   commented because we don't want now

  //   const { showBottomSheet } = useBottomSheet();
  //   const openBottomSheet1 = () => {
  //     showBottomSheet(
  //       <View style={{ flex: 1 }}>
  //         <Text>Hello from Home Screen!</Text>
  //       </View>
  //     );
  //   };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <ColorPickerModal /> */}
      <StatusBar    
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground source={imageLink.tshirtBG} style={styles.container}>
        <View style={{ zIndex: 1 }}>
          <TshirtButton
            leftIconName={iconLink.handBag}
            rightIconName={iconLink.reload}
            onPressFirst={handleCart}
            onPressSecond={handleFlip}
            containerStyle={{ marginTop: 10 }}
          />   
        </View>
        <View      
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {isFront ? (
            <View style={{ height: 300, width: "100%" }}>
              <Image source={imageLink.tshirtFront} style={styles.tshirt} />
              {/* commented because of development in progress */}
              {/* {
                selectedItem?.tshirtFrontOption?.frontChest.frontChestImage? 
              <View
                style={{
                  position: "absolute",
                  height: 300,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: selectedItem?.tshirtFrontOption?.frontChest
                      ?.frontChestImage,
                  }}
                  style={styles.imageStyle}
                />
              </View>
              : null
              }   */}
            </View>
          ) : (
            <Image source={imageLink.tshirtBack} style={styles.tshirt} />
          )}
        </View>
        {!isSheetOpen && (
          <TshirtButton
            leftIconName={iconLink.file}
            rightIconName={iconLink.appstore}
            onPressSecond={openBottomSheet}
            containerStyle={{ marginVertical: 10 }}
          />
        )}

        {/* Overlay to close on outside click */}
        <TouchableWithoutFeedback onPress={handleCloseSheet}>
          <View style={styles.overlay} />
          {/* <View style={styles.overlay} children={<SetedData />} /> */}
        </TouchableWithoutFeedback>

        {/* {isSheetOpen && <PlayerList />} */}
        {isSheetOpen && <TshirtBottomSheet ref={bottomSheetRef} />}
      </ImageBackground>

      {/* custom bottom sheet */}
      {/* <CustomBottomSheet /> */}
      {/* <Button title="Open Bottom Sheet" onPress={openBottomSheet1} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // width: "100%",
    backgroundColor: "#FD8204",
    paddingTop: 40,
  },
  container: {
    flex: 1,
    // width: "100%",
    backgroundColor: "#ffff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  tshirt: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  imageStyle: {
    height: 100,
    width: 120,
    resizeMode: "contain",
    marginLeft: 10,
  },
});

export default HomePage;
