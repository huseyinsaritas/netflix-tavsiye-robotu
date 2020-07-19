import { APIService } from "./api.service";

class VoteService {
  private _api: any;

  constructor() {
    this._api = new APIService();
  }
  async SendVote(age: number, category: number, favorites: number[], recommended: number, vote: boolean, excludes?: number[]) {
    return await this._api.post(`/vote`, {}, { age, category, favorites, recommended, vote, excludes });
  }
}

export default new VoteService();
