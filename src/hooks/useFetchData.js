import { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_SERVER_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export default function useFetchData(endpoint) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = baseUrl + endpoint + '?api_key=' + apiKey + '&language=ko';
      try {
        const { data: response } = await axios.get(`${url}`);
        setData(response);
      } catch (error) {
        console.error(`${error.message} Error 인한 요청 실패!`);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [endpoint]);

  return {
    data,
    isLoading,
  };
}
