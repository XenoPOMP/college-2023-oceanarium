import { describe, expect, test } from 'vitest';
import renderWithProviders from '@utils/renderWithProviders';
import AboutRestaurantPage from '@pages/restaurant/AboutRestaurantPage/AboutRestaurantPage';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('About restaurant page', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<AboutRestaurantPage />, {
        useRouter: true,
        useRedux: true,
      }),
    ).toMatchSnapshot();
  });
});
