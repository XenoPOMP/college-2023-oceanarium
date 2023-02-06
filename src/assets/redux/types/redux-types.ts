import { AppSettings } from '@redux/reducers/appSettingsSlice';

export type StoreType = {
  appSettings: AppSettings,
};

export type ReduxAction<A> = {
  payload: A,
  type: string,
};
