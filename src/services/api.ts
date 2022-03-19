import axios from 'axios';
// import 'dotenv/config';
// dotenv.config({ path: __dirname+'/.env' });

export const baseURL = 'https://api-agromart.herokuapp.com/';

const api = axios.create({
  baseURL,
});

export default api;