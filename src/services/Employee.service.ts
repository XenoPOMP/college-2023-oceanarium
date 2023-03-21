import ApiClient from '@utils/ApiClient';

export const EmployeeService = {
  async getTodayShift(_uid?: number) {
    return await ApiClient.post(`employees/shifts/today`, {
      _uid,
    });
  },

  async getShifts(_uid?: number) {
    return await ApiClient.post(`employees/shifts/`, {
      _uid,
    });
  },
};
