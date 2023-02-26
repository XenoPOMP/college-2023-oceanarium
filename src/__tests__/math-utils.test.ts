import { describe, expect, test } from 'vitest';
import { summary } from '@utils/math-utils';
import useEnv from '@hooks/useEnv';

const { TESTING_MODE } = useEnv();

describe.skipIf(TESTING_MODE === 'BACKEND')('Math utils', () => {
  test('summary function return value with no arguments provided', () => {
    expect(summary()).toBe(0);
  });

  test('summary function return correct sum', () => {
    expect(summary(1, 2, 3)).toBe(6);
  });

  test('negative sum', () => {
    expect(summary(-1, -4, 0, 2)).toBe(-3);
  });
});
