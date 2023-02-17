import { describe, expect, test } from 'vitest';
import SliderIcon from '@ui/SliderIcon/SliderIcon';
import renderWithProvider from '@utils/renderWithProvider';

describe('Slider icon', () => {
  test('Render with index', () => {
    const component = renderWithProvider(<SliderIcon index={0} />);

    expect(component).toMatchSnapshot();
  });

  test('Correct src insert', () => {
    const component = renderWithProvider(<SliderIcon index={0} />);

    expect(component.asFragment().querySelector('img')?.src).toBeDefined();
  });
});
