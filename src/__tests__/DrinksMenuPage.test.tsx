import { describe, expect, test } from 'vitest';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import DrinksMenuPage from '@pages/restaurant/DrinksMenuPage/DrinksMenuPage';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Drinks menu page', () => {
  const defaultConfig: RenderOptions = {
    useRedux: true,
    useRouter: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(<DrinksMenuPage />, {
        ...defaultConfig,
      }),
    ).toMatchSnapshot();
  });
});
