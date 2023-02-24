import axios from 'axios';

export const VisitorService = {
  async getUserBonuses(_uid?: number) {
    return axios.post(`http://localhost:4200/visitors/bonuses`, {
      _uid,
    });
  },
};