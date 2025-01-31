import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

import { useFonts } from "expo-font";
import FBSvg from "./FbSvg";
import GoogleSvg from "./GoogleSvg";
import AppleSvg from "./AppleSvg";

const SocialSignup = () => {
  const [fontsLoaded] = useFonts({
    "league-Regular": require("../assets/fonts/Bebas_Neue,GFS_Neohellenic,League_Spartan/League_Spartan/static/LeagueSpartan-Regular.ttf"),
  });
  return (
    <View style={styles.divContainer}>
      <Text style={{ fontFamily: "league-Regular", alignSelf:'center', color:'#070707' }}>Or sign Up with</Text>
      <View style={styles.svgContainer}>

      <FBSvg/> 
      <GoogleSvg/>
        <AppleSvg/>
       
     
       
      </View>
    </View>
  );
};

export default SocialSignup;

const styles = StyleSheet.create({
  divContainer: {
    marginTop: 15,
   
  },
  svgContainer: {
    marginTop: 20,
   
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  svgFB: {
    width: 22,
    height: 22,
    // backgroundColor: "white",
    // borderRadius: 20,
    // borderWidth: 1,
    // borderColor: "gray",
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
    // elevation: 5,
  },
  svgGoogle: {
    width: 20,
    height: 20,
  },
  svgApple: {
    width: 20,
    height: 18,
  },

  Svg:{
    width: 40,  
      height: 40, 
      backgroundColor: "black", 
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
  }
});
