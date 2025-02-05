import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import PrevArrow2 from '@/components/PrevArrow2'
import PrevSvg from '@/components/PrevArrowSvg'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'

const ProductOptions = () => {
  return (
    <View style={styles.mainContainer}>
        <LinearGradient colors={["#FFDFBE", "#FFFFFF"]} style={styles.gradient} />

{/* Transparent Status Bar */}
<StatusBar
  translucent
  backgroundColor="transparent"
  barStyle="dark-content"
/>

<View style={styles.headerCon}>

<Header text="Product Options" style={styles.header}/>
<AntDesign name="arrowleft" size={24} color="#666666" />
</View>
  
    </View>
  )
}

export default ProductOptions

const styles = StyleSheet.create({
  headerCon:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  mainContainer: {
    flex:1,
   
    padding: 20,
    backgroundColor:'#FCFCFC'
  },
 
  

  gradient: {
    position: "absolute",
    minWidth: "120%",
    minHeight: 40, // Height of status bar (adjust if needed)
    top: 0,
    left: 0,
  },
  header:{
  
    color:'#6D6D6D',


  }
})
