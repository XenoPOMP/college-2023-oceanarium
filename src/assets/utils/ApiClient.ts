import axios from 'axios';
import useEnv from '@hooks/useEnv';

const { API_URL } = useEnv();

const ApiClient = axios.create({
  baseURL: API_URL,
});

export default ApiClient;
