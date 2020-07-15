import axiosLib, { AxiosInstance } from "axios";
import IMoovie from "../model/IMoovie";

class API {
  // static recommendation() {
  //   throw new Error("Method not implemented.");
  // }
  public axios: AxiosInstance;
  public baseURL = "http://localhost:3000";
  static recommendation: any;

  constructor() {
    this.axios = axiosLib.create();
    this.axios.defaults.baseURL = this.baseURL;
    this.axios.defaults.timeout = 10000; // 2500;
  }

  recommendation = async (): Promise<IMoovie> => {
    return this.axios
      .get(this.baseURL + "/recommendations")
      .then(res => {
        this.res = res.data;
        return res.data;
      })
      .catch((err: any) => {
        console.log("recommendations error", err);
      });
  };
  res: IMoovie | undefined;
}

export default API;
