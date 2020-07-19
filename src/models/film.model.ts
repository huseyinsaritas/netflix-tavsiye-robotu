
export enum EFilmCategory {
  MOVIE,
  TVSERIES,
  ALL
}

export enum EFilmMaturity {
  OVER7,
  OVER13,
  OVER16,
  OVER18,
  ALL
}

export interface IFilm {
  id: number;
  netflix_id: string;
  title: string;
  category: EFilmCategory;
  year: number;
  duration: string;
  maturity: EFilmMaturity;
  synopsis: string;
  image: string;
  genres: string[];
  moods: string[];
  starring: string[];
}

export const FilmCategoryInfo = (e: EFilmCategory) => {

  switch(e){
    case EFilmCategory.MOVIE: return 'Film';
    case EFilmCategory.TVSERIES: return 'Dizi';
    case EFilmCategory.ALL: return 'Tümü';
  }

}

export const FilmMaturityInfo = (e: EFilmMaturity) => {

  switch(e){
    case EFilmMaturity.OVER7: return '7+';
    case EFilmMaturity.OVER13: return '13+';
    case EFilmMaturity.OVER16: return '16+';
    case EFilmMaturity.OVER18: return '18+';
    default: return 'Genel İzleyici';
  }

}