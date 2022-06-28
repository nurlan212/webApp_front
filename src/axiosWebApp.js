import axios from 'axios';
import {baseUrl} from './constants';

const instanse = axios.create({
  baseURL: baseUrl
});

export default instanse;