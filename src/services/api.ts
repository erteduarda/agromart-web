import axios from 'axios';

export const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async config => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('@AgroMart:token')}`
  }
}))

export default api;