import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ActivityIndicator } from "react-native";
import { FilmService, VoteService } from "../services";
import { IMoovie } from "../Model";
import { ThumbsUp, ThumbsDown } from "../components";
import { COLORS, FONTS, LAYOUT } from "../styles/styles";

const Recommendation = ({ navigation, route }: any) => {
  const [recommendedFilm, setRecommendedFilm] = useState<IMoovie>();
  const [loading, setLoading] = useState<boolean>(true);

  const { category, age, films } = route.params;

  useEffect(() => {
    (async () => {
      const film = await FilmService.GetFilmRecommend(age, category, films);
      if (film.success) {
        setLoading(false);
        setRecommendedFilm(film.data);
      } else {
        //error
      }
    })();
  }, []);

  const sendVote = (filmId: number, thumbs: boolean) => {
    let filmIds: Array<number> = [filmId];
    (async () => {
      const vote = await VoteService.SendVote(age, category, films, filmIds, thumbs);
      if (vote.success) {
        if (!thumbs) setRecommendedFilm(vote.data);
        setLoading(false);
      } else {
        //error
      }
    })();
  };

  const recommedationClick = (filmId: number, vote: boolean) => {
    if (vote) {
      navigation.navigate("FilmDetail", { filmId });
      sendVote(filmId, vote);
    } else {
      setLoading(true);
      sendVote(filmId, vote);
    }
  };

  const RecommendedFilm = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.recommendedFilm}
          onPress={() => {
            if (recommendedFilm) recommedationClick(recommendedFilm?.id, true);
          }}
        >
          <Image style={styles.recommendedFilmPoster} source={{ uri: recommendedFilm?.image }} />
        </TouchableOpacity>
        <Text style={styles.recommendedFilmHeader}>{recommendedFilm?.title}</Text>
        <View style={styles.recommendedFilmContent}>
          <Text style={[styles.recommendedInfo, styles.recommendedFilmInfo]}>{recommendedFilm?.year}</Text>
          <View style={styles.recommendedInfo}>
            <Text style={styles.recommendedFilmMaturity}>{recommendedFilm?.maturity}</Text>
          </View>
          <Text style={[styles.recommendedInfo, styles.recommendedFilmInfo]}>{recommendedFilm?.duration}</Text>
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
                if (recommendedFilm) recommedationClick(recommendedFilm?.id, false);
              }}
            />
            <ThumbsUp
              width="88px"
              onPress={() => {
                if (recommendedFilm) recommedationClick(recommendedFilm?.id, true);
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
