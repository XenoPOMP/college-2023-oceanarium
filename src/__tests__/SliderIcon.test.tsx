import { describe, expect, test } from 'vitest';
import SliderIcon from '@ui/SliderIcon/SliderIcon';
import renderWithProvider from '@utils/renderWithProvider';
import styles from '@ui/SliderIcon/SliderIcon.module.scss';
import { fireEvent, screen } from '@testing-library/react';

describe('Slider icon', () => {
  test('Render with index', () => {
    const component = renderWithProvider(<SliderIcon index={0} />);

    expect(component).toMatchSnapshot();
  });

  test('Correct src insert', () => {
    const component = renderWithProvider(<SliderIcon index={0} />);

    expect(component.asFragment().querySelector('img')?.src).toBeDefined();
  });

  test('Correct transform generation', () => {
    const component = renderWithProvider(<SliderIcon index={0} />);
    const sx = document
      .querySelector(`div.${styles.icon}`)
      ?.getAttribute('style');

    expect(sx).toBe(`left: calc(50% - (60px / 2);`);
  });

  test('Correct transform generation with index 1', () => {
    const component = renderWithProvider(<SliderIcon index={1} />);
    const sx = document
      .querySelector(`div.${styles.icon}`)
      ?.getAttribute('style');

    expect(sx).toBe(null);
  });

  test('Image child renders', () => {
    renderWithProvider(<SliderIcon index={0} />);

    expect(screen.getByRole('img')).toBeDefined();
  });
});
