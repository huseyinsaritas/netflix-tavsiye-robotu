import { APIService } from "./api.service";

class VoteService {
  private _api: any;

  constructor() {
    this._api = new APIService();
  }
  async SendVote(age: number, category: string, films: Array<number>, recommended: Array<number>, vote: boolean) {
    return await this._api.post(`/vote`, {}, { age, category, films, recommended, vote });
  }
}

export default new VoteService();
