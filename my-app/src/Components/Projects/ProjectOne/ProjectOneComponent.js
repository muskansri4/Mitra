import React, { useEffect, useState } from "react";
import "./ProjectOneComponent.scss";
import "bootstrap/dist/css/bootstrap.css";
import { TvShowApi } from "./api/tv_shows";
import { BACKDROP_BASE_URL } from "./config/UrlConstant";
import TvShowDetails from "./ProjectOneComponent/TvShowDetails";

TvShowApi.fetchPopulars();
const ProjectOneComponent = () => {
  const [currTVShow, setcurrTVShow] = useState();

  useEffect(() => {
    fetchPopulars();
  }, []);

  async function fetchPopulars() {
    const popularTVShowList = await TvShowApi.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setcurrTVShow(popularTVShowList[0]);
    }
  }
  console.log(currTVShow);

  return (
    <React.Fragment>
      <div className="main_div1">
        <div className="section_container"
         style={{
        background: currTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}>
      <div class="container">
            <div class="row">
              <div class="col-6">
                <div className="section_1">
                  LOGO <p>subtitle</p>
                </div>
              </div>
              <div class="col-6">
                <div className="section_2">
                  <input className="search" type="text" />
                </div>
              </div>
              <div class="col-12">
                <div className="section_3">{currTVShow && <TvShowDetails tvShow={currTVShow}/>}</div>
              </div>
              <div class="col-12">
                <div className="section_4">Recommended TV show</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProjectOneComponent;
