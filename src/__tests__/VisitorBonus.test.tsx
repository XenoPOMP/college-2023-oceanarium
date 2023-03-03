import { describe, expect, test } from 'vitest';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';
import VisitorBonus from '@ui/VisitorBonus/VisitorBonus';

describe.skipIf(skipTestCondition('FRONTEND'))('Visitor bonus', () => {
  const defaultOptions: RenderOptions = {
    useRedux: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(
        <VisitorBonus
          bonus={{
            bonus_amount: 12,
            bonus_purpose: 'visit',
            bonus_date: '2023-01-02',
          }}
        />,
        {
          ...defaultOptions,
        },
      ),
    ).toMatchSnapshot();
  });

  test('Match snapshot with no purpose provided', () => {
    expect(
      renderWithProviders(
        <VisitorBonus
          bonus={{
            bonus_amount: 12,
            bonus_purpose: '',
            bonus_date: '2023-01-02',
          }}
        />,
        {
          ...defaultOptions,
        },
      ),
    ).toMatchSnapshot();
  });
});
