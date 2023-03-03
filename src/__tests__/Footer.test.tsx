import { describe, expect, test } from 'vitest';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';
import Footer from '@ui/Footer/Footer';

describe.skipIf(skipTestCondition('FRONTEND'))('Footer', () => {
  const defaultOptions: RenderOptions = {
    useRedux: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(<Footer />, {
        ...defaultOptions,
      }),
    ).toMatchSnapshot();
  });
});
