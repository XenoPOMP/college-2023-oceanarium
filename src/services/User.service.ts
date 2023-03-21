import axios from 'axios';
import useEnv from '@hooks/useEnv';

const { API_URL } = useEnv();

export const UserService = {
  async loginUser(login: string, password: string) {
    return axios.post(`${API_URL}/visitors/login`, {
      login,
      password,
    });
  },
};
