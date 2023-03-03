import { describe, expect, test } from 'vitest';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';
import NotFound from '@pages/NotFound/NotFound';

describe.skipIf(skipTestCondition('FRONTEND'))('Not found page', () => {
  const defaultOptions: RenderOptions = {
    useRedux: true,
    useRouter: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(<NotFound />, {
        ...defaultOptions,
      }),
    );
  });
});
