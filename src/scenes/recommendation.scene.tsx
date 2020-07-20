import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Dimensions, ActivityIndicator } from "react-native";
import { FilmService, VoteService } from "../services";
import { IFilm, FilmMaturityInfo } from "../models";
import { ThumbsUp, ThumbsDown, Button, Text } from "../components";
import { COLORS, FONTS, LAYOUT } from "../styles/styles";

const Recommendation = ({ navigation, route }: any) => {
  const [recommendedFilm, setRecommendedFilm] = useState<IFilm>();
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(true);

  const { category, age, favorites } = route.params;

  useEffect(() => {
    (async () => {
      const film = await FilmService.GetFilmRecommend(age, category, favorites);
      if (film.success) {
        if (film.data) {
          setRecommendedFilm(film.data);
          setNotFound(false);
        } else {
          setRecommendedFilm(undefined);
          setNotFound(true);
        }
      } else {
        setNotFound(true);
      }
      setLoading(false);
    })();
  }, []);

  const sendVote = (filmId: number, thumbs: boolean) => {
    // let filmIds: Array<number> = [filmId];
    (async () => {
      const vote = await VoteService.SendVote(age, category, favorites, filmId, thumbs, [filmId]);
      if (vote.success) {
        if (vote.data.film) {
          if (!thumbs) setRecommendedFilm(vote.data.film);
          setNotFound(false);
        } else {
          setRecommendedFilm(undefined);
          setNotFound(true);
        }
      } else {
        setNotFound(true);
      }
      setLoading(false);
    })();
  };

  const recommedationClick = (filmId: number, vote: boolean) => {
    if (vote) {
      navigation.navigate("FilmDetail", { film: recommendedFilm });
      sendVote(filmId, vote);
    } else {
      setLoading(true);
      sendVote(filmId, vote);
    }
  };

  const RecommendedFilm = () => {
    return (
      <>
        {!!recommendedFilm && (
          <>
            <TouchableOpacity style={styles.recommendedFilm} onPress={() => recommedationClick(recommendedFilm.id, true)}>
              <Image style={styles.recommendedFilmPoster} source={{ uri: recommendedFilm.image }} />
            </TouchableOpacity>
            <Text category="h2" style={styles.recommendedFilmHeader}>
              {recommendedFilm.title}
            </Text>
            <View style={styles.recommendedFilmContent}>
              <Text style={styles.recommendedInfo}>{recommendedFilm.year}</Text>
              <View style={styles.recommendedInfo}>
                <Text style={styles.recommendedFilmMaturity}>{FilmMaturityInfo(recommendedFilm.maturity)}</Text>
              </View>
              <Text style={styles.recommendedInfo}>{recommendedFilm.duration}</Text>
            </View>
          </>
        )}
      </>
    );
  };

  return (
    <>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={COLORS.red} />
        </View>
      )}
      {!loading && !notFound && !!recommendedFilm && (
        <View style={[LAYOUT, styles.layout]}>
          <Text category="h1" style={styles.pageTitle}>
            Tavsiye Edilen Film
          </Text>
          <RecommendedFilm />
          <View style={styles.thumbs}>
            <ThumbsDown width="88px" onPress={() => recommedationClick(recommendedFilm.id, false)} />
            <ThumbsUp width="88px" onPress={() => recommedationClick(recommendedFilm.id, true)} />
          </View>
        </View>
      )}
      {!loading && notFound && (
        <View style={[LAYOUT, styles.layout]}>
          <Text category="h1" style={styles.notFoundTitle}>
            Dünyanın sonu değil!
          </Text>
          <Text category="h6" style={styles.notFoundContent}>
            Sizin için bir öneri bulamadık. Dilerseniz geri dönüp favori filmlerinizi değiştirip tekrar şansınızı deneyebilirsiniz.
          </Text>
          <Button title="GERİ DöN" style={styles.goBackButton} onPress={() => navigation.navigate("ChooseFavorites")} />
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
    // color: COLORS.white,
    // fontFamily: FONTS.cabin700,
    // fontSize: 32,
    textAlign: "center"
  },
  notFoundTitle: {
    // color: COLORS.white,
    // fontFamily: FONTS.cabin700,
    // fontSize: 32,
    textAlign: "center",
    marginTop: "50%"
  },
  notFoundContent: {
    // color: COLORS.white,
    // fontFamily: FONTS.cabin400,
    // fontSize: 16,
    textAlign: "center",
    margin: 30
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
    // color: COLORS.white,
    // fontFamily: FONTS.cabin400,
    // fontSize: 32,
    margin: 6,
    textAlign: "center"
  },
  recommendedFilmContent: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 0,
    alignItems: "center"
  },
  // recommendedFilmInfo: {
  //   color: COLORS.white,
  //   fontFamily: FONTS.cabin400
  // },
  recommendedInfo: {
    marginTop: 10,
    marginBottom: 6,
    borderColor: COLORS.white,
    borderRightWidth: 1,
    marginRight: 9,
    paddingRight: 11
  },
  recommendedFilmMaturity: {
    // color: COLORS.white,
    // fontFamily: FONTS.cabin400,
    paddingRight: 5,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: COLORS.white
  },
  thumbs: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  loading: {
    backgroundColor: COLORS.black,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    padding: 10
  },
  goBackButton: {
    position: "absolute",
    bottom: 30,
    left: 1,
    right: 1
  }
});

export default Recommendation;
