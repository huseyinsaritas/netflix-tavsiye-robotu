import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native";

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import { Button } from "../components/button.component";

import FILMS from "../data/films100.json";

interface IRecommendation {
  navigation: any;
  recommedationClick: (filmId: number) => void;
}

const Recommendation: React.FC<IRecommendation> = ({ navigation, recommedationClick }) => {
  const RecommendedFilm = ({ filmId }: any) => {
    return (
      <TouchableOpacity style={styles.recommendedFilm} onPress={() => recommedationClick(filmId)}>
        <Image style={styles.recommendedFilmPoster} source={{ uri: "https://i.pinimg.com/736x/7c/0c/f2/7c0cf26a8a1e7b9fe8a1e393f28177f1.jpg" }} />
      </TouchableOpacity>
    );
  };

  const FilmItem = ({ film }: any) => {
    return (
      <TouchableOpacity style={styles.film} onPress={() => film.id} activeOpacity={0.8}>
        <Image style={styles.filmPoster} source={{ uri: "https://i.pinimg.com/736x/7c/0c/f2/7c0cf26a8a1e7b9fe8a1e393f28177f1.jpg" }} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={styles.pageTitle}>Tavsiye Edilen Film</Text>
      <RecommendedFilm filmId={81251947} />
      <Text style={styles.pageDesc}>Bu filmleri de izleyebilirsiniz.</Text>
      <FlatList data={FILMS} style={styles.films} numColumns={3} renderItem={({ item }) => <FilmItem film={item} />} keyExtractor={item => item.id} />
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
  pageDesc: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    textAlign: "center"
  },
  films: {
    marginTop: 20
  },
  film: {
    position: "relative",
    flex: 1 / 3,
    borderWidth: 3,
    borderColor: "#eee",
    borderRadius: 6,
    margin: 6
  },
  filmSelected: {
    borderColor: COLORS.red
  },
  filmPoster: {
    width: 100,
    height: 160,
    resizeMode: "cover",
    borderRadius: 6
  },
  filmSeletedIcon: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    zIndex: 90
  },
  recommendedFilm: {
    position: "relative",
    flex: 1,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 6,
    margin: 6
  },
  recommendedFilmPoster: {
    width: 100,
    height: 260,
    resizeMode: "cover",
    borderRadius: 6
  }
});

export default Recommendation;
