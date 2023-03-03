import { describe, expect, test } from 'vitest';
import SliderIcon from '@ui/SliderIcon/SliderIcon';
import renderWithProviders from '@utils/renderWithProviders';
import styles from '@ui/SliderIcon/SliderIcon.module.scss';
import { fireEvent, screen } from '@testing-library/react';
import useEnv from '@hooks/useEnv';
import skipTestCondition from '@utils/skipTestCondition';

//
// Этот компонент - иконка снизу галереи.
//

describe.skipIf(skipTestCondition('FRONTEND'))('Slider icon', () => {
  // Ожидаем, что компонент соответсвует прототипу.
  test('Render with index', () => {
    const component = renderWithProviders(<SliderIcon index={0} />, {
      useRedux: true,
    });

    expect(component).toMatchSnapshot();
  });

  // Проверяем, вставляется ли аттрубут src в тег img.
  test('Correct src insert', () => {
    const component = renderWithProviders(<SliderIcon index={0} />, {
      useRedux: true,
    });

    expect(component.asFragment().querySelector('img')?.src).toBeDefined();
  });

  // Проверяем, добавляется ли смещение иконки
  test('Correct transform generation', () => {
    // Рендерим кнопку
    renderWithProviders(<SliderIcon index={0} />, {
      useRedux: true,
    });

    // Берем аттрибут style из кнопки (если она существует).
    const sx = document
      .querySelector(`div.${styles.icon}`)
      ?.getAttribute('style');

    // Проверка на то, что аттрибут style существует и он равен следующему.
    expect(sx).toBe(`left: calc(50% - (60px / 2);`);
  });

  // Проверка на несуществуещем слайде из галлереи.
  // Смещение не должно быть вставлено, так как в галерее 0 слайдов
  test('Correct transform generation with index 1', () => {
    // Рендерим кнопку
    renderWithProviders(<SliderIcon index={1} />, {
      useRedux: true,
    });

    // Берем аттрибут style из кнопки (если она существует).
    const sx = document
      .querySelector(`div.${styles.icon}`)
      ?.getAttribute('style');

    // Проверяем, чтобы смещение было нулевым.
    expect(sx).toBe(null);
  });

  // Проверяем, что изображение было срендерино.
  test('Image child renders', () => {
    // Рендерим кнопку
    renderWithProviders(<SliderIcon index={0} />, {
      useRedux: true,
    });

    // Проверяем, что тег img был отрендерен
    expect(screen.getByRole('img')).toBeDefined();
  });
});
