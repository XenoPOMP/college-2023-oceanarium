import { describe, expect, test } from 'vitest';
import renderWithProvider from '@utils/renderWithProvider';
import { screen } from '@testing-library/react';
import App from '../App';

//
// Этот компонент отвечает за навбар (верхнее меню).
//

describe('Nav menu', () => {
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
