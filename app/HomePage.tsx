import TshirtBottomSheet from "@/components/TshirtBottomSheet";
import TshirtButton from "@/components/TshirtButton";
import { iconLink, imageLink } from "@/constants/image";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";

const HomePage = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground source={imageLink.tshirtBG} style={styles.mainContainer}>
        <View style={{ zIndex: 1 }}>
          <TshirtButton
            leftIconName={iconLink.handBag}
            rightIconName={iconLink.reload}
            onPressSecond={handleFlip}
            containerStyle={{ marginTop: 10 }}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {isFront ? (
            <Image source={imageLink.tshirtFront} style={styles.tshirt} />
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
        </TouchableWithoutFeedback>

        {isSheetOpen && <TshirtBottomSheet ref={bottomSheetRef} />}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
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
});

export default HomePage;
