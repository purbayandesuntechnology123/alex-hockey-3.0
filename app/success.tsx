import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import PrevArrows from "@/components/PrevArrows";
import CheckSvg from "@/components/CheckSvg";
import Button from "@/components/Button";
import { useFonts } from "expo-font";

const success = () => {
  const [fontsLoaded] = useFonts({
    "poppins-Regular": require("../assets/fonts/Poppins (2)/Poppins-Regular.ttf"),
    "poppins-Semibold": require("../assets/fonts/Poppins (2)/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins (2)/Poppins-Bold.ttf"),
  });
  return (
    <View style={styles.mainContainer}>
      <Header text="Success" />
      <PrevArrows href={"/changepassword"} />
      <View style={styles.container}>
      <View>
        <CheckSvg />
      
          <Text style={styles.successText}>Success!</Text>
          <Text style={styles.message}>Your password has been changed successfully</Text>
        </View>
      </View>

      <View>
        <Button text="Continue" />
      </View>
    </View>
  );
};

export default success;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAF7",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    height: "70%",
  },
  successText: {
    fontSize: 26,
    fontFamily: "poppins-Semibold",
    color:'#71AE3A',
    alignSelf:'center',
    marginTop:50
  },
  message:{
    fontSize:14,
    fontFamily:'poppins-Regular',
    textAlign:'center'
  }
});
