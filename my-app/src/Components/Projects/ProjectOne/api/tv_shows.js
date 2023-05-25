import axios from 'axios';
import { BASE_URL, API_KEY_PARAM } from '../config/UrlConstant';
import { fakePopularTVShowList } from './fakeApiData';

export class TvShowApi{
    static async fetchPopulars() {
        // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        // console.log(response.data.results[0]);
        // return response.data.results[1];
        return fakePopularTVShowList;
      }
}
