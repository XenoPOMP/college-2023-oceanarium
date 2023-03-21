import axios from 'axios';
import useEnv from '@hooks/useEnv';

const { API_URL } = useEnv();
const rootPath = `${API_URL}/visitors`;

export const UserService = {
  async loginUser(login: string, password: string) {
    return axios.post(`${rootPath}/login`, {
      login,
      password,
    });
  },
};
