import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Personal data tab', () => {
  test('Match snapshot', () => {
    expect(1);
  });
});
