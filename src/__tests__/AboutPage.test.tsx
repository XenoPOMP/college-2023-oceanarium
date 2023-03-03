import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import AboutPage from '@pages/AboutPage/AboutPage';

describe.skipIf(skipTestCondition('FRONTEND'))('About page', () => {
  const defaultOptions: RenderOptions = {
    useRedux: true,
    useRouter: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(<AboutPage />, {
        ...defaultOptions,
      }),
    ).toMatchSnapshot();
  });
});
