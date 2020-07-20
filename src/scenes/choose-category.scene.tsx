import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "../components";
import { COLORS, FONTS, LAYOUT } from "../styles/styles";

const ChooseCategory = ({ navigation, route }: any) => {
  const { age } = route.params;
  const onPress = (category: number) => {
    navigation.navigate("ChooseFavorites", { category, age });
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text category="h1" style={styles.categoryTitle}>
        Hangi tarz içerik istiyorsunuz?
      </Text>
      <View style={styles.buttonsContainer}>
        <Button title="TÜMÜ" onPress={() => onPress(2)} />
        <Button title="FİLM" onPress={() => onPress(0)} />
        <Button title="DİZİ" onPress={() => onPress(1)} />
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
    textAlign: "center",
    marginBottom: 20
  },
  buttonsContainer: {
    width: "100%"
  }
});

export default ChooseCategory;
