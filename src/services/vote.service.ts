import { APIService } from "./api.service";

class VoteService {
  private _api: any;

  constructor() {
    this._api = new APIService();
  }
  async SendVote(age: number, category: string, films: Array<number>, recommended: Array<number>, thumbs: boolean) {
    return await this._api.post(`/vote`, {}, { age, category, films, recommended, thumbs });
  }
}

export default new VoteService();
