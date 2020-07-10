import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground } from "react-native";

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import Button from "../components/Button";
import FILMS from "../data/films100.json";
import ThumbsUp from "../components/ThumbsUp";
import ThumbsDown from "../components/ThumbsDown";

const Recommendation = ({ navigation }: any) => {
  const recommedationClick = (filmId: string) => {
    navigation.navigate("FilmDetail", { filmId });
  };

  let randomFilm = FILMS[Math.floor(Math.random() * FILMS.length)];
  const RecommendedFilm = () => {
    return (
      <>
        <TouchableOpacity style={styles.recommendedFilm} onPress={() => recommedationClick(randomFilm.id)}>
          <ImageBackground style={styles.recommendedFilmPoster} source={{ uri: randomFilm.image }}>
            <Text style={styles.recommendedFilmTitle}>{randomFilm.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <Text style={styles.recommendedFilmHeader}>{randomFilm.title}</Text>
        <View style={styles.recommendedFilmContent}>
          <Text style={styles.recommendedFilmInfo}>{randomFilm.year}</Text>
          <Text style={styles.recommendedFilmInfo}>{randomFilm.maturity}</Text>
          <Text style={styles.recommendedFilmInfo}>{randomFilm.duration}</Text>
        </View>
      </>
    );
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={styles.pageTitle}>Tavsiye Edilen Film</Text>
      <RecommendedFilm />
      <View style={styles.thumbs}>
        <ThumbsUp
          width="32px"
          onPress={() => {
            recommedationClick(randomFilm.id);
          }}
        />
        <ThumbsDown width="32px" onPress={() => {}} />
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
  recommendedFilmTitle: {
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
  },
  recommendedFilmHeader: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    fontSize: 32,
    margin: 6,
    textAlign: "center"
  },
  recommendedFilmContent: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 6,
    alignItems: "center"
  },
  recommendedFilmInfo: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    marginTop: 6,
    marginBottom: 6,
    marginRight: 6,
    borderWidth: 3
  },
  thumbs: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20
  }
});

export default Recommendation;
