import { fontFamily } from '@/constants/fontFamily';
import { imageLink } from '@/constants/image';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, ScrollView } from 'react-native';
import { Svg, Text as SvgText, Defs, Filter, FeDropShadow, ClipPath, Image } from 'react-native-svg';

const { width } = Dimensions.get('window');
const NATURE_IMAGE = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05';

export default function SvgEffectsScreen() {
  const [outlineEnabled, setOutlineEnabled] = useState(true);

  const toggleOutline = () => setOutlineEnabled(prev => !prev);

  return (
    <View style={styles.container}>
      {/* Common Definitions */}
      {/* <Svg height="0">
        <Defs>
          <Filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <FeDropShadow dx="6" dy="6" stdDeviation="5" floodColor="rgba(0,0,0,0.7)" />
          </Filter>
        </Defs>
      </Svg> */}

      {/* <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}> */}
        {/* Image Background Text */}
        <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Image Background Text</Text> */}
          <Svg height="70" width={width}>
            {/* First layer: Text with shadow (only when outline enabled) */}
            {outlineEnabled && (
              <SvgText
                fontSize="40"
                // fontWeight="bold"
                fontFamily={fontFamily.ottawa[700]}
                x="51%"
                y="51%"
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="none"
                stroke="black"
                strokeWidth="1"
                filter="url(#shadow)"
              >
                INDIA
              </SvgText>
            )}

            {/* Second layer: The clipped image */}
            <Defs>
              <ClipPath id="imageClip">
                <SvgText
                  fontSize="55"
                  // fontWeight="bold"
                  fontFamily={fontFamily.ottawa[700]}
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="white"
                >
                  INDIA
                </SvgText>
              </ClipPath>
            </Defs>
            <Image
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              href={imageLink.pride2}
              // href={{ uri: NATURE_IMAGE }}
              clipPath="url(#imageClip)"
            />

            {/* Third layer: Text outline */}
            {outlineEnabled && (
              <SvgText
                fontSize="40"
                // fontWeight="bold"
                fontFamily={fontFamily.ottawa[700]}
                x="50%"
                y="50%"
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="none"
                stroke="black"
                strokeWidth="1"
              >
                INDIA
              </SvgText>
            )}
          </Svg>
        </View>

        {/* <TouchableOpacity style={styles.button} onPress={toggleOutline}>
          <Text style={styles.buttonText}>
            {outlineEnabled ? "Disable" : "Enable"} Outline & Shadow
          </Text>
        </TouchableOpacity> */}
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    // paddingTop: 20,
    // paddingBottom: 30,
  },
  section: {
    // marginBottom: 30,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    minWidth: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});