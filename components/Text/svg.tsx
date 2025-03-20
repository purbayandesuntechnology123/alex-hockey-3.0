import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Svg, Text, Defs, ClipPath, Image } from 'react-native-svg';

const { width } = Dimensions.get('window');
const NATURE_IMAGE = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05';
// const NATURE_IMAGE = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05';

export default function SvgMaskScreen() {
  return (
    <View style={styles.container}>
      <Svg height="150" width={width}>
        <Defs>
          <ClipPath id="clip">
            <Text
              fontSize="80"
              fontWeight="bold"
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              NATURE
            </Text>
          </ClipPath>
        </Defs>
        <Image
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          href={{ uri: NATURE_IMAGE }}
          clipPath="url(#clip)"
        />
      </Svg>
      
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          This implementation uses react-native-svg with ClipPath to create the masked text effect.
          The text is defined as a clip path, and the image is clipped to the shape of the text.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 50,
  },
  description: {
    padding: 20,
    marginTop: 30,
  },
  descriptionText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});