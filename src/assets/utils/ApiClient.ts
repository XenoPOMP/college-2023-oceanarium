import axios, { AxiosInstance } from 'axios';
import useEnv from '@hooks/useEnv';

const ApiClient = (): AxiosInstance => {
  const { API_URL } = useEnv();

  console.log(API_URL);

  return axios.create({
    baseURL: API_URL,
  });
};

export default ApiClient;
