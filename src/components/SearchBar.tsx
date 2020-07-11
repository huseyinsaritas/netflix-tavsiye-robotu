import React from "react";
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
      <TextInput style={styles.searchText} onChangeText={onChangeText} placeholder={placeholder} value={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#333",
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 6,
    height: 36,
    width: "100%",
    overflow: "hidden",
    marginTop: 10
  },
  searchText: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontFamily: FONTS.cabin400,
    color: COLORS.white,
    letterSpacing: 1
  }
});

export default SearchBar;
