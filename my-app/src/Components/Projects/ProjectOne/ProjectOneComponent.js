import React, { useEffect, useState } from "react";
import "./ProjectOneComponent.scss";
import "bootstrap/dist/css/bootstrap.css";
import { TvShowApi } from "./api/tv_shows";
import { BACKDROP_BASE_URL } from "./config/UrlConstant";
import TvShowDetails from "./ProjectOneComponent/TvShowDetails";
import Logo from "./ProjectOneComponent/Logo";
import Tv_Icon from "./Image/Tv_Icon.png";
import RecommendList from "./ProjectOneComponent/RecommendList";
import Search from "./ProjectOneComponent/Search";

const ProjectOneComponent = () => {
  const [currTVShow, setcurrTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currTVShow) {
      fetchRecommendations(currTVShow.id);
    }
  }, [currTVShow]);

  async function fetchPopulars() {
    const popularTVShowList = await TvShowApi.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setcurrTVShow(popularTVShowList[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendationListResp = await TvShowApi.fetchRecommendations(
      tvShowId
    );
    if (recommendationListResp.length > 0) {
      setRecommendationList(recommendationListResp.slice(0, 10));
    }
  }
  const updateCurrentTvShow = (recommended_clicked) => {
    setcurrTVShow(recommended_clicked);
  };
  // console.log(recommendationList);
  return (
    <React.Fragment>
      <div className="main_div1">
        <div
          className="section_container"
          style={{
            background: currTVShow
              ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currTVShow.backdrop_path}") no-repeat center / cover`
              : "black",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-6">
                <div className="section_1">
                  <Logo
                    img={Tv_Icon}
                    title={"TV show"}
                    subtitle={"Find your fav show details"}
                  />
                </div>
              </div>
              <div class="col-6">
                <div className="section_2">
                  <Search />
                </div>
              </div>
              <div class="col-12">
                <div className="section_3">
                  {currTVShow && <TvShowDetails tvShow={currTVShow} />}
                </div>
              </div>
              <div class="col-12">
                <div className="section_4">
                  {currTVShow && (
                    <RecommendList
                      onClickList={updateCurrentTvShow}
                      tvShowList={recommendationList}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProjectOneComponent;
