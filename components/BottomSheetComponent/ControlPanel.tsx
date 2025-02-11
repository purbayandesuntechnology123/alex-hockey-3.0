import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const ControlPanel = () => {
  const [horizontalPosition, setHorizontalPosition] = useState(0);
  const [verticalPosition, setVerticalPosition] = useState(0);
  const [scale, setScale] = useState(1.0);

  return (
    <View style={styles.container}>
      {/* Horizontal Position */}
      <View style={styles.controlRow}>
        <Text style={styles.label}>Horizontal Position</Text>
        <Slider
          style={styles.slider}
          minimumValue={-100}
          maximumValue={100}
          value={horizontalPosition}
          onValueChange={setHorizontalPosition}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#999999"
        />
        <TextInput
          style={styles.input}
          value={horizontalPosition.toFixed(1)}
          editable={false}
        />
      </View>

      {/* Vertical Position */}
      <View style={styles.controlRow}>
        <Text style={styles.label}>Vertical Position</Text>
        <Slider
          style={styles.slider}
          minimumValue={-100}
          maximumValue={100}
          value={verticalPosition}
          onValueChange={setVerticalPosition}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#999999"
        />
        <TextInput
          style={styles.input}
          value={verticalPosition.toFixed(1)}
          editable={false}
        />
      </View>

      {/* Scale */}
      <View style={styles.controlRow}>
        <Text style={styles.label}>Scale</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.5}
          maximumValue={2.0}
          value={scale}
          onValueChange={setScale}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#999999"
        />
        <TextInput
          style={styles.input}
          value={scale.toFixed(2)}
          editable={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A4A4A',
    padding: 16,
    borderRadius: 12,
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    color: 'white',
    width: 140,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    width: 50,
    textAlign: 'center',
    borderRadius: 6,
  },
});

export default ControlPanel;
