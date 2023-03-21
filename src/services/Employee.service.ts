import useEnv from '@hooks/useEnv';
import axios from 'axios';

const { API_URL } = useEnv();

export const EmployeeService = {
  async getTodayShift(_uid?: number) {
    return await axios.post(`${API_URL}/visitors/shifts/today`, {
      _uid,
    });
  },

  async getShifts(_uid?: number) {
    return await axios.post(`${API_URL}/visitors/shifts/`, {
      _uid,
    });
  },
};
