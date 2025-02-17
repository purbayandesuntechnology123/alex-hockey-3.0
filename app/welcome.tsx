import Button from "@/components/Button";
import { themeColor } from "@/constants/colors";
import { fontFamily } from "@/constants/fontFamily";
import { iconLink } from "@/constants/image";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const Welcome = () => {
  const router = useRouter();
  const handleNext = () => {
    router.push("/ownDesign");
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <View style={{ alignSelf: "center" }}>
          <Image source={iconLink.fyre} style={styles.logo} />
        </View>
        <Image source={iconLink.welcomeTshirt} style={styles.tshirt} />
        <View>
          <Text style={styles.lable}>Start creating your</Text>
          <Text style={styles.lable}>custom hockey jersey!</Text>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              gap: 5,
              marginHorizontal: 20,
              paddingHorizontal: 10,
              borderBottomEndRadius: 8,
              borderBottomStartRadius: 8,
              alignItems: "center",
              marginTop: 20,
              marginBottom: 10,
            },
          ]}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#9BB8D3",
              height: 35,
              borderRadius: 3,
            }}
          />
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#0C2340",
              height: 35,
              borderRadius: 3,
            }}
          />
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#69B3E7",
              height: 35,
              borderRadius: 3,
            }}
          />
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              height: 35,
              borderRadius: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
            children={
              <Image
                source={iconLink.cross}
                style={{ resizeMode: "contain", width: 25, height: 25 }}
              />
            }
          />
        </View>
        <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
          <Text style={styles.description}>
            Drag colors in the order you want them to appear on your jersey.
            Farthest to the left is your primary base color. After that is your
            secondary color, and so on.
          </Text>
        </View>
        <Button
          text={"Next"}
          containerStyle={{
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 40,
          }}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: themeColor.primary,
    paddingTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: themeColor.textPrimary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
  },
  logo: {
    width: 149,
    height: 70,
    resizeMode: "contain",
  },
  tshirt: {
    width: "100%",
    height: 384,
    resizeMode: "contain",
  },
  lable: {
    color: themeColor.white,
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    fontFamily: fontFamily[500],
  },
  description: {
    color: themeColor.white,
    lineHeight: 20,
    textAlign: "center",
    fontSize: 13,
    fontFamily: fontFamily[500],
  },
});

export default Welcome;
