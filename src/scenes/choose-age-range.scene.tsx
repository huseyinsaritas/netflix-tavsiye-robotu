import React from "react";
import { StyleSheet, View } from "react-native";
import { LAYOUT } from "../styles/styles";
import { Button, Text } from "../components";

const ChooseAgeRange = ({ navigation }: any) => {
  const onPress = (age: number) => {
    navigation.navigate("ChooseCategory", { age });
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text category="h1" style={styles.ageRangeTitle}>
        Yaş aralığınız?
      </Text>
      <View style={styles.buttonsContainer}>
        <Button title="13-" onPress={() => onPress(0)} />
        <Button title="13-18" onPress={() => onPress(1)} />
        <Button title="18-25" onPress={() => onPress(2)} />
        <Button title="25+" onPress={() => onPress(3)} />
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
  ageRangeTitle: {
    // color: COLORS.white,
    // fontFamily: FONTS.cabin700,
    // fontSize: 32,
    textAlign: "center",
    marginBottom: 20
  },
  buttonsContainer: {
    width: "100%"
  }
});

export default ChooseAgeRange;
