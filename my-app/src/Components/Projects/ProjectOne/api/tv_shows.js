import axios from 'axios';
import { BASE_URL, API_KEY_PARAM } from '../config/UrlConstant';
import { fakePopularTVShowList,FAKE_RECOMMENDATIONS } from './fakeApiData';

export class TvShowApi{
    static async fetchPopulars() {
        // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        // console.log(response.data.results[0]);
        // return response.data.results[1];
        return fakePopularTVShowList;
      }
      
      static async fetchRecommendations(tvShowId) {
        // const response = await axios.get(
        //   `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
        // );
        // return response.data.results;
        return FAKE_RECOMMENDATIONS;
      }
}
