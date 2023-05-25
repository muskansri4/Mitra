import React from 'react'

export default function TvShowDetails({tvShow}) {
  return (
    <React.Fragment>
<div>{tvShow.name}</div>
<div>{tvShow.vote_average}</div>
      
    </React.Fragment>
  )
}
