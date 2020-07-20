import { APIService } from "./api.service";

class FilmService {
  private _api: any;
  private _cache: any = {};

  constructor() {
    this._api = new APIService();
  }

  async GetFilms(search: string, page: number = 1) {

    const key = `page:${page}|search:${search}`;
    if (this._cache[key]){
      return Promise.resolve(this._cache[key]);
    }

    this._cache[key] = await this._api.get(`/film`, { search, page });
    return this._cache[key];

  }

  async GetFilmDetail(id: number) {
    return await this._api.get(`film/:${id}`);
  }

  async GetFilmRecommend(age: number, category: string, favorites: Array<number>) {
    return await this._api.post(`/film/recommendation`, {}, { age, category, favorites });
  }

}

export default new FilmService();
