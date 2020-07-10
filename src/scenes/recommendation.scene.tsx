import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground } from "react-native";

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
        <ImageBackground style={styles.recommendedFilmPoster} source={{ uri: randomFilm.image }}>
          <Text style={styles.filmTitle}>{randomFilm.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const FilmItem = ({ film }: any) => {
    return (
      <TouchableOpacity style={styles.film} onPress={() => recommedationClick(film.id)} activeOpacity={0.8}>
        <ImageBackground style={styles.filmPoster} source={{ uri: film.image }}>
          <Text style={styles.filmTitle}>{film.title}</Text>
        </ImageBackground>
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
    marginTop: 10
  },
  similarMoviesText: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    textAlign: "center",
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
  filmTitle: {
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    bottom: 0,
    left: 2,
    fontSize: 12,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  filmSelected: {
    borderColor: COLORS.red
  },
  filmPoster: {
    width: "100%",
    height: 160,
    // resizeMode: "cover",
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
    alignItems: "center",
    justifyContent: "center"
  },
  recommendedFilmPoster: {
    borderColor: COLORS.red,
    borderWidth: 3,
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 20,
    overflow: "hidden",
    width: 180,
    height: 260
    // resizeMode: "cover",
  }
});

export default Recommendation;
