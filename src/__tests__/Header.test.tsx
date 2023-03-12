import { describe, expect, test } from 'vitest';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import Header from '@ui/Header/Header';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Header', () => {
  const renderConfig: RenderOptions = {
    useRedux: true,
    useRouter: true,
  };

  test('Header render <header /> tag anyway', () => {
    const mainHeader = renderWithProviders(<Header variant={'main'} />, {
      ...renderConfig,
    });

    const restaurantHeader = renderWithProviders(
      <Header variant={'restaurant'} />,
      {
        ...renderConfig,
      },
    );

    expect(mainHeader.findByRole('heading')).toBeDefined();
    expect(restaurantHeader.findByRole('heading')).toBeDefined();
  });
});
