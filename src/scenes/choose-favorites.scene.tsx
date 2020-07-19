import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground, ActivityIndicator } from "react-native";
import FilmService from "../services/film.service";
import { IFilm } from "../models";
import { Button, SearchBar } from "../components";
import { COLORS, FONTS, LAYOUT } from "../styles/styles";

const ChooseFavorites = ({ navigation, route }: any) => {
  const [selectedFilms, setSelectedFilms] = useState<number[]>([]);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [films, setFilms] = useState<IFilm[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [scrollLoading, setScrollLoading] = useState<boolean>(false);

  const { age, category } = route.params;

  useEffect(() => {
    (async () => {
      const films = await FilmService.GetFilms(search, page);
      setLoading(false);
      setScrollLoading(false);
      if (films.success) {
        setFilms(prev => prev.concat(films.data));
      } else {
        //error
      }
    })();
  }, [search, page]);

  const FilmItem = ({ film }: any) => {
    const selected = selectedFilms.includes(film.id);

    return (
      <TouchableOpacity style={[styles.film, selected ? styles.filmSelected : {}]} onPress={() => selectFilm(film.id)} activeOpacity={0.8}>
        {selected && <ImageBackground style={styles.filmSeletedIcon} source={require("../assets/selected.png")} />}
        <ImageBackground style={styles.filmPoster} source={{ uri: film.image }}>
          <Text style={styles.filmTitle}>{film.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const selectFilm = (id: number) => {
    let _selectedFilms = [...selectedFilms];
    const i = _selectedFilms.indexOf(id);
    if (i === -1) {
      _selectedFilms.push(id);
    } else {
      _selectedFilms.splice(i, 1);
    }
    setSelectedFilms(_selectedFilms);
  };

  const onPress = () => {
    navigation.navigate("Recommendation", { category, age, favorites: selectedFilms });
  };

  const RenderScrollLoading = () => {
    return (
      <>
      {scrollLoading && 
        <ActivityIndicator size="large" color={COLORS.red} />
      }
      </>
    )
  }

  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={COLORS.red} />
        </View>
      ) : (
        <View style={[LAYOUT, styles.layout]}>
          <Text style={styles.pageTitle}>Favori Seçin</Text>
          <Text style={styles.pageDesc}>Biraz yardımcı olmanız için en az {selectedFilms.length}/3 tane beğendiğiniz film veya diziyi işaretleyin.</Text>
          <SearchBar value={search} onChangeText={input => setSearch(input)} placeholder="Ara..." />
          <FlatList
            data={films}
            style={styles.films}
            numColumns={3}
            renderItem={({ item }) => <FilmItem film={item} />}
            onEndReached={() => { setScrollLoading(true); setPage(page + 1) }}
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={() => <RenderScrollLoading />}
          />
          {selectedFilms.length > 2 ? <Button title="TAVSİYE AL" onPress={onPress} /> : null}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 20,
    paddingTop: 60
  },
  pageTitle: {
    color: COLORS.white,
    fontFamily: FONTS.cabin700,
    fontSize: 32,
    textAlign: "center"
  },
  pageDesc: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    textAlign: "center"
  },
  films: {
    marginTop: 20
  },
  film: {
    position: "relative",
    flex: 1 / 3,
    borderWidth: 3,
    borderColor: "#444",
    borderRadius: 6,
    margin: 6
  },
  filmSelected: {
    borderColor: COLORS.red
  },
  filmPoster: {
    width: "100%",
    height: 160,
    // resizeMode: "cover",
    borderRadius: 5,
    overflow: "hidden",
    position: "relative"
  },
  filmTitle: {
    color: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingLeft: 4,
    fontFamily: FONTS.cabin700,
    fontSize: 14,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  filmSeletedIcon: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    zIndex: 90
  },
  loading: {
    backgroundColor: COLORS.black,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    padding: 10
  },
});

export default ChooseFavorites;
