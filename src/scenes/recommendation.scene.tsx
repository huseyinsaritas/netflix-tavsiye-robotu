import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ActivityIndicator } from "react-native";
import IMoovie from "../../model/IMoovie";
import FILMS from "../data/films100.json";
import ThumbsUp from "../components/ThumbsUp";
import ThumbsDown from "../components/ThumbsDown";
import { COLORS, FONTS, LAYOUT } from "../styles/styles";

const axios = require("axios");

const Recommendation = ({ navigation, route }: any) => {
  const [moovie, setMoovie] = useState<IMoovie>();
  const [loading, setLoading] = useState<boolean>(true);

  const { category, ageRange, selectedFilms } = route.params;

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      return axios.get(`http://localhost:3000/recommendations?age=${ageRange}&category=${category}&films=${selectedFilms}`).then((res: any) => {
        setLoading(false);
        setMoovie(res.data.randomFilm);
      });
    }
    return () => {
      unmounted = true;
    };
  }, []);

  const recommedationClick = (filmId?: string, thumbs?: boolean) => {
    if (thumbs) {
      navigation.navigate("FilmDetail", { filmId, thumbs });
    } else {
      setLoading(true);
      return axios.post(`http://localhost:3000/recommendations?age=${ageRange}&category=${category}&films=${selectedFilms}`, { thumbs }).then((res: any) => {
        setLoading(false);
        setMoovie(res.data.randomFilm);
      });
    }
  };

  const RecommendedFilm = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.recommendedFilm}
          onPress={() => {
            recommedationClick(moovie?.id, true);
          }}
        >
          <Image style={styles.recommendedFilmPoster} source={{ uri: moovie?.image }} />
        </TouchableOpacity>
        <Text style={styles.recommendedFilmHeader}>{moovie?.title}</Text>
        <View style={styles.recommendedFilmContent}>
          <Text style={[styles.recommendedInfo, styles.recommendedFilmInfo]}>{moovie?.year}</Text>
          <View style={styles.recommendedInfo}>
            <Text style={styles.recommendedFilmMaturity}>{moovie?.maturity.trim()}</Text>
          </View>
          <Text style={[styles.recommendedInfo, styles.recommendedFilmInfo]}>{moovie?.duration}</Text>
        </View>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <View style={[styles.loadingContainer, styles.loadingHorizontal]}>
          <ActivityIndicator size="large" color={COLORS.red} />
        </View>
      ) : (
        <View style={[LAYOUT, styles.layout]}>
          <Text style={styles.pageTitle}>Tavsiye Edilen Film</Text>
          <RecommendedFilm />
          <View style={styles.thumbs}>
            <ThumbsDown
              width="88px"
              onPress={() => {
                recommedationClick(moovie?.id, false);
              }}
            />
            <ThumbsUp
              width="88px"
              onPress={() => {
                recommedationClick(moovie?.id, true);
              }}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 20,
    paddingTop: 80,
    height: Dimensions.get("screen").height
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
  recommendedFilm: {
    alignItems: "center",
    justifyContent: "center"
  },
  recommendedFilmPoster: {
    borderRadius: 6,
    marginTop: 20,
    marginBottom: 20,
    overflow: "hidden",
    width: 200,
    height: 300
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
    margin: 0,
    alignItems: "center"
  },
  recommendedFilmInfo: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400
  },
  recommendedInfo: {
    marginTop: 10,
    marginBottom: 6,
    borderColor: COLORS.white,
    borderRightWidth: 1,
    marginRight: 9,
    paddingRight: 11
  },
  recommendedFilmMaturity: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    paddingRight: 5,
    paddingLeft: 5,
    borderWidth: 1
  },
  thumbs: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 80
  },
  loadingContainer: {
    backgroundColor: COLORS.black,
    flex: 1,
    justifyContent: "center"
  },
  loadingHorizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Recommendation;
