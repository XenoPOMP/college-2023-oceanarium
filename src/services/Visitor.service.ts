import axios from 'axios';
import useEnv from '@hooks/useEnv';

const { API_URL } = useEnv();
const rootPath = `${API_URL}/visitors`;

export const VisitorService = {
  async getUserBonuses(_uid?: number) {
    return axios.post(`${rootPath}/bonuses`, {
      _uid,
    });
  },

  async getUserVisits(_uid?: number) {
    return axios.post(`${rootPath}/visits`, {
      _uid,
    });
  },

  async getUserData(_uid?: number) {
    return axios.post(`${rootPath}/data`, {
      _uid,
    });
  },
};
