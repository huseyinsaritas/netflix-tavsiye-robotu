import React from "react";
import { StyleSheet, Text as RNText } from "react-native";

import { COLORS, FONTS } from "../styles/styles";

const Text = ({ children, category, style }: any) => {
  let categoryStyle = {};
  switch (category) {
    case "h1":
      categoryStyle = styles.categoryH1;
      break;
    case "h2":
      categoryStyle = styles.categoryH2;
      break;
    case "h3":
      categoryStyle = styles.categoryH3;
      break;
    case "h4":
      categoryStyle = styles.categoryH4;
      break;
    case "h5":
      categoryStyle = styles.categoryH5;
      break;
    case "h6":
      categoryStyle = styles.categoryH6;
      break;
    case "p1":
      categoryStyle = styles.categoryP1;
      break;
    case "p2":
      categoryStyle = styles.categoryP2;
      break;
  }

  return <RNText style={[styles.default, categoryStyle, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  default: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONTS.cabin400
  },
  categoryH1: {
    fontSize: 32,
    fontFamily: FONTS.cabin700
  },
  categoryH2: {
    fontSize: 28,
    fontFamily: FONTS.cabin700
  },
  categoryH3: {
    fontSize: 24,
    fontFamily: FONTS.cabin700
  },
  categoryH4: {
    fontSize: 20,
    fontFamily: FONTS.cabin700
  },
  categoryH5: {
    fontSize: 14,
    fontFamily: FONTS.cabin700
  },
  categoryH6: {
    fontSize: 16,
    fontFamily: FONTS.cabin400
  },
  categoryP1: {
    fontSize: 15,
    fontFamily: FONTS.bungee
  },
  categoryP2: {
    fontSize: 13,
    fontFamily: FONTS.bungee
  }
});

export default Text;
