import React from 'react';
import { VideoItemWrraper } from './VideoList.style';
function VideoItems({ video }) {
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w300';
  return (
    <VideoItemWrraper>
      <div>
        <img className="thumbnailImg" src={IMAGE_BASE_URL + `${video.backdrop_path}`}></img>
      </div>
      <p>{video.title}</p>
    </VideoItemWrraper>
  );
}

export default VideoItems;
