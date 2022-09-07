import axios from 'axios';
const baseUrl = process.env.REACT_APP_SERVER_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const get = async endpoint => {
  const url = baseUrl + endpoint + '?api_key=' + apiKey;
  const res = await axios(url);
  if (res.status !== 200) {
    throw new Error(`${res.status.toString()} Error 인한 요청 실패!`);
  }
  const result = await res.data;
  return result;
};

export { get };
