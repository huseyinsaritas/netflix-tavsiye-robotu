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
    var randomFilm = FILMS[Math.floor(Math.random() * FILMS.length)];
    return (
      <TouchableOpacity style={styles.recommendedFilm} onPress={() => recommedationClick(filmId)}>
        <Image style={styles.recommendedFilmPoster} source={{ uri: randomFilm.image }} />
      </TouchableOpacity>
    );
  };

  const FilmItem = ({ film }: any) => {
    return (
      <TouchableOpacity style={styles.film} onPress={() => recommedationClick(film.id)} activeOpacity={0.8}>
        <Image style={styles.filmPoster} source={{ uri: film.image }} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={styles.pageTitle}>Tavsiye Edilen Film</Text>
      <RecommendedFilm style={styles.recommendedMovie} filmId={81251947} />
      <View style={styles.similarMoovies}>
        <Text style={styles.similarMoviesText}>BENZERLERİ</Text>
        <FlatList data={FILMS.slice(0, 3)} numColumns={3} renderItem={({ item }) => <FilmItem film={item} />} keyExtractor={item => item.id} />
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
  recommendedMovie: {
    margin: 10
  },
  similarMoovies: {
    marginTop: 20
  },
  similarMoviesText: {
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
    borderRadius: 5,
    margin: 6
  },
  filmSelected: {
    borderColor: COLORS.red
  },
  filmPoster: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
    borderRadius: 6,
    overflow: "hidden"
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
