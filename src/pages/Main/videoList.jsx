import React from 'react';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w300';

function VieodList({ videos }) {
  return (
    <div>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <div>{video.title}</div>
            <img src={IMAGE_BASE_URL + `${video.backdrop_path}`}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VieodList;
