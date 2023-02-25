import { describe, expect, test } from 'vitest';
import { summary } from '@utils/math-utils';

describe('Math utils', () => {
  test('summary function return value with no arguments provided', () => {
    expect(summary()).toBe(0);
  });

  test('summary function return correct sum', () => {
    expect(summary(1, 2, 3)).toBe(6);
  });
});
