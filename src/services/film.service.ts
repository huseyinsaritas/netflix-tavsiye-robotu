import { APIService } from "./api.service";

class FilmService {
  private _api: any;

  constructor() {
    this._api = new APIService();
  }
  async GetRecommendedFilm(age?: number, category?: string, films?: Array<string>) {
    return await this._api.get(`/film/recommendation`, { age, category, films });
  }

  async GetFilms(page: number = 1, search?: string) {
    return await this._api.get(`/film`, { page, search });
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
