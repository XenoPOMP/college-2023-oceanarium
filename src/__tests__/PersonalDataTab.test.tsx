import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import PersonalDataTab from '@tabs/PersonalDataTab/PersonalDataTab';

describe.skipIf(skipTestCondition('FRONTEND'))('Personal data tab', () => {
  const defaultOptions: RenderOptions = {
    useRedux: true,
    useQuery: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(<PersonalDataTab />, {
        ...defaultOptions,
      }),
    ).toMatchSnapshot();
  });
});
