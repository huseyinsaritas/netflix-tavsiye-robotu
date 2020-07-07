import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import { Button } from "../components/button.component";

export default function ChooseAgeRange({ navigation }: any) {

  const onPress = (ageRange: number) => {
    navigation.navigate('ChooseFavorites')
  }

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={{ color: '#fff' }}>Netflix Tavsiye Robotu</Text>
      <View style={styles.buttonsContainer}>
        <Button title="13-18" onPress={() => onPress(0)} />
        <Button title="18-25" onPress={() => onPress(1)} />
        <Button title="25-35" onPress={() => onPress(2)} />
        <Button title="35+" onPress={() => onPress(3)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
