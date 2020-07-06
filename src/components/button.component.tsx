import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { COLORS, FONTS } from "../styles/styles";

export function Button({ onPress, title }: any) {

  return (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.red,
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingVertical: 8
    },
    text: {
        fontSize: 13,
        color: COLORS.white,
        fontFamily: FONTS.bungee
    }
});