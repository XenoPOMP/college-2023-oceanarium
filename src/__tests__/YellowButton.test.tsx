import { describe, expect, test, vitest } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import YellowButton from '../assets/components/ui/YellowButton/YellowButton';

describe('YellowButton ', () => {
  test('Callback test', () => {
    const logSpy = vitest.spyOn(console, 'log');
    const callString = 'Hello world!';

    const component = render(
      <YellowButton
        onClick={() => {
          console.log(callString);
        }}
      />,
    );

    fireEvent.click(component.asFragment());

    expect(logSpy).toHaveBeenCalledWith(callString);
  });
});
