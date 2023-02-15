import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { Gallery } from '@redux/reducers/gallerySlice';

export type StoreType = {
  appSettings: AppSettings,
  gallery: Gallery,
};

export type ReduxAction<A> = {
  payload: A,
  type: string,
};
