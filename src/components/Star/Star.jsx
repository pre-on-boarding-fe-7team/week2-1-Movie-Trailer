import { Rating } from './Star.style';

const Star = ({ value }) => <Rating value={value} size={'small'} precision={0.5} readOnly />;

export default Star;
