import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import PrevArrow2 from '@/components/PrevArrow2'
import PrevSvg from '@/components/PrevArrowSvg'
import { LinearGradient } from 'expo-linear-gradient'

const ProductOptions = () => {
  return (
    <View style={styles.mainContainer}>
        <LinearGradient style={styles.headerCon} colors={["gray","orange"]}>
            <Header text='Product Options' style={styles.header}/>
        </LinearGradient>
       
    </View>
  )
}

export default ProductOptions

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    padding: 20,
  },
  headerCon: {
    flexDirection: "row",
    alignItems: "center", 
    gap: 10,
  },
  header: {
    color: 'gray',
    marginLeft: 10,
  },
})
