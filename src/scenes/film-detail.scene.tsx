import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native";

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import { Button } from "../components/button.component";

import FILMS from "../data/films100.json";

interface IFilmDetail {
  filmId: string;
}

const FilmDetail: React.FC<IFilmDetail> = ({ filmId }) => {
  return (
    <View style={[LAYOUT, styles.layout]}>
      <View style={styles.moovie}>
        <Image style={styles.moovieImage} resizeMode="cover" source={{ uri: "https://i.pinimg.com/736x/7c/0c/f2/7c0cf26a8a1e7b9fe8a1e393f28177f1.jpg" }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 20,
    paddingTop: 80
  },
  pageTitle: {
    color: COLORS.white,
    fontFamily: FONTS.cabin700,
    fontSize: 32,
    textAlign: "center"
  },
  moovie: {
    borderRadius: 6,
    margin: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  moovieImage: {
    width: 200,
    height: 260,
    resizeMode: "cover",
    borderRadius: 6
  }
});

export default FilmDetail;
