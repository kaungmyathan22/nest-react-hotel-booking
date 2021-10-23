import axios from 'axios';
import { getToken } from '../../lib/services/auth.service';
import { API_URL } from './envData';

let authToken = getToken() || "";

export default axios.create({
    baseURL: API_URL,
    headers: { 'x-jwt': authToken }
});
