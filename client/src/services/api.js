import axios from 'axios';

export const setToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

const host = "http://marmot0814.nctucs.net:3001/api"

export const call = async (method, path, data) => {
  console.log(method, host + path)
  console.log(data)
  const response = await axios.request({
    url: host + path,
    method: method,
    data: data,
  });
  return response.data;
};

export default { setToken, call };