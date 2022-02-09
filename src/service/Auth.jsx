import axios from 'axios';

const baseURL = 'http://localhost:3001';
const instance = axios.create({
  baseURL: `${baseURL}/auth`
});

const createNewUser = async (body) => {
  const result = await instance.post('/register/', body);
  return result;
};


export { createNewUser };