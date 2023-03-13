import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import VisitorAccountPage from '@pages/VisitorAccountPage/VisitorAccountPage';

describe.skipIf(skipTestCondition('FRONTEND'))('Visitor account page', () => {
  const defaultConfig: RenderOptions = {
    useRedux: true,
    useQuery: true,
    useRouter: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(<VisitorAccountPage />, {
        ...defaultConfig,
      }),
    ).toMatchSnapshot();
  });
});
