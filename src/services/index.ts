import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

export default axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
  withCredentials: true,
});
