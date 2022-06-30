import axios from 'axios';
import { baseUrl } from './constants';
import store from './store/configureStore';

const instanse = axios.create({
  baseURL: baseUrl,
});

instanse.interceptors.request.use((req) => {
  const user = store.getState().users.user;
  if (user) {
    req.headers['Authenticate'] = user.token;
  }
  return req;
});

export default instanse;
