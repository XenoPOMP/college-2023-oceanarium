import Localization from '@localization/Localization';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import ru from '@locales/ru';
import kz from '@locales/kz';

const useLocalization = (): Localization => {
  const { language }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );

  switch (language) {
    case 'ru':
      return ru;
    case 'kz':
      return kz;
  }
};

export default useLocalization;
