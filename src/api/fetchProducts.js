import axios from 'axios';

const BASE_URL = 'https://imperial-server.herokuapp.com/api';

export const fetchProducts = async (count) =>
  await axios.get(`${BASE_URL}/products/${count}`);
