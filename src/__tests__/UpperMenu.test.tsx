import { describe, expect, test } from 'vitest';
import renderWithProvider from '@utils/renderWithProvider';
import { screen } from '@testing-library/react';
import App from '../App';
import useEnv from '@hooks/useEnv';

//
// Этот компонент отвечает за навбар (верхнее меню).
//

const { TESTING_MODE } = useEnv();

describe.skipIf(TESTING_MODE === 'BACKEND')('Nav menu', () => {
  // Ожидаем, что навбар отрендерился
  test('Render', () => {
    // Рендерим все приложение
    renderWithProvider(
      <>
        <App />
      </>,
    );

    // Ожидаем, что навигация отрендерилась.
    expect(screen.getByRole('navigation')).toBeDefined();
  });
});
