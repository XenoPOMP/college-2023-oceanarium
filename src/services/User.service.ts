import axios from 'axios';

export const UserService = {
  async loginUser(login: string, password: string) {
    return axios.get(`http://localhost:4200/visitors/login`, {
      data: {
        login: login,
        password: password,
      },
    });
  },
};
