import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import VisitorAccount from '@sections/VisitorAccount/VisitorAccount';
import styles from '@components/sections/VisitorAccount/VisitorAccount.module.scss';
import { ReactNode } from 'react';
import { fireEvent } from '@testing-library/react';

describe.skipIf(skipTestCondition('FRONTEND'))(
  'Visitor account section',
  () => {
    const defaultConfig: RenderOptions = {
      useRedux: true,
      useQuery: true,
    };

    test('Match snapshot', () => {
      expect(
        renderWithProviders(<VisitorAccount />, {
          ...defaultConfig,
        }),
      ).toMatchSnapshot();
    });

    test('Page changing works', () => {
      renderWithProviders(<VisitorAccount />, {
        ...defaultConfig,
      });

      const buttons: NodeListOf<HTMLButtonElement> =
        document.querySelectorAll('button');

      buttons.forEach((button) => {
        const classList = button.classList;
        fireEvent.click(button);

        expect(classList.contains(styles.chosen));
      });
    });
  },
);
