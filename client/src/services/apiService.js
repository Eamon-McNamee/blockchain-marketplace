import axios from 'axios';

export const fetchItems = () => {
  return axios.get('/api/items');
};

export const addItem = (item) => {
  return axios.post('/api/items', item);
};