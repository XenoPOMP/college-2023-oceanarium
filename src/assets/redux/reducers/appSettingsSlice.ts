import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';

export type Language = 'ru' | 'kz';

export type AppSettings = {
  language: Language,
  appVersion: string,
  cookiePrefix: string,
};

const initialState: AppSettings = {
  language: 'ru',
  appVersion: '1.13.3',
  cookiePrefix: 'taldyk',
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    changeLang(state, action: ReduxAction<Language>) {
      state.language = action.payload;
    },
  },
});

export default appSettingsSlice.reducer;
export const { changeLang } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
