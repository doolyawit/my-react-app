import axios, { AxiosInstance } from "axios";

export class HttpRequest {
  private static instance: HttpRequest;
  private http: AxiosInstance

  private constructor() {
    this.http = axios.create()

    this.http.interceptors.request.use(
      (config) => {
        console.log(`Sending request to ${config.url}`);
        return config;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    this.http.interceptors.response.use(
      (response) => {
        console.log(`data was sent back from ${response.config.url}`);
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  static getInstance = () => {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new HttpRequest();
    }
    return this.instance;
  };

  getHttpRequest = () => {
    return this.http
  }
}
