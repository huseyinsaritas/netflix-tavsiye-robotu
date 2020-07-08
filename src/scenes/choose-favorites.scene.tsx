import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native";

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import Button from "../components/Button";
import FILMS from "../data/films100.json";

const ChooseFavorites = ({ navigation }: any) => {
  const [selectedFilms, setSelectedFilms] = useState([] as string[]);

  const FilmItem = ({ film }: any) => {
    const selected = selectedFilms.includes(film.id);

    return (
      <TouchableOpacity style={[styles.film, selected ? styles.filmSelected : {}]} onPress={() => selectFilm(film.id)} activeOpacity={0.8}>
        {selected && <Image style={styles.filmSeletedIcon} source={require("../assets/selected.png")} />}
        <Image style={styles.filmPoster} source={{ uri: film.image }} />
      </TouchableOpacity>
    );
  };

  const selectFilm = (id: string) => {
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
    navigation.navigate("Recommendation");
  };

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={styles.pageTitle}>Favori Seçin</Text>
      <Text style={styles.pageDesc}>Biraz yardımcı olmanız için en az {selectedFilms.length}/3 tane beğendiğiniz film veya diziyi işaretleyin.</Text>
      <FlatList data={FILMS} style={styles.films} numColumns={3} renderItem={({ item }) => <FilmItem film={item} />} keyExtractor={item => item.id} />
      {selectedFilms.length > 2 ? <Button title="TAVSİYE AL" onPress={onPress} /> : null}
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
    borderColor: "#eee",
    borderRadius: 6,
    margin: 6
  },
  filmSelected: {
    borderColor: COLORS.red
  },
  filmPoster: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
    borderRadius: 5,
    overflow: "hidden"
  },
  filmSeletedIcon: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    zIndex: 90
  }
});
export default ChooseFavorites;
