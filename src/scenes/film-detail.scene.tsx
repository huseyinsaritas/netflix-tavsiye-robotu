import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Image, Linking } from "react-native";
import { Button, Text, GoBack } from "../components";
import { IFilm, FilmMaturityInfo } from "../models";
import { COLORS, FONTS, LAYOUT } from "../styles/styles";

const FilmDetail = ({ route, navigation }: any) => {
  const film: IFilm = route.params.film;

  const onPress = () => {
    Linking.openURL("https://www.netflix.com/tr-en/title/" + film.netflix_id);
  };
  return (
    <View style={[LAYOUT, styles.layout]}>
      <ScrollView>
        <View style={styles.moovie}>
          <Image style={styles.moovieImage} resizeMode="cover" source={{ uri: film.image }} />
          <GoBack style={styles.goBack} width="30px" onPress={() => navigation.navigate("Recommendation")} />
        </View>
        <Text category="h1" style={styles.moovieTitle}>
          {film.title}
        </Text>
        <View style={styles.detailContent}>
          <Text style={styles.info}>{film.year}</Text>
          <View style={styles.info}>
            <Text style={styles.maturity}>{FilmMaturityInfo(film.maturity)}</Text>
          </View>
          <Text style={styles.info}>{film.duration}</Text>
        </View>
        <Text style={styles.moovieDescription}>{film.synopsis}</Text>
        <View style={styles.detailHeaders}>
          <View style={styles.sortInfoPosition}>
            <Text category="h6" style={styles.sortInfoHeader}>
              Kategoriler:
            </Text>
            <Text style={styles.sortInfo}>{film.genres.join(", ")}</Text>
          </View>
          <View style={styles.sortInfoPosition}>
            <Text category="h6" style={styles.sortInfoHeader}>
              Oyuncular:
            </Text>
            <Text style={styles.sortInfo}>{film.starring.join(", ")}</Text>
          </View>
        </View>
      </ScrollView>
      <Button title="NETFLIX'TE İZLE" style={styles.detailButton} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 20,
    paddingTop: 80
  },
  moovie: {
    position: "relative",
    borderRadius: 6,
    margin: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  moovieImage: {
    width: "100%",
    height: 260,
    // resizeMode: "cover",
    borderRadius: 6
  },
  info: {
    marginTop: 6,
    marginBottom: 6,
    borderColor: COLORS.white,
    borderRightWidth: 1,
    marginRight: 9,
    paddingRight: 11
  },
  // filmInfo: {
  //   color: COLORS.white,
  //   fontFamily: FONTS.cabin400
  // },
  maturity: {
    // color: COLORS.white,
    // fontFamily: FONTS.cabin400,
    paddingRight: 5,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: COLORS.white
  },
  moovieDescription: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    margin: 6
  },
  sortInfoPosition: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  sortInfoHeader: {
    // color: COLORS.white,
    // fontFamily: FONTS.cabin400,
    // fontSize: 16,
    margin: 6
  },
  sortInfo: {
    // color: COLORS.white,
    // fontFamily: FONTS.cabin400,
    // fontSize: 14,
    margin: 6,
    flex: 1
  },
  moovieTitle: {
    // color: COLORS.white,
    // fontFamily: FONTS.cabin400,
    // fontSize: 32,
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
    bottom: 0,
    left: 1,
    right: 1
  },
  detailHeaders: {
    alignItems: "flex-start",
    justifyContent: "space-evenly"
  },

  goBack: {
    position: "absolute",
    top: 2,
    left: 2
  }
});

export default FilmDetail;
