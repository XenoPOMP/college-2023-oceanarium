import ApiClient from '@utils/ApiClient';

export const VisitorService = {
  async getUserBonuses(_uid?: number) {
    return ApiClient().post(`visitors/bonuses`, {
      _uid,
    });
  },

  async getUserVisits(_uid?: number) {
    return ApiClient().post(`visitors/visits`, {
      _uid,
    });
  },

  async getUserData(_uid?: number) {
    return ApiClient().post(`visitors/data`, {
      _uid,
    });
  },
};
