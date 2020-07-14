import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import FILMS from "../data/films100.json";
import ThumbsUp from "../components/ThumbsUp";
import ThumbsDown from "../components/ThumbsDown";
import { COLORS, FONTS, LAYOUT } from "../styles/styles";

const axios = require("axios");

interface IMoovie {
  id: string;
  title: string;
  type: string;
  duration: string;
  genres: Array<string>;
  image: string;
  maturity: string;
  moods: Array<string>;
  starring: Array<string>;
  synopsis: string;
  year: string;
}

const Recommendation = ({ navigation }: any) => {
  const [recommendedFilm, setRecommendedFilm] = useState<IMoovie>();

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      axios.get("http://localhost:3000/recommendations").then((res: any) => {
        setRecommendedFilm(res.data.randomFilm);
      });
    }
    return () => {
      unmounted = true;
    };
  }, []);

  console.log("filmm", recommendedFilm);

  const recommedationClick = (filmId?: string, thumbs?: boolean) => {
    navigation.navigate("FilmDetail", { filmId, thumbs });
  };

  const thumbsDownClick = (filmId?: string, thumbs?: boolean) => {
    axios.get("http://localhost:3000/recommendations").then((res: any) => {
      setRecommendedFilm(res.data.randomFilm);
    });
  };

  // let randomFilm = FILMS[Math.floor(Math.random() * FILMS.length)];

  const RecommendedFilm = () => {
    return (
      <>
        <TouchableOpacity style={styles.recommendedFilm} onPress={() => recommedationClick(recommendedFilm?.id, undefined)}>
          <Image style={styles.recommendedFilmPoster} source={{ uri: recommendedFilm?.image }} />
        </TouchableOpacity>
        <Text style={styles.recommendedFilmHeader}>{recommendedFilm?.title}</Text>
        <View style={styles.recommendedFilmContent}>
          <Text style={[styles.recommendedInfo, styles.recommendedFilmInfo]}>{recommendedFilm?.year}</Text>
          <View style={styles.recommendedInfo}>
            <Text style={styles.recommendedFilmMaturity}>{recommendedFilm?.maturity.trim()}</Text>
          </View>
          <Text style={[styles.recommendedInfo, styles.recommendedFilmInfo]}>{recommendedFilm?.duration}</Text>
        </View>
      </>
    );
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={styles.pageTitle}>Tavsiye Edilen Film</Text>
      <RecommendedFilm />
      <View style={styles.thumbs}>
        <ThumbsDown
          width="88px"
          onPress={() => {
            thumbsDownClick(undefined, false);
          }}
        />
        <ThumbsUp
          width="88px"
          onPress={() => {
            recommedationClick(recommendedFilm?.id, true);
          }}
        />
      </View>
    </View>
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
  }
});

export default Recommendation;
