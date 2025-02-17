import React, { useState } from "react";
import { View, Text } from "react-native";
import { PanGestureHandler, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";

interface DraggableButtonProps {
  label: string;
  index: number;
  positions: Animated.SharedValue<number[]>;
  swapPositions: (from: number, to: number) => void;
}

const DraggableButton: React.FC<DraggableButtonProps> = ({ label, index, positions, swapPositions }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;

      const newIndex = Math.round((translateX.value + 40) / 90);
      if (newIndex !== index && newIndex >= 0 && newIndex < positions.value.length) {
        swapPositions(index, newIndex);
      }
    },
    onEnd: () => {
      translateX.value = withSpring(positions.value[index] * 90);
      translateY.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[
          {
            width: 80,
            height: 50,
            backgroundColor: "#3498db",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 5,
            position: "absolute",
            left: positions.value[index] * 90,
          },
          animatedStyle,
        ]}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>{label}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default DraggableButton;