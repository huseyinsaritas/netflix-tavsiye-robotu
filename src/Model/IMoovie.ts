interface IFilm {
  id: number;
  title: string;
  category: string;
  duration: string;
  genres: Array<string>;
  image: string;
  maturity: string;
  moods: Array<string>;
  starring: Array<string>;
  synopsis: string;
  year: string;
}

export default IFilm;
