import axios from 'axios';
import { BASE_URL, API_KEY_PARAM } from '../config/UrlConstant';
import { fakePopularTVShowList,FAKE_RECOMMENDATIONS } from './fakeApiData';

export class TvShowApi{
    static async fetchPopulars() {
        // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        // return response.data.results;
        return fakePopularTVShowList;
      }
      
      static async fetchRecommendations(tvShowId) {
        // const response = await axios.get(
        //   `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
        // );
        // return response.data.results;
        return FAKE_RECOMMENDATIONS;
      }
      static async fetchByTitle(title) {
        const response = await axios.get(
          `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
        );
        return response.data.results;
      }
}
