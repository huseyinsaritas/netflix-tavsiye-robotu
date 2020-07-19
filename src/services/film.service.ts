import { APIService } from "./api.service";

class FilmService {
  private _api: any;

  constructor() {
    this._api = new APIService();
  }
  async GetFilmRecommend(age: number, category: string, favorites: Array<number>) {
    return await this._api.post(`/film/recommendation`, {}, { age, category, favorites });
  }

  async GetFilms(search?: string, page: number = 1) {
    return await this._api.get(`/film`, { search, page });
  }

  async GetFilmDetail(id: number) {
    return await this._api.get(`film/:${id}`);
  }
}

export default new FilmService();
