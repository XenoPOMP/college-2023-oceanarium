import { describe, expect, test } from 'vitest';
import parseDate from '@utils/parseDate';
import useEnv from '@hooks/useEnv';

const { TESTING_MODE } = useEnv();

describe.skipIf(TESTING_MODE !== 'FRONTEND')('Parse date function', () => {
  test('return value with empty date argument', () => {
    expect(parseDate('')).toBe('');
  });

  test('date parsing works', () => {
    expect(parseDate('2022-02-01, MSK 09:01')).toBe('01.02.2022');
  });
});
