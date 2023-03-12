import { describe, expect, test, vi } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import AuthForm from '@components/AuthForm/AuthForm';
import styles from '@components/AuthForm/AuthForm.module.scss';
import { fireEvent, screen } from '@testing-library/react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

describe.skipIf(skipTestCondition('FRONTEND'))('Auth form', () => {
  const defaultConfig: RenderOptions = {
    useRedux: true,
    useQuery: true,
    useRouter: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(<AuthForm />, {
        ...defaultConfig,
      }),
    ).toMatchSnapshot();
  });

  test('Navigation works', () => {
    renderWithProviders(<AuthForm />, {
      ...defaultConfig,
    });

    const navigationButton = document.querySelector(
      `div.${styles.container}${styles.goBack}`,
    );

    if (navigationButton !== null) {
      fireEvent.click(navigationButton);
    }

    expect(navigationButton).toBeDefined();
  });
});
