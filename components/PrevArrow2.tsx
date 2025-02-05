import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router'

const PrevArrow2 = ({ href }: { href: any }) => {
  return (
    <Link href={href} >
      
        <AntDesign name="arrowleft" size={24} color="#666666" />

    </Link>
  )
}

export default PrevArrow2

const styles = StyleSheet.create({
  arrow: {
    justifyContent: 'center', // Align properly inside TouchableOpacity
    alignItems: 'center',
    // Improve touch area for better UX
  }
})
