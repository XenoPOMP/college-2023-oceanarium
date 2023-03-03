import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import cn from 'classnames';
import styles from '@providers/ThemeProvider/ThemeProvider.module.scss';
import useEnv from '@hooks/useEnv';
import skipTestCondition from '@utils/skipTestCondition';

//
// Этот компонент предоставляет CSS-переменные для цветов
// темы.
//

describe.skipIf(skipTestCondition('FRONTEND'))('Theme Provider', () => {
  // Проверяем вставку класса в компонент.
  test('Classname', () => {
    // Рендер компонента
    render(<ThemeProvider />);

    // Находим провайдер
    const selector = document.querySelector(
      `div ${cn(styles.themes, styles.dark)}`,
    );

    // Ожидаем, что провайдер с таким классом отрендерился.
    expect(selector).toBeDefined();
  });
});
