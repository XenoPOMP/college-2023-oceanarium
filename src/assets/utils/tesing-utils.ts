import { RenderOptions } from '@testing-library/react';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { configureStore } from '@reduxjs/toolkit';

interface IExtendedRenderOptions extends RenderOptions {
  withRouter?: boolean;
  routerHistory?: string[];
  withRedux?: boolean;
  mockInitialState?: AppSettings;
  withQueryProvider?: boolean;
}

// Src: https://dev.to/niubo/react-testing-library-custom-render-with-options-for-providers-222o
