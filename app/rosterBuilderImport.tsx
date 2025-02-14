import Button from "@/components/Button";
import HeaderNav from "@/components/HeaderNav";
import { iconLink } from "@/constants/image";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const RosterBuilderImport = () => {
  const handleBrowse = () => {};
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <HeaderNav title="Roster Builder" />
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{ backgroundColor: "#656569", padding: 10, borderRadius: 7 }}
          >
            <View
              style={{
                backgroundColor: "#1D1F24",
                borderRadius: 7,
                padding: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Image
                  source={iconLink.csv}
                  style={{ height: 18, width: 18, resizeMode: "contain" }}
                />
                <Text style={{ color: "#fff", fontSize: 11 }}>Sample</Text>
              </View>
              <View style={{ alignItems: "center", marginBottom: 30, gap: 10 }}>
                <Feather name="upload" size={24} color="#fff" />
                <Text style={{ color: "#fff", fontSize: 12 }}>
                  Upload File from Your Device
                </Text>
                <Button
                  text="Browse File"
                  onPress={handleBrowse}
                  containerStyle={{
                    borderRadius: 8,
                    backgroundColor: "#D9D9D9",
                  }}
                  style={{
                    color: "#1D1F24",
                    fontSize: 12,
                    fontFamily: "poppins",
                  }}
                />
              </View>
            </View>
          </View>
          <Button
            text="Import"
            onPress={handleBrowse}
            containerStyle={{
              borderRadius: 8,
              marginVertical: 10,
              padding: 15,
            }}
            style={{
              //   color: "#1D1F24",
              fontSize: 16,
              fontFamily: "poppins",
              fontWeight: "bold",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FD8204",
    paddingTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 10,
  },
});

export default RosterBuilderImport;
