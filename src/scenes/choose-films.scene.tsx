import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import { Button } from "../components/button.component";

export default function ChooseFilms({ navigation }: any) {

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={{ color: '#fff' }}>Netflix Tavsiye Robotu</Text>
      <View style={styles.buttonsContainer}>
        <Button title="13-18" />
        <Button title="18-25" />
        <Button title="25-35" />
        <Button title="35+" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
