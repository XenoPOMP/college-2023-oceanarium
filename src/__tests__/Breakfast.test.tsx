import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';
import Breakfast from '@pages/restaurant/Breakfast/Breakfast';

describe.skipIf(skipTestCondition('FRONTEND'))('Breakfast page', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<Breakfast />, {
        useRouter: true,
        useRedux: true,
      }),
    ).toMatchSnapshot();
  });
});
