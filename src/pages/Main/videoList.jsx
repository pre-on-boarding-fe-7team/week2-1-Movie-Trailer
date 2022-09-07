import React from 'react';
import Slider from './Slider/Slider';
import VideoItems from './VideoItems';
import { ListWrraper } from './VideoList.style';
function VieodList({ videos }) {
  return (
    <>
      <ListWrraper>
        <span className="title">추천 영화</span>
        <span className="allItems">전체보기</span>
        <Slider videos={videos} />
        <span className="title">POPULAR IN THEATERS</span>
        {videos.map(video => (
          <VideoItems key={video.id} video={video} />
        ))}
      </ListWrraper>
    </>
  );
}

export default VieodList;
