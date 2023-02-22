import { describe, expect, test } from 'vitest';
import useEnv, { Env } from '@hooks/useEnv';

describe('useEnv hook', () => {
  const { API_URL }: Env = useEnv();

  test('Get API url', () => {
    expect(API_URL).toBe('http://localhost:4200/');
  });
});
