import { APIService } from "./api.service";

class FilmService {
  private _api: any;

  constructor() {
    this._api = new APIService();
  }
  async GetFilmRecommend(age: number, category: string, films: Array<number>, excludeFilms?: Array<number>) {
    return await this._api.post(`/film/recommendation`, {}, { age, category, films, excludeFilms });
  }

  async GetFilms(search?: string, page: number = 1) {
    return await this._api.get(`/film`, { search, page });
  }

  async GetFilmDetail(id: number) {
    return await this._api.get(`film/:${id}`);
  }
}

export default new FilmService();

// export const GetFilm = async (id: string) => {
//   const api = new APIService();
//   return await api.get(`/films/${id}`);
// };

// export const GetFilms = async (page: number = 1, search?: string) => {
//   const api = new APIService();
//   return await api.get(`/films`, { page, search });
// };
