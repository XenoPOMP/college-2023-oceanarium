import { describe, expect, test, vitest } from 'vitest';
import axios from 'axios';
import { UserService } from '@services/User.service';
import useEnv from '@hooks/useEnv';

const { TESTING_MODE } = useEnv();

describe.skipIf(TESTING_MODE === 'FRONTEND')('User service', () => {
  test('Axios request is being sent', () => {
    const spy = vitest.spyOn(axios, 'post');

    const mocks = {
      login: 'Xeno',
      password: '123',
    };

    try {
      UserService.loginUser(mocks.login, mocks.password);
    } catch (error) {
      console.log(error);
    }

    expect(spy).toBeCalledWith(`http://localhost:4200/visitors/login`, {
      login: mocks.login,
      password: mocks.password,
    });
  });

  test('DB query works', async () => {
    const mocks = {
      login: 'BORYA12',
      password: '123456',
    };
    const { login, password } = mocks;

    expect((await UserService.loginUser(login, password)).data).toStrictEqual({
      login: 'BORYA12',
      _uid: 1,
      role: 'employee',
    });
  });
});
