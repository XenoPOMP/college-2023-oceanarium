import ApiClient from '@utils/ApiClient';

export const UserService = {
  async loginUser(login: string, password: string) {
    return ApiClient.post(`visitors/login`, {
      login,
      password,
    });
  },
};
