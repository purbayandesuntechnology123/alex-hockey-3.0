import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const translateX = new Animated.Value(isEnabled ? 25 : 0);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    Animated.timing(translateX, {
      toValue: isEnabled ? 0 : 20, // Slide position
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
        <View
          style={[styles.switchContainer, isEnabled && styles.switchEnabled]}
        >
          <Animated.View
            style={[
              styles.thumb,
              {
                transform: [{ translateX: translateX }],
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    marginRight: 10,
  },
  switchContainer: {
    width: 50,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#505050",
    padding: 2,
    justifyContent: "center",
  },
  switchEnabled: {
    backgroundColor: "#FD8204",
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: "#8F909B",
    borderRadius: 50,
  },
});

export default CustomSwitch;
