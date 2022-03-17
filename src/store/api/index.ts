import axios from 'axios';

export default axios.create({
  baseURL: 'https://my-json-server.typicode.com/gavrilciunterei/demo/',
  responseType: 'json',
  withCredentials: false,
});
