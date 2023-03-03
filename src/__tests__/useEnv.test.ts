import { describe, expect, test } from 'vitest';
import useEnv, { Env } from '@hooks/useEnv';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('useEnv hook', () => {
  const { API_URL, TESTING_MODE }: Env = useEnv();

  test('Get API url', () => {
    expect(API_URL).toBe('http://localhost:4200');
  });

  test('Get testing mode', () => {
    const modes = ['FRONTEND', 'BACKEND', 'FULLSTACK'];

    // @ts-ignore
    expect.arrayContaining(modes[TESTING_MODE]);
  });
});
