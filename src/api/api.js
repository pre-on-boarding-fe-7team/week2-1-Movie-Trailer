const baseUrl = process.env.REACT_APP_SERVER_URL;

const get = async endpoint => {
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  if (!res.ok) {
    throw new Error(`${res.status.toString()} Error 인한 요청 실패!`);
  }
  const result = await res.json();

  return result;
};

export { get };
