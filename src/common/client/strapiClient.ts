import axios, { AxiosInstance } from 'axios';
import { strapiUrl } from '../tools';

class strapiClient {
  private client: AxiosInstance;

  constructor(private baseUrl: string) {
    this.createClient();
  }

  private createClient = () => {
    const headers = {
      Accept: 'application/json',
    };

    this.client = axios.create({
      headers,
      baseURL: this.baseUrl,
    });
  };

  public single = async (single: string) => {
    const response = await this.client.get(`/api/${single}`);

    return response.data;
  };
}

export const getStrapiClient = () => {
  return new strapiClient(strapiUrl);
};
