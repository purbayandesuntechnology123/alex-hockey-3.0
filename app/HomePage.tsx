import React, { useRef, useState } from "react";
// import { useBottomSheet } from "../components/CustomBottomSheet";
import TshirtBottomSheet from "@/components/TshirtBottomSheet";
import TshirtButton from "@/components/TshirtButton";
import { iconLink, imageLink } from "@/constants/image";
import { RootState } from "@/redux/store";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import ChestText from "@/components/ChestComponent/ChestText";
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
import TshirtFront from "@/components/Home/TshirtFront";
import HockeyJerseyBack from "@/assets/images/svg/HockeyJerseyBack";
import TshirtBack from "@/components/Home/TshirtBack";

const HomePage = () => {
  const router = useRouter();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { tshirtData, tshirtId } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const selectedItem = tshirtData.find((item) => item.id === tshirtId);

  // console.log("selectedItem====>",selectedItem?.tshirtFrontOption?.template)

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
            <TshirtFront />
          ) : (
            <TshirtBack />
            // <HockeyJerseyBack />
            // <Image source={imageLink.tshirtBack} style={styles.tshirt} />
          )}
        </View>
        <View style={{ zIndex: 0 }}>
          {!isSheetOpen && (
            <TshirtButton
              leftIconName={iconLink.file}
              rightIconName={iconLink.appstore}
              onPressSecond={openBottomSheet}
              containerStyle={{ marginVertical: 10 }}
            />
          )}
        </View>

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
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
});

export default HomePage;
