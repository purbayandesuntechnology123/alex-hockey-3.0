import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { imageLink } from '@/constants/image';
import TextStroke from './TextStroke';

const ImageTextMask = ({ strokeWidth = 1 }) => {
  return (
    <View style={styles.container}>
      {/* Stroke Layer */}
      {/* <View style={styles.strokeContainer}>
        {generateStrokeLayers(strokeWidth).map((offset, index) => (
          <Text key={index} style={[styles.strokeText, offset]}>
            IMAGE
          </Text>
        ))}
      </View> */}

      {/* Image Mask Layer */}
      <MaskedView
        style={styles.maskContainer}
        maskElement={
            <TextStroke stroke={3} color="red">
            <Text style={styles.maskText}>IMAGE</Text>
            </TextStroke>
            }
      >
        <Image     
          source={imageLink.chestStrip}     
          style={styles.image}
        />
      </MaskedView>
    </View>
  );
};

// Helper function to dynamically create stroke layers
const generateStrokeLayers = (strokeWidth) => {
  const offsets = [];
  for (let i = 1; i <= strokeWidth; i++) {
    offsets.push(
      { left: -i, top: 0 }, // Left
      { left: i, top: 0 }, // Right
      { left: 0, top: -i }, // Top
      { left: 0, top: i }, // Bottom
      { left: -i, top: -i }, // Top-left
      { left: i, top: -i }, // Top-right
      { left: -i, top: i }, // Bottom-left
      { left: i, top: i }, // Bottom-right
    );
  }
  return offsets;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  strokeContainer: {
    position: 'absolute',
  },
  strokeText: {
    position: 'absolute',
    fontSize: 100,
    fontWeight: 'bold',
    color: 'black', // Stroke color
    textAlign: 'center',
  },
  maskContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maskText: {
    fontSize: 100,
    // fontWeight: 'bold',
    // textAlign: 'center',
    color: 'black', // Mask must be black
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover"
  },
});

export default ImageTextMask;
