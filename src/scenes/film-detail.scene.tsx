import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking } from "react-native";
import Button from "../components/Button";
import FILMS from "../data/films100.json";
import { COLORS, FONTS, LAYOUT } from "../styles/styles";

const FilmDetail = ({ navigation, route }: any) => {
  const { filmId } = route.params;
  const catchFilm = FILMS.find(film => film.id === filmId);
  console.log("aaa", catchFilm);
  const onPress = () => {
    Linking.openURL("https://www.netflix.com/tr-en/title/" + filmId);
  };
  return (
    <View style={[LAYOUT, styles.layout]}>
      <View style={styles.moovie}>
        <Image style={styles.moovieImage} resizeMode="cover" source={{ uri: FILMS[0].image }} />
      </View>
      <Text style={styles.moovieTitle}>{FILMS[0].title}</Text>
      <View style={styles.detailContent}>
        <Text style={styles.info}>{FILMS[0].year}</Text>
        <Text style={styles.info}>{FILMS[0].maturity}</Text>
        <Text style={styles.info}>{FILMS[0].duration}</Text>
      </View>
      <Text style={styles.moovieDescription}>{FILMS[0].synopsis}</Text>
      <View style={styles.detailHeaders}>
        <Text style={styles.headerInfo}>Kategoriler: {FILMS[0].genres.join(", ")}</Text>
        <Text style={styles.headerInfo}>Başroldekiler: {FILMS[0].starring.join(", ")}</Text>
      </View>
      <View style={styles.watchNetflix}>
        <Button title="NETFLIX'TE IZLE" style={styles.detailButton} onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 20,
    paddingTop: 80
  },
  moovie: {
    borderRadius: 6,
    margin: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  moovieImage: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
    borderRadius: 6
  },
  info: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    marginTop: 6,
    marginBottom: 6,
    marginRight: 6,
    borderWidth: 3
  },
  moovieDescription: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    margin: 6
  },
  headerInfo: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    margin: 6
  },
  moovieTitle: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    fontSize: 32,
    margin: 6
  },
  detailContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 6,
    alignItems: "center"
  },
  detailButton: {
    position: "absolute",
    bottom: 0
  },
  detailHeaders: {
    alignItems: "flex-start",
    justifyContent: "space-evenly"
  },
  watchNetflix: {
    textAlign: "center",
    position: "absolute",
    bottom: 10,
    left: 1,
    right: 1
  }
});

export default FilmDetail;
