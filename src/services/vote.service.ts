import { APIService } from "./api.service";

class VoteService {
  private _api: any;

  constructor() {
    this._api = new APIService();
  }
  async SendVote(age?: number, category?: string, films?: Array<string>, thumbs?: boolean) {
    return await this._api.post(`/vote`, {}, { age, category, films, thumbs });
  }
}

export default new VoteService();
