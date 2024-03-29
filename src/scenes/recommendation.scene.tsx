import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Dimensions, ActivityIndicator } from "react-native";
import { FilmService, VoteService } from "../services";
import { IFilm, FilmMaturityInfo } from "../models";
import { ThumbsUp, ThumbsDown, Button, Text } from "../components";
import { COLORS, LAYOUT } from "../styles/styles";

interface IVote {
  vote: boolean,
  excludes: number[]
}

const Recommendation = ({ navigation, route }: any) => {
  const [recommendedFilm, setRecommendedFilm] = useState<IFilm | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [vote, setVote] = useState<IVote>({ vote: false, excludes: [] });

  const { category, age, favorites } = route.params;

  useEffect(() => {
    (async () => {
      const film = await FilmService.GetFilmRecommend(age, category, favorites);
      if (film.success) {
        if (film.data) {
          setRecommendedFilm(film.data);
          setNotFound(false);
        } else {
          setRecommendedFilm(null);
          setNotFound(true);
        }
      } else {
        setNotFound(true);
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {

    (async () => {
      if (recommendedFilm){
        const res = await VoteService.SendVote(age, category, favorites, recommendedFilm.id, vote.vote, vote.excludes);
        if (res.success) {
          if (vote.vote){
            navigation.navigate("FilmDetail", { film: recommendedFilm });
          } else {

            if (res.data.film) {
              setRecommendedFilm(res.data.film);
              setNotFound(false);
            } else {
              setRecommendedFilm(null);
              setNotFound(true);
            }

          }
        } else {
          setNotFound(true);
        }
        setLoading(false);
      }
    })();

  }, [vote])

  const recommedationClick = (filmId: number, thumbs: boolean) => {
    if (thumbs) {
      setVote({ vote: true, excludes: vote.excludes });
    } else {
      setLoading(true);
      
      if (!vote.excludes.includes(filmId)) {
        let _excludes = [...vote.excludes];
        _excludes.push(filmId);
        setVote({ vote: false, excludes: _excludes });
      }
      
    }
  };

  let title;
  if (category === 0) {
    title = "Film";
  } else if (category === 1) {
    title = "Dizi";
  } else {
    title = "İçerik";
  }

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
            {`Tavsiye Edilen ${title}`}
          </Text>
          <RecommendedFilm />
          <View style={styles.thumbs}>
            <ThumbsDown width="88px" onPress={() => recommedationClick(recommendedFilm.id, false)} />
            <ThumbsUp width="88px" onPress={() => recommedationClick(recommendedFilm.id, true)} />
          </View>
        </View>
      )}
      {!loading && notFound && !recommendedFilm && (
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
    flex: 1,
    padding: 20,
    paddingTop: 80,
  },
  pageTitle: {
    textAlign: "center"
  },
  notFoundTitle: {
    textAlign: "center",
    marginTop: "50%"
  },
  notFoundContent: {
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
    margin: 6,
    textAlign: "center"
  },
  recommendedFilmContent: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 0,
    alignItems: "center"
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
