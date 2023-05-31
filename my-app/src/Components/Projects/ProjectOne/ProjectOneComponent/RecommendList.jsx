import React from "react";
import Recommendation from "./Recommendation";
import { TfiAngleRight } from "react-icons/tfi";

export default function RecommendList({ tvShowList, onClickList }) {
  const filtered = tvShowList.filter(function (e) {
    return e.backdrop_path != null;
  });
  return (
    <React.Fragment>
      <div className="RecommendList_title">Recommendations <TfiAngleRight/> </div>
      <div className="RecommendList_List">
        {filtered.map((element) => {
          return (
            <span className="TvShowItem" key={filtered.id}>
              <Recommendation
                recommendationList={element}
                onClick_item={onClickList}
              />
            </span>
          );
        })}
      </div>
    </React.Fragment>
  );
}
