import axios from 'axios';

export const UserService = {
  async loginUser(login: string, password: string) {
    return axios.post(`http://localhost:4200/visitors/login`, {
      login,
      password,
    });
  },
};
