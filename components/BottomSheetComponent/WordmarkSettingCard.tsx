import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Slider from "@react-native-community/slider";
import { Feather } from "@expo/vector-icons";
import { useAppDispatch } from "@/redux/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setFrontChestWordmarkScale, setFrontChestWordmarkVerticalPosition } from "@/redux/slices/tshirtDataSlice";

const WordmarkSettingCard = () => {
  const dispatch = useAppDispatch();

  const { tshirtData, tshirtId } = useSelector(
    (state: RootState) => state.tshirtStoreValue
  );

  const selectedItem = tshirtData?.find((item) => item.id === tshirtId);
  const wordmarkSettingData = selectedItem?.tshirtFrontOption?.frontChest?.wordmark?.chestWordmarkSetting;

  const [horizontalPosition, setHorizontalPosition] = useState(0);
  const [verticalPosition, setVerticalPosition] = useState(wordmarkSettingData?.vertical || 0);
  const [scale, setScale] = useState(1.0);

  const handleVertical = (val: number) => {
    // setVerticalPosition(val);
    const payload = {
      tshirtId: tshirtId,
      data: val,
    };
    dispatch(setFrontChestWordmarkVerticalPosition(payload));
  };

  const handleScale = (val: number) => {
    const payload = {
      tshirtId: tshirtId,
      data: val,
    }
    dispatch(setFrontChestWordmarkScale(payload))
  }

  return (
    <View style={styles.container}>
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
            onValueChange={(val) => handleVertical(val)}
            thumbTintColor="#fff"
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#999999"
          />
          <Feather name="arrow-up" size={12} color="#fff" />
        </View>
        <View style={styles.input}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }}>
            {wordmarkSettingData?.vertical.toFixed(0)}
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
            minimumValue={1}
            maximumValue={2.0}
            value={scale}
            onValueChange={(val)=> handleScale(val)}
            thumbTintColor="#fff"
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#999999"
          />
          <Text style={{ color: "#fff" }}>A</Text>
        </View>
        <View style={styles.input}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }}>
            {wordmarkSettingData?.scale.toFixed(1)}
          </Text>
        </View>
      </View>

      {/* Horizontal Position */}
      <View style={styles.controlRow}>
        <Text style={styles.label}>Arching</Text>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 5,
          }}
        >
          <Feather name="minus" size={12} color="#fff" />
          <Slider
            style={styles.slider}
            minimumValue={-10}
            maximumValue={10}
            value={horizontalPosition}
            onValueChange={setHorizontalPosition}
            thumbTintColor="#fff"
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#999999"
          />
          <Feather name="plus" size={12} color="#fff" />
        </View>
        <View style={styles.input}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }}>
            {horizontalPosition.toFixed(1)}
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
    width: "95%",
    alignSelf: "center",
    // marginTop: 50,,
    marginBottom: 30,
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

export default WordmarkSettingCard;
