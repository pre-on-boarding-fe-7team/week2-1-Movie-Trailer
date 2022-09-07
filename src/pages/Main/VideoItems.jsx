import React from 'react';

function VideoItems({ video }) {
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w300';
  return (
    <div>
      <img className="thumbnailImg" src={IMAGE_BASE_URL + `${video.backdrop_path}`}></img>
      <p>{video.title}</p>
    </div>
  );
}

export default VideoItems;
