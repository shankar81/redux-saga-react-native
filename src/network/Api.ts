import axios, {AxiosInstance, CreateAxiosDefaults} from 'axios';

type ContentType = 'formdata-multipart' | 'url-encoded';

export default class Api {
  static #axiosInstance: AxiosInstance;

  static async configureHeader(contentType?: ContentType) {
    const headers: any = {};

    if (contentType === 'formdata-multipart') {
      headers['Content-Type'] = contentType;
    }
    // Get token from local storage

    return headers;
  }

  static init(config: CreateAxiosDefaults) {
    this.#axiosInstance = axios.create({timeout: 10000, ...config});
  }

  static async get(url: string) {
    const config = {
      headers: await this.configureHeader(),
    };
    return this.#axiosInstance.get(url, config);
  }

  // Convert json to form-url-encoded
  static #toUrlEncoded(params: {[key: string]: any}) {
    return Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');
  }

  // Convert json to FormData
  static #toFormData(params: any) {
    const body = new FormData();
    Object.keys(params).map(key => {
      body.append(key, params[key]);
    });
    return body;
  }

  static async post(url: string, body: any, contentType?: ContentType) {
    const config = {
      headers: await this.configureHeader(contentType),
    };

    switch (contentType) {
      case 'formdata-multipart':
        // Conbert body from json to formdata format
        body = this.#toFormData(body);
        break;
      case 'url-encoded':
        // Conbert body from json to url-endcoded format
        body = this.#toUrlEncoded(body);
        break;
    }

    return this.#axiosInstance.post(url, body, config);
  }
}
