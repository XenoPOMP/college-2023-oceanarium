import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import VisitsTab from '@tabs/VisitsTab/VisitsTab';
import parentStyles from '@sections/VisitorAccount/VisitorAccount.module.scss';
import useLocalization from '@hooks/useLocalization';

describe.skipIf(skipTestCondition('FRONTEND'))('Visits tab', () => {
  const defaultConfig: RenderOptions = {
    useRouter: true,
    useRedux: true,
    useQuery: true,
  };

  test('Match snapshot', async () => {
    expect(
      renderWithProviders(<VisitsTab />, {
        ...defaultConfig,
      }),
    ).toMatchSnapshot();
  });

  test('Error is displaying', async () => {
    renderWithProviders(<VisitsTab />, {
      ...defaultConfig,
    });
    const messageElement = document.querySelector(
      `div.${parentStyles.serverMessagePlaceholder}`,
    );

    expect(messageElement).toBeDefined();
  });
});
