import axios, { AxiosInstance } from 'axios';
import useEnv from '@hooks/useEnv';

const { API_URL } = useEnv();

const ApiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export default ApiClient;
