import { describe, expect, test } from 'vitest';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import VisitBlock from '@ui/VisitBlock/VisitBlock';

describe('Visit block', () => {
  const defaultOptions: RenderOptions = {
    useRedux: true,
  };

  test('Match snapshot with Pacific department', () => {
    expect(
      renderWithProviders(
        <VisitBlock
          visit={{
            visit_department: 'pacific',
            visit_pavilion: 5,
            visit_date: '2023-01-02',
          }}
        />,
        {
          ...defaultOptions,
        },
      ),
    ).toMatchSnapshot();
  });

  test('Match snapshot with Atlantic department', () => {
    expect(
      renderWithProviders(
        <VisitBlock
          visit={{
            visit_department: 'atlantic',
            visit_pavilion: 5,
            visit_date: '2023-01-02',
          }}
        />,
        {
          ...defaultOptions,
        },
      ),
    ).toMatchSnapshot();
  });

  test('Match snapshot with indian department', () => {
    expect(
      renderWithProviders(
        <VisitBlock
          visit={{
            visit_department: 'indian',
            visit_pavilion: 5,
            visit_date: '2023-01-02',
          }}
        />,
        {
          ...defaultOptions,
        },
      ),
    ).toMatchSnapshot();
  });

  test('Match snapshot with artic department', () => {
    expect(
      renderWithProviders(
        <VisitBlock
          visit={{
            visit_department: 'artic',
            visit_pavilion: 5,
            visit_date: '2023-01-02',
          }}
        />,
        {
          ...defaultOptions,
        },
      ),
    ).toMatchSnapshot();
  });

  test('Match snapshot with northern department', () => {
    expect(
      renderWithProviders(
        <VisitBlock
          visit={{
            visit_department: 'northern',
            visit_pavilion: 5,
            visit_date: '2023-01-02',
          }}
        />,
        {
          ...defaultOptions,
        },
      ),
    ).toMatchSnapshot();
  });

  test('Match snapshot with no department', () => {
    expect(
      renderWithProviders(
        <VisitBlock
          visit={{
            visit_department: '',
            visit_pavilion: 5,
            visit_date: '2023-01-02',
          }}
        />,
        {
          ...defaultOptions,
        },
      ),
    ).toMatchSnapshot();
  });
});
