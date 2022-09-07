import { Li, Img } from './TopRated.style.js';

export default function TopRated({ title, posterImg, average }) {
  const src = 'https://image.tmdb.org/t/p/w500/' + posterImg;
  return (
    <Li>
      <Img src={src} alt={`${title} img`} />
      <span>{title}</span>
      <span>{average}</span>
    </Li>
  );
}
