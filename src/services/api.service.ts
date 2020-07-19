import axiosLib, { AxiosInstance } from "axios";
import { IResponse } from "../models";
import { GenerateQueryString } from "./helper.service";

export class APIService {
  private axios: AxiosInstance;
  // public baseURL = "http://netflixtavsiyerobotu.marsilyalidokiscileri.com";
  public baseURL = "http://192.168.2.241:3000";

  constructor() {
    this.axios = axiosLib.create();
    this.axios.defaults.baseURL = this.baseURL;
    this.axios.defaults.timeout = 10000; // 2500;
  }

  async get(url: string, query?: any): Promise<IResponse> {
    try {
      const q = GenerateQueryString(query);
      const req: any = await this.axios.get(`${this.baseURL}${url}?${q}`);
      return { success: true, data: req.data };
    } catch (error) {
      return { success: false };
    }
  }

  async post(url: string, query?: any, body?: any): Promise<IResponse> {
    try {
      const q = GenerateQueryString(query);
      const req: any = await this.axios.post(`${this.baseURL}${url}?${q}`, body);
      return { success: true, data: req.data };
    } catch (error) {
      return { success: false };
    }
  }
}
