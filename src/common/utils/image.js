export const getImage = poster_path =>
  poster_path
    ? `${process.env.REACT_APP_IMAGE_URL}/w500${poster_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
