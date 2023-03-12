import { describe, expect, test } from 'vitest';
import renderWithProviders from '@utils/renderWithProviders';
import ChildrenMenuPage from '@pages/restaurant/ChildrenMenuPage/ChildrenMenuPage';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Children menu page', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<ChildrenMenuPage />, {
        useRedux: true,
        useRouter: true,
      }),
    ).toMatchSnapshot();
  });
});
