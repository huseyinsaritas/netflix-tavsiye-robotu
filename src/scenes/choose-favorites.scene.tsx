import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';

import { COLORS, FONTS, LAYOUT } from "../styles/styles";
import { Button } from "../components/button.component";

import FILMS from "../data/films100.json";

export default function ChooseFavorites({ navigation }: any) {

  const [selectedFilms, setSelectedFilms] = useState([] as any)

  const FilmItem = ({ film }: any) => {

    const selected = selectedFilms.includes(film.id);

    return (
      <TouchableOpacity style={[styles.film, selected ? styles.filmSelected : {}]} onPress={() => selectFilm(film.id)} activeOpacity={0.8}>
        {selected && 
          <Image style={styles.filmSeletedIcon} source={require('../assets/selected.png')} />
        }
        <Image style={styles.filmPoster} source={{ uri: 'https://i.pinimg.com/736x/7c/0c/f2/7c0cf26a8a1e7b9fe8a1e393f28177f1.jpg' }} />
      </TouchableOpacity>
    )
  }

  const selectFilm = (id: string) => {

    let _selectedFilms = [ ...selectedFilms ];

    if (_selectedFilms.includes(id)){
      const i = _selectedFilms.indexOf(id);
      _selectedFilms.splice(i, 1);
      setSelectedFilms(_selectedFilms);
    } else {
      _selectedFilms.push(id);
      setSelectedFilms(_selectedFilms);
    }


  }

  return (
    <View style={[LAYOUT, styles.layout]}>
      <Text style={styles.pageTitle}>Favorilerinizi Seçin</Text>
      <Text style={styles.pageDesc}>Biraz yardımcı olmanız için en az {selectedFilms.length}/3 tane beğendiğiniz film veya diziyi işaretleyin.</Text>

      <FlatList
        data={FILMS}
        style={styles.films}
        numColumns={3}
        renderItem={({ item }) => <FilmItem film={item} />}
        keyExtractor={item => item.id}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 20,
    paddingTop: 80
  },
  pageTitle: {
    color: COLORS.white,
    fontFamily: FONTS.cabin700,
    fontSize: 32,
    textAlign: 'center'
  },
  pageDesc: {
    color: COLORS.white,
    fontFamily: FONTS.cabin400,
    textAlign: 'center'
  },
  films: {
    marginTop: 20
  },
  film: {
    position: 'relative',
    flex: 1/3,
    borderWidth: 3,
    borderColor: '#eee',
    borderRadius: 6,
    margin: 6
  },
  filmSelected: {
    borderColor: COLORS.red,
  },
  filmPoster: {
    width: 100,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  filmSeletedIcon: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    zIndex: 90
  }
});
