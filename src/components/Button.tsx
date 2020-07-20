import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "../components/Text";

import { COLORS, FONTS } from "../styles/styles";

const Button = ({ onPress, title, width }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, width]} activeOpacity={0.8}>
      <Text category="p2" style={styles.text}>
        {title}
      </Text>
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
    textAlign: "center"
  }
});

export default Button;
