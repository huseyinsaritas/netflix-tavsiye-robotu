import { APIService } from "./api.service";

class FilmService {
  private _api: any;
  private _cache: any = {};

  constructor() {
    this._api = new APIService();
  }

  async GetFilms(search: string, page: number = 1) {

    if (this._cache[`page:${page}|search:${search}`]){
      return Promise.resolve(this._cache[`page:${page}|search:${search}`]);
    }

    this._cache[`page:${page}|search:${search}`] = await this._api.get(`/film`, { search, page });
    return this._cache[`page:${page}|search:${search}`];

  }

  async GetFilmDetail(id: number) {
    return await this._api.get(`film/:${id}`);
  }

  async GetFilmRecommend(age: number, category: string, favorites: Array<number>) {
    return await this._api.post(`/film/recommendation`, {}, { age, category, favorites });
  }

}

export default new FilmService();
