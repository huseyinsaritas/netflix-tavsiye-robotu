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

export default IMoovie;
