import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import Button from "../components/Button";

const ChooseCategory = ({ navigation, route }: any) => {
  const { ageRange } = route.params;
  const onPress = (category: string) => {
    navigation.navigate("ChooseFavorites", { category, ageRange });
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={styles.categoryTitle}>Hangi tarz içerik istiyorsunuz?</Text>
      <View style={styles.buttonsContainer}>
        <Button title="FİLM" onPress={() => onPress("Moovie")} />
        <Button title="DİZİ" onPress={() => onPress("Serie")} />
        <Button title="BELGESEL" onPress={() => onPress("Documentary")} />
        <Button title="TÜMÜ" onPress={() => onPress("All")} />
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
