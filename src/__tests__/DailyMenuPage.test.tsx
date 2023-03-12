import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';
import DailyMenuPage from '@pages/restaurant/DailyMenuPage/DailyMenuPage';

describe.skipIf(skipTestCondition('FRONTEND'))('Daily menu page', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<DailyMenuPage />, {
        useRedux: true,
        useRouter: true,
      }),
    ).toMatchSnapshot();
  });
});
