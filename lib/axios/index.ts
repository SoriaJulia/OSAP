// eslint-disable-next-line import/no-self-import
import axios from 'axios';
import { NEXT_URL, SERVER_BASE_URL } from '../../config';

const axiosClient = axios.create({
  headers: { 'Content-Type': 'application/soap+xml' },
});

export const nextAxiosClient = axios.create({ baseURL: NEXT_URL, headers: { 'Content-Type': 'application/json' } });

export default axiosClient;
