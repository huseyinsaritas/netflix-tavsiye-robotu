import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { COLORS, FONTS } from "../styles/styles";

interface ISearchBar {
  value: string | number;
  onChangeText: ((text: string) => void) | undefined;
  placeholder: string;
}

const SearchBar: React.FC<ISearchBar> = ({ value, onChangeText, placeholder }: any) => {
  return (
    <View style={styles.searchBar}>
      <TextInput style={styles.searchText} onChangeText={onChangeText} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    position: "relative",
    cursor: "text",
    display: "flex",
    fontSize: 16,
    alignItems: "center",
    color: COLORS.white,
    backgroundColor: COLORS.white,
    fontFamily: FONTS.cabin400,
    lineHeight: 32,
    borderRadius: 6,
    height: 32,
    width: "100%",
    overflow: "hidden",
    marginTop: 10
  },
  searchText: {
    color: COLORS.black,
    width: " 100%",
    height: 32,
    margin: 0,
    minWidth: 0,
    padding: 8
  }
});

export default SearchBar;
