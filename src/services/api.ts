import axios from 'axios';

export const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL,
});

const token = localStorage.getItem('@AgroMart:token')

console.log("TOKEN NO API", token);
if(token) {
  // api.interceptors.request.use(async config => ({
  //   ...config,
  //   headers: {
  //     ...config.headers,
  //     Authorization: `Bearer ${localStorage.getItem('@AgroMart:token')}`
  //   }
  // }))

  api.defaults.headers.authorization = `Bearer ${token}`;
}

export default api;