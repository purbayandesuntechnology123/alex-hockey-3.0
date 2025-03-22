import { getFontChestImagePatterUrl, getFontFamily } from '@/constants/commonFunction';
import { fontFamily } from '@/constants/fontFamily';
import { imageLink } from '@/constants/image';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Svg, Text as SvgText, Defs, ClipPath, Image } from 'react-native-svg';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const SvgEffectsScreen = ({ stroke, title, isOuterLine, fontfamilyName, fontSize=10, patterName }) => {

  const { tshirtData, tshirtId } = useSelector(
    (state) => state.tshirtStoreValue
  );
  const [outlineEnabled, setOutlineEnabled] = useState(isOuterLine);
  const [currentTitle, setCurrentTitle] = useState(title);

  const selectedItem = tshirtData.find((item) => item.id === tshirtId);

  // Sync outlineEnabled state with isOuterLine prop
  useEffect(() => {
    setOutlineEnabled(isOuterLine);
  }, [isOuterLine]);

  // Sync currentTitle with title prop
  useEffect(() => {
    setCurrentTitle(selectedItem?.tshirtFrontOption?.frontChest?.wordmark?.text);
  }, [selectedItem?.tshirtFrontOption?.frontChest?.wordmark?.text]);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Svg height="70" width={width}>
          {/* First layer: Text with shadow (only when outline enabled) */}
          {outlineEnabled && (
            <SvgText
              fontSize={fontSize}
              fontFamily={getFontFamily(fontfamilyName)}
              x="51%"
              y="51%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="none"
              stroke="black"
              strokeWidth={stroke}
            >
              {currentTitle}
            </SvgText>
          )}

          {/* Second layer: The clipped image */}
          <Defs key={`defs-${currentTitle}`}>
            <ClipPath id="imageClip" key={`clip-${currentTitle}`}>
              <SvgText
                fontSize={fontSize}
                fontFamily={getFontFamily(fontfamilyName)}
                x="50%"
                y="50%"
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="white"
              >
                {currentTitle}
              </SvgText>
            </ClipPath>
          </Defs>
          <Image
            key={`image-${currentTitle}`}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            href={getFontChestImagePatterUrl(patterName)}
            clipPath="url(#imageClip)"
          />

          {/* Third layer: Text outline */}
          {outlineEnabled && (
            <SvgText
              fontSize={fontSize}
              fontFamily={getFontFamily(fontfamilyName)}
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="none"
              stroke="black"
              strokeWidth={stroke}
            >
              {currentTitle}
            </SvgText>
          )}
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
  },
  section: {},
});

export default SvgEffectsScreen;
