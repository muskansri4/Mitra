import React from "react";
import Recommendation from "./Recommendation";

export default function RecommendList({ tvShowList, onClickList }) {
  const filtered = tvShowList.filter(function (e) {
    return e.backdrop_path != null;
  });
  return (
    <React.Fragment>
      <div className="RecommendList_title">You would Like.....</div>
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
