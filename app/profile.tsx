import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "@/components/Header";
import PrevArrows from "@/components/PrevArrows";
import { Image } from "expo-image";
import PencilSvg from "@/components/PencilSvg";
import Labels from "@/components/Labels";
import Inputs from "@/components/Inputs";
import { useFonts } from "expo-font";
import Button from "@/components/Button";
import { useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const profile = () => {
  const { width } = Dimensions.get("window");
  const navigation: any = useNavigation();

  const imageWidth = width * 0.4;
  const [fontLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins (2)/Poppins-Regular.ttf"),
  });

  const isUpdateProfile = () => {
    navigation.navigate("products");
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
          <Header text="Profile" />
          <PrevArrows href={"/success"} />

          <View style={styles.profileCon}>
            <View style={styles.profileImgCon}>
              <Image
                style={[
                  styles.profileImg,
                  { width: imageWidth, height: imageWidth },
                ]}
                source={require("../assets/images/profile_pic.png")}
              />

              <View
                style={{
                  width: 40, // Adjust based on your design
                  height: 40, // Adjust based on your design
                  backgroundColor: "#FD8204", // Light blue background (change as needed)
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: imageWidth * 0.05,
                  left: imageWidth * 1.37,
                }}>
                <PencilSvg />
              </View>
            </View>

            <View style={styles.inputCon}>
              <Labels labels="Full Name" />
              <Inputs value="John Doe" style={styles.input} />
            </View>

            <View style={styles.inputCon}>
              <Labels labels="Email" />
              <Inputs value="info@alexhockey.com" style={styles.input} />
            </View>
            <View style={styles.inputCon}>
              <Labels labels="Contact Number" />
              <Inputs value="+1 1234 546 789" style={styles.input} />
            </View>

            <View style={styles.buttonCon}>
              <Button text="Update Profile" onPress={isUpdateProfile} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: '#FD8204',
    paddingTop: 10,
},
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
  mainContainer: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
  },
  profileImgCon: {
    position: "relative",
    marginTop: 30,
    marginBottom: 20,
  },
  profileImg: {
    borderRadius: 100,
    alignSelf: "center",
  },
  profileCon: {},
  inputCon: {
    marginBottom: 20,
  },
  input: {
    fontFamily: "poppins-Regular",
    color: "#5B5757",
  },
  buttonCon: {
    marginTop: 20,
  },
  gradient: {
    flex: 1,
  },
});
