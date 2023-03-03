import { describe, expect, test } from 'vitest';
import { VisitorService } from '@services/Visitor.service';
import useEnv from '@hooks/useEnv';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('BACKEND'))('Visitor service', () => {
  test('Get visitor bonuses', async () => {
    expect((await VisitorService.getUserBonuses(4)).data).toBeInstanceOf(Array);
  });

  test('Get visitor visits', async () => {
    expect((await VisitorService.getUserVisits(4)).data).toBeInstanceOf(Array);
  });

  test('Get visitor data', async () => {
    expect((await VisitorService.getUserData(4)).data).toStrictEqual({
      visitor_surname: 'Наумов',
      visitor_name: 'Александр',
      visitor_birthdate: '2004-08-07T00:00:00.000Z',
      visitor_login: 'User001',
      visitor_password: 'georgeusFreeman',
    });
  });
});
