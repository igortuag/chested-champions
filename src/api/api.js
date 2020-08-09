import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/igortuag/chested-champions',
  withCredentials: false,
  headers: {
    Accpet: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default {
  getChampions() {
    return api.get('/champions');
  },
};
