import React, { useRef, useContext, useState } from "react";
import {
  View,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
} from "react-native";

const { height } = Dimensions.get("window");

interface BottomSheetContextProps {
  showBottomSheet: (content: React.ReactNode) => void;
  hideBottomSheet: () => void;
}

const BottomSheetContext = React.createContext<
  BottomSheetContextProps | undefined
>(undefined);

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("useBottomSheet must be used within a BottomSheetProvider");
  }
  return context;
};

export const BottomSheetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const translateY = useRef<Animated.Value>(new Animated.Value(height)).current;

  const showBottomSheet = (content: React.ReactNode): void => {
    setContent(content);
    setVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const hideBottomSheet = (): void => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      setContent(null);
    });
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (
      _: GestureResponderEvent,
      gestureState: PanResponderGestureState
    ) => gestureState.dy > 10,
    onPanResponderMove: (
      _: GestureResponderEvent,
      gesture: PanResponderGestureState
    ) => {
      translateY.setValue(gesture.dy);
    },
    onPanResponderRelease: (
      _: GestureResponderEvent,
      gesture: PanResponderGestureState
    ) => {
      if (gesture.dy > 100) hideBottomSheet();
      else
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
    },
  });

  return (
    <BottomSheetContext.Provider value={{ showBottomSheet, hideBottomSheet }}>
      {children}

      {visible && (
        <Modal transparent={true} animationType="none">
          <TouchableWithoutFeedback onPress={hideBottomSheet}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>

          <Animated.View
            {...panResponder.panHandlers}
            style={[
              styles.bottomSheet,
              { transform: [{ translateY: translateY }] },
            ]}
          >
            {content}
          </Animated.View>
        </Modal>
      )}
    </BottomSheetContext.Provider>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
});
