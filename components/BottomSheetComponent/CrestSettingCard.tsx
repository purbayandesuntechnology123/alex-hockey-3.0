import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Slider from "@react-native-community/slider";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import {
  setFrontChestSettingHorizontal,
  setFrontChestSettingScale,
  setFrontChestSettingVertical,
} from "@/redux/slices/tshirtDataSlice";
import { useAppDispatch } from "@/redux/hooks";

const CrestSettingCard = () => {
  const dispatch = useAppDispatch();

  const { tshirtId, tshirtData } = useSelector(
    (state) => state.tshirtStoreValue
  );
  const selectedItem = tshirtData.find((item) => item.id === tshirtId);

  const [horizontalPosition, setHorizontalPosition] = useState(
    selectedItem.tshirtFrontOption.frontChest.chestImageSetting.horizontal || 0
  );
  const [verticalPosition, setVerticalPosition] = useState(
    selectedItem.tshirtFrontOption.frontChest.chestImageSetting.vertical || 0
  );
  const [scale, setScale] = useState(
    selectedItem.tshirtFrontOption.frontChest.chestImageSetting.scale || 1.0
  );

  const handleHorizontalPosition = (val) => {
    // setHorizontalPosition(val)
    const payload = {
      tshirtId: tshirtId,
      data: val,
    };
    dispatch(setFrontChestSettingHorizontal(payload));
  };

  const handleVerticalPosition = (val) => {
    const payload = {
      tshirtId: tshirtId,
      data: val,
    };
    dispatch(setFrontChestSettingVertical(payload));
  };

  const handleScale = (val) => {
    const payload = {
      tshirtId: tshirtId,
      data: val,
    };
    dispatch(setFrontChestSettingScale(payload));
  };

  return (
    <View style={styles.container}>
      {/* Horizontal Position */}
      <View style={styles.controlRow}>
        <Text style={styles.label}>Horizontal Position</Text>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 5,
          }}
        >
          <Feather name="arrow-left" size={12} color="#fff" />
          <Slider
            style={styles.slider}
            minimumValue={-10}
            maximumValue={10}
            value={horizontalPosition}
            onValueChange={(val) => handleHorizontalPosition(val)}
            thumbTintColor="#fff"
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#999999"
          />
          <Feather name="arrow-right" size={12} color="#fff" />
        </View>
        <View style={styles.input}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }}>
            {selectedItem.tshirtFrontOption.frontChest.chestImageSetting.horizontal.toFixed(
              0
            ) || horizontalPosition.toFixed(0)}
          </Text>
        </View>
      </View>

      {/* Vertical Position */}
      <View style={styles.controlRow}>
        <Text style={styles.label}>Vertical Position</Text>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 5,
          }}
        >
          <Feather name="arrow-down" size={12} color="#fff" />
          <Slider
            style={styles.slider}
            minimumValue={-10}
            maximumValue={10}
            value={verticalPosition}
            onValueChange={(val) => {
              handleVerticalPosition(val);
            }}
            thumbTintColor="#fff"
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#999999"
          />
          <Feather name="arrow-up" size={12} color="#fff" />
        </View>
        <View style={styles.input}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }}>
            {selectedItem.tshirtFrontOption.frontChest.chestImageSetting.vertical.toFixed(
              1
            ) || verticalPosition.toFixed(0)}
          </Text>
        </View>
      </View>

      {/* Scale */}
      <View style={styles.controlRow}>
        <Text style={styles.label}>Scale</Text>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 5,
          }}
        >
          <Text style={{ color: "#fff" }}>A</Text>
          <Slider
            style={styles.slider}
            minimumValue={0.5}
            maximumValue={2.0}
            value={scale}
            onValueChange={(val) => {
              handleScale(val);
            }}
            thumbTintColor="#fff"
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#999999"
          />
          <Text style={{ color: "#fff" }}>A</Text>
        </View>
        <View style={styles.input}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }}>
            {selectedItem.tshirtFrontOption.frontChest.chestImageSetting.scale.toFixed(
              1
            ) || scale.toFixed(1)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#656569",
    padding: 16,
    borderRadius: 12,
    // width: "100%",
    // alignSelf: "center",
    // marginTop: 50,,
    marginBottom: 20,
  },
  controlRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    color: "white",
    width: 120,
  },
  slider: {
    flex: 1,
    marginHorizontal: -10,
  },
  input: {
    backgroundColor: "#1D1F24",
    color: "white",
    width: 40,
    textAlign: "center",
    borderRadius: 6,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CrestSettingCard;
