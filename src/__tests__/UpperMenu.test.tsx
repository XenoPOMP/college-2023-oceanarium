import { describe, expect, test } from 'vitest';
import renderWithProvider from '@utils/renderWithProvider';
import { screen } from '@testing-library/react';
import App from '../App';

describe('Nav menu', () => {
  test('Render', () => {
    renderWithProvider(
      <>
        <App />
      </>,
    );

    expect(screen.getByRole('navigation')).toBeDefined();
  });
});
