import axios, {AxiosInstance} from 'axios';
import {config} from '../config';

const API_KEY = '3e89844';

const movieAxios: AxiosInstance = axios.create({
  baseURL: config.baseURL,
  params: {
    apikey: API_KEY,
  },
});

export const movieApi = {
  getAllMovies: (page: string, query?: string) => {
    return movieAxios.get('', {
      params: {
        s: query && query?.length > 0 ? query : 'all',
        page,
      },
    });
  },

  getMovieById: (id: string) => {
    return movieAxios.get('', {
      params: {
        i: id,
      },
    });
  },
};
