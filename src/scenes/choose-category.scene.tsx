import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import Button from "../components/Button";

const ChooseCategory = ({ navigation }: any) => {
  const onPress = (category: string) => {
    navigation.navigate("ChooseFavorites");
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={styles.categoryTitle}>Kategori seçin</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Film" onPress={() => onPress("Moovie")} />
        <Button title="Dizi" onPress={() => onPress("Serie")} />
        <Button title="Belgesel" onPress={() => onPress("Documentary")} />
        <Button title="Hepsi" onPress={() => onPress("All")} />
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
    textAlign: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  }
});

export default ChooseCategory;
