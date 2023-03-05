import useEnv from '@hooks/useEnv';
import axios from 'axios';

const { API_URL } = useEnv();
const rootPath = `${API_URL}/employees`;

export const EmployeeService = {
  async getTodayShift(_uid?: number) {
    return await axios.post(`${rootPath}/shifts/today`, {
      _uid,
    });
  },

  async getShifts(_uid?: number) {
    return await axios.post(`${rootPath}/shifts/`, {
      _uid,
    });
  },
};
