import { describe, expect, test } from 'vitest';
import renderWithProviders from '@utils/renderWithProviders';
import CorporateMenuPage from '@pages/restaurant/CorporateMenuPage/CorporateMenuPage';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Corporate menu page', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<CorporateMenuPage />, {
        useRouter: true,
        useRedux: true,
      }),
    ).toMatchSnapshot();
  });
});
