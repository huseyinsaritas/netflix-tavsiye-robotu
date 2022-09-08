import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Mascot, Button } from "../components";
import { COLORS, FONTS, LAYOUT } from "../styles/styles";

const Intro = ({ navigation }: any) => {
  const onPress = () => {
    navigation.navigate("ChooseAgeRange");
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Mascot width={100} />
      <Text style={styles.text}>FILM TAVSİYE ROBOTU</Text>
      <Button title="Başla" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 44,
    color: COLORS.red,
    fontFamily: FONTS.bungee,
    textAlign: "center",
  },
});
export default Intro;
