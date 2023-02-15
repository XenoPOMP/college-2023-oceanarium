import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSettingsSlice from '@redux/reducers/appSettingsSlice';
import gallerySlice from '@redux/reducers/gallerySlice';

const rootReducer = combineReducers({
  appSettings: appSettingsSlice,
  gallery: gallerySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
