import React from 'react';
import Slider from './Slider';
import VideoItems from './VideoItems';
import { ListWrraper } from './VideoList.style';
function VieodList({ videos }) {
  return (
    <ListWrraper>
      <span className="title">POPULAR IN THEATERS</span>
      <span className="allItems">전체보기></span>
      <Slider videos={videos} />
      {videos.map(video => (
        <VideoItems key={video.id} video={video} />
      ))}
    </ListWrraper>
  );
}

export default VieodList;
