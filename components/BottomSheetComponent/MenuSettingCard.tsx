import React from "react";
import { Text, View } from "react-native";
import Inputs from "../Inputs";

const MenuSettingCard = () => {
  return (
    <View style={{ gap: 5 }}>
      {/* Menu Setting Card */}
      <View
        style={{
          flexDirection: "row",
          padding: 8,
          backgroundColor: "#3E3E3E",
          paddingHorizontal: 10,
          borderRadius: 8,
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ color: "#fff", fontSize: 12 }}>Created By:</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Inputs
            style={{
              backgroundColor: "#242427",
              height: 20,
              borderRadius: 2,
              borderWidth: 0,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          padding: 8,
          backgroundColor: "#3E3E3E",
          paddingHorizontal: 10,
          borderRadius: 8,
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ color: "#fff", fontSize: 12 }}>Background Color:</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Inputs
            style={{
              backgroundColor: "#757077",
              height: 20,
              borderRadius: 2,
              borderWidth: 0,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MenuSettingCard;
