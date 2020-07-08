import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native";

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import Button from "../components/Button";
import FILMS from "../data/films100.json";

const Recommendation = ({ navigation }: any) => {
  const recommedationClick = (filmId: string) => {
    navigation.navigate("FilmDetail", { filmId });
  };

  const RecommendedFilm = ({ filmId }: any) => {
    return (
      <TouchableOpacity style={styles.recommendedFilm} onPress={() => recommedationClick(filmId)}>
        <Image style={styles.recommendedFilmPoster} source={{ uri: "https://i.pinimg.com/736x/7c/0c/f2/7c0cf26a8a1e7b9fe8a1e393f28177f1.jpg" }} />
      </TouchableOpacity>
    );
  };

  const FilmItem = ({ film }: any) => {
    return (
      <TouchableOpacity style={styles.film} onPress={() => recommedationClick(film.id)} activeOpacity={0.8}>
        <Image style={styles.filmPoster} source={{ uri: "https://i.pinimg.com/736x/7c/0c/f2/7c0cf26a8a1e7b9fe8a1e393f28177f1.jpg" }} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={styles.pageTitle}>Tavsiye Edilen Film</Text>
      <RecommendedFilm style={styles.recommendedMovie} filmId={81251947} />
      <Text style={styles.similarMovies}>BENZERLERİ</Text>
      <FlatList data={FILMS.slice(0, 3)} numColumns={3} renderItem={({ item }) => <FilmItem film={item} />} keyExtractor={item => item.id} />
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
  recommendedMovie: {
    margin: 10
  },
  similarMovies: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    marginTop: 20,
    marginLeft: 6,
    marginBottom: 6
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
    borderRadius: 6,
    margin: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  recommendedFilmPoster: {
    borderColor: "#eee",
    borderWidth: 2,
    width: 200,
    height: 260,
    resizeMode: "cover",
    borderRadius: 6
  }
});

export default Recommendation;
