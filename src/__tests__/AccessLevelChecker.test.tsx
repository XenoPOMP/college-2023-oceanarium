import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import AccessLevelChecker from '@components/AccessLevelChecker/AccessLevelChecker';

describe.skipIf(skipTestCondition('FRONTEND'))(
  'Access level check overlay',
  () => {
    const defaultConfig: RenderOptions = {
      useRedux: true,
      useRouter: true,
    };

    test('Match snapshot', () => {
      expect(
        renderWithProviders(<AccessLevelChecker preferredRole={'visitor'} />, {
          ...defaultConfig,
        }),
      ).toMatchSnapshot();
    });

    test('Body scroll property change', () => {
      renderWithProviders(<AccessLevelChecker preferredRole={'visitor'} />, {
        ...defaultConfig,
      });

      expect(document.body.style.overflowY).toBe('hidden');
    });
  },
);
