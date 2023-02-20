import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { Gallery } from '@redux/reducers/gallerySlice';
import { Authentication } from '@redux/reducers/authSlice';

export type StoreType = {
  appSettings: AppSettings,
  gallery: Gallery,
  auth: Authentication,
};

export type ReduxAction<A> = {
  payload: A,
  type: string,
};
