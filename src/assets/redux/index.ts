import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSettingsSlice from '@redux/reducers/appSettingsSlice';
import gallerySlice from '@redux/reducers/gallerySlice';
import authSlice from '@redux/reducers/authSlice';

const rootReducer = combineReducers({
  appSettings: appSettingsSlice,
  gallery: gallerySlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
