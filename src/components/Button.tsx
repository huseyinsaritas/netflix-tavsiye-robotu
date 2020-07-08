import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { COLORS, FONTS } from "../styles/styles";

const Button = ({ onPress, title, width }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, width]} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.red,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 8,
    margin: 3
  },
  text: {
    fontSize: 13,
    color: COLORS.white,
    fontFamily: FONTS.bungee,
    textAlign: "center"
  }
});

export default Button;
