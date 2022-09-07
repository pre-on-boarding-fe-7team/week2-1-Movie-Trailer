import { Li, Img } from './TopRated.style.js';

export default function TopRated({ title, posterImg, average }) {
  const src = `${process.env.REACT_APP_IMAGE_URL}` + posterImg;
  return (
    <Li>
      <Img src={src} alt={`${title} img`} />
      <span>{title}</span>
      <span>{average}</span>
    </Li>
  );
}
