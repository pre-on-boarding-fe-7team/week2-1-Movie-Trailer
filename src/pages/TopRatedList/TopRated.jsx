import { Li, ImgDiv, Img, Title, AverageSpan, DateSpan } from './TopRated.style.js';

export default function TopRated({ title, posterImg, average, date }) {
  const src = `${process.env.REACT_APP_IMAGE_URL}` + posterImg;
  return (
    <Li>
      <ImgDiv>
        <Img src={src} alt={`${title} img`} />
      </ImgDiv>
      <Title>{title}</Title>
      <AverageSpan>평점 {average} / 10</AverageSpan>
      <DateSpan>개봉 {date}</DateSpan>
    </Li>
  );
}
