import ApiClient from '@utils/ApiClient';

export const UserService = {
  async loginUser(login: string, password: string) {
    return await ApiClient.post(`visitors/login`, {
      login,
      password,
    });
  },
};
