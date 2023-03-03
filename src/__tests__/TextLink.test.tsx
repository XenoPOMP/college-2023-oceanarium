import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import TextLink from '@ui/TextLink/TextLink';
import useEnv from '@hooks/useEnv';
import renderWithProviders from '@utils/renderWithProviders';

const { TESTING_MODE } = useEnv();

describe.skipIf(TESTING_MODE !== 'FRONTEND' && TESTING_MODE !== 'FULLSTACK')(
  'Text link',
  () => {
    const mockText = 'Simple text';
    const mockHref = 'http://localhost:4200/';

    test('Link "a" tag is rendering', () => {
      render(<TextLink type={'external'} text={mockText} />);

      expect(document.querySelector('a')).toBeDefined();
    });

    test('Text rendering properly', () => {
      render(<TextLink type={'external'} text={mockText} />);

      expect(document.querySelector('a')?.text).toBe(mockText);
    });

    test('CSS styles injection', () => {
      render(
        <TextLink
          type={'external'}
          text={mockText}
          css={{
            fontSize: '12px',
            fontWeight: 'light',
          }}
        />,
      );

      const styles = document.querySelector('a')?.style;
      const { fontSize, fontWeight } = styles
        ? styles
        : {
            fontSize: undefined,
            fontWeight: undefined,
          };

      expect(fontSize).toBe('12px');
      expect(fontWeight).toBe(`300`);
    });

    test('href injection', () => {
      render(<TextLink type={'external'} text={mockText} href={mockHref} />);

      expect(document.querySelector('a')?.href).toBe(mockHref);
    });

    test('Router link injection', () => {
      renderWithProviders(
        <>
          <TextLink type={'external'} isRouterLink href={'/'} />
          <TextLink type={'external'} isRouterLink href={'/main'} />
        </>,
        {
          useRouter: true,
        },
      );

      expect(document.querySelectorAll('a')[0]?.href).toBe(
        'http://localhost:3000/',
      );
      expect(document.querySelectorAll('a')[1]?.href).toBe(
        'http://localhost:3000/main',
      );
    });

    test('Font color injection', () => {
      interface IExtenderCSSProperties extends CSSStyleDeclaration {
        _values: {
          '--initial-color'?: string,
          '--hover-color'?: string,
        };
      }

      renderWithProviders(
        <TextLink
          type={'external'}
          colors={{
            initial: 'red',
            hover: 'yellow',
          }}
        />,
      );

      // @ts-ignore
      const styles: IExtenderCSSProperties | undefined =
        document.querySelector('a')?.style;

      console.log(styles);

      expect(document.querySelector('a')).toBeDefined();
      // @ts-ignore
      expect(styles._values['--initial-color']).toBe('red');
      // @ts-ignore
      expect(styles._values['--hover-color']).toBe('yellow');
    });

    test('Icon injection', () => {
      render(<TextLink type={'external'} />);

      expect(document.querySelector('svg')).toBeDefined();
    });
  },
);
