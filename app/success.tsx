import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import PrevArrows from "@/components/PrevArrows";
import CheckSvg from "@/components/CheckSvg";
import Button from "@/components/Button";
import { useFonts } from "expo-font";
import { useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const success = () => {
  const navigation: any = useNavigation();
  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  const handleSubmit = () => {
    navigation.navigate("profile");
  };
  return (
    <View style={styles.topContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <Header text="Success" />
          <PrevArrows href={"/changepassword"} />
          <View style={styles.container}>
            <View>
              <CheckSvg />

              <Text style={styles.successText}>Success!</Text>
              <Text style={styles.message}>
                Your password has been changed successfully
              </Text>
            </View>
          </View>

          <View>
            <Button text="Continue" onPress={handleSubmit} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default success;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: "#FD8204",
    paddingTop: 10,
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F8FAF7",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    height: "70%",
  },
  successText: {
    fontSize: 26,
    fontFamily: "poppins-Semibold",
    color: "#71AE3A",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  message: {
    fontSize: 14,
    fontFamily: "poppins-Regular",
    textAlign: "center",
  },
});
