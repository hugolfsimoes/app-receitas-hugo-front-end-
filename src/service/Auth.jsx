import axios from 'axios';

const baseURL = 'http://localhost:3001';
const instance = axios.create({
  baseURL: `${baseURL}/auth`
});

const createNewUser = async (body) => {
  const result = await instance.post('/register/', body);
  return result;
};

const login = async (body) => {
  const result = await instance.post('/login/', body);
  return result;
};


export { createNewUser, login };