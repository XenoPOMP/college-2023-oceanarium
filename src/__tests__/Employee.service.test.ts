import { describe, expect, test } from 'vitest';
import { EmployeeService } from '@services/Employee.service';
import skipTestCondition from '@utils/skipTestCondition';
import { vitest } from 'vitest';
import axios from 'axios';
import useEnv from '@hooks/useEnv';

describe.skipIf(skipTestCondition('BACKEND'))('Employee service', () => {
  const { API_URL } = useEnv();
  const rootPath = `${API_URL}/employees`;

  test('Return type is promise', () => {
    const statement = EmployeeService.getShifts(2);
    const secondStatement = EmployeeService.getTodayShift(2);

    expect(statement).toBeInstanceOf(Promise);
    expect(secondStatement).toBeInstanceOf(Promise);
  });

  test('Axios request is being send', () => {
    const spy = vitest.spyOn(axios, 'post');

    try {
      EmployeeService.getShifts(2);
    } catch (e) {
      throw e;
    }

    expect(spy).toBeCalledWith(`${rootPath}/shifts/`, {
      _uid: 2,
    });
  });
});
