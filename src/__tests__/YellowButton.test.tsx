import { describe, expect, test, vitest } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import YellowButton from '../assets/components/ui/YellowButton/YellowButton';
import styles from '@ui/YellowButton/YellowButton.module.scss';
import useEnv from '@hooks/useEnv';

const { TESTING_MODE } = useEnv();

describe.skipIf(TESTING_MODE === 'BACKEND')('YellowButton ', () => {
  test('Callback test', () => {
    // Этот "шпион" следит за каждым вызовом метода
    // console.log
    const logSpy = vitest.spyOn(console, 'log');
    // Строка, которую "шпион" ожидает, что она
    // будет передана в метод console.log
    const callString = 'Hello world!';

    // Рендерим кнопку
    render(
      <YellowButton
        onClick={() => {
          console.log(callString);
        }}
      />,
    );

    // Выбираем кнопку
    const button = document.querySelector(`div.${styles.button}`);
    // Если она отрендерилась, то вызываем у нее
    // событие click
    if (button) {
      fireEvent.click(button);
    }

    // Тест ожидает, что "шпион" заметит вызов метода
    // с переданным в него нашей строчкой
    expect(logSpy).toHaveBeenCalledWith(callString);
  });
});
