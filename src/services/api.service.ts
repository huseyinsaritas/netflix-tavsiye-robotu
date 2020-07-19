import axiosLib, { AxiosInstance } from "axios";
import { IResponse } from "../Model";
import { GenerateQueryString } from "./helper.service";

export class APIService {
  private axios: AxiosInstance;
  public baseURL = "http://netflixtavsiyerobotu.marsilyalidokiscileri.com";

  constructor() {
    this.axios = axiosLib.create();
    this.axios.defaults.baseURL = this.baseURL;
    this.axios.defaults.timeout = 10000; // 2500;
  }

  async get(url: string, query?: any): Promise<IResponse> {
    try {
      const q = GenerateQueryString(query);
      const data: any = await this.axios.get(`${this.baseURL}${url}?${q}`);
      return { success: true, data };
    } catch (error) {
      return { success: false };
    }
  }

  async post(url: string, query?: any, body?: any): Promise<IResponse> {
    try {
      const q = GenerateQueryString(query);
      const data: any = await this.axios.post(`${this.baseURL}${url}?${q}`, body);
      return { success: true, data };
    } catch (error) {
      return { success: false };
    }
  }
}
