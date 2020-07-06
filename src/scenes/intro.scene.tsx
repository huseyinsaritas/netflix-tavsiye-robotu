import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import { Mascot } from "../components/mascot.component";
import { Button } from "../components/button.component";

export default function Intro({ navigation }: any) {

  const onPress = () => {
    navigation.navigate('ChooseFilms');
  }

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Mascot width={100} />
      <Text style={styles.text}>Netflix Tavsiye Robotu</Text>
      <Button title="Go on" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    fontSize: 44,
    color: COLORS.red,
    fontFamily: FONTS.bungee,
    textAlign: 'center'
  }
});
