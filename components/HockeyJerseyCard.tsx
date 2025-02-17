import { imageLink } from '@/constants/image';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

interface HockeyJerseyCardProps {
  size: string;
  quantity: number;
}

const HockeyJerseyCard: React.FC<HockeyJerseyCardProps> = ({ size, quantity }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpansion} style={styles.card}>
      <View style={{ flexDirection: "row", gap: 14 }}>
        <ImageBackground source={imageLink.tshirtCardBG} style={styles.card1}>
          <Image source={imageLink.tshirtFront} style={styles.jerseyImage} />
        </ImageBackground>
        <View style={{justifyContent: "center", gap: 5}}>
          <Text style={styles.cardTitle}>Hockey Jersey</Text>
          <Text style={styles.text}>Size: {size}</Text>
          <Text style={styles.text}>Qty: {quantity}</Text>
        </View>
      </View>
      {isExpanded && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Track</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    // margin: 8,
    backgroundColor: "#F0EEEE",
    borderRadius: 8,
  },
  text: {
    fontSize: 12,
    color: "#666666",
    fontWeight: 400,
  },
  cardTitle: {
   fontSize: 13,
   fontWeight: 600, 
   color: "#000000"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    width: "48%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D1D1",
    height: 30,
    justifyContent: "center",
  },
  buttonText: {
    color: '#666666',
    fontSize: 12,
    fontWeight: 500,
  },
  jerseyImage: {
    height: 62,
    resizeMode: 'contain',
  },
  card1: {
    borderRadius: 6,
    alignItems: 'center',
    width: 72,
    height: 78,
    justifyContent: "center",
  },

});

export default HockeyJerseyCard;