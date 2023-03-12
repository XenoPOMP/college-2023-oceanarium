import { describe, expect, test } from 'vitest';
import { EmployeeService } from '@services/Employee.service';
import skipTestCondition from '@utils/skipTestCondition';
import { vitest } from 'vitest';
import axios from 'axios';
import useEnv from '@hooks/useEnv';

describe.skipIf(skipTestCondition('BACKEND'))('Employee service', () => {
  const { API_URL } = useEnv();
  const rootPath = `${API_URL}/employees`;

  test('Axios request is being send', async () => {
    const spy = vitest.spyOn(axios, 'post');

    try {
      await EmployeeService.getShifts(2);
    } catch (e) {
      throw e;
    }

    expect(spy).toBeCalledWith(`${rootPath}/shifts/`, {
      _uid: 2,
    });
  });
});
