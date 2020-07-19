import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import Button from "../components/Button";

const ChooseCategory = ({ navigation, route }: any) => {
  const { age } = route.params;
  const onPress = (category: number) => {
    navigation.navigate("ChooseFavorites", { category, age });
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={styles.categoryTitle}>Hangi tarz içerik istiyorsunuz?</Text>
      <View style={styles.buttonsContainer}>
        <Button title="FİLM" onPress={() => onPress(0)} />
        <Button title="DİZİ" onPress={() => onPress(1)} />
        <Button title="TÜMÜ" onPress={() => onPress(2)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  categoryTitle: {
    color: COLORS.white,
    fontFamily: FONTS.cabin700,
    fontSize: 32,
    textAlign: "center",
    marginBottom: 20
  },
  buttonsContainer: {
    width: "100%"
  }
});

export default ChooseCategory;
