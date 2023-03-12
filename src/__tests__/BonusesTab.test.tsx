import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import BonusesTab from '@tabs/BonusesTab/BonusesTab';

describe.skipIf(skipTestCondition('FRONTEND'))('Visitor`s bonuses tab', () => {
  const defaultConfig: RenderOptions = {
    useRedux: true,
    useQuery: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(<BonusesTab />, {
        ...defaultConfig,
      }),
    ).toMatchSnapshot();
  });
});
