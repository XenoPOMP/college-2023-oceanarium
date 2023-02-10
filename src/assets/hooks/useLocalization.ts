import Localization from '@localization/Localization';
import {
  AppSettings,
  changeLang,
  Language,
} from '@redux/reducers/appSettingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import ru from '@locales/ru';
import kz from '@locales/kz';
import { useEffect } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';

const useLocalization = (): Localization => {
  const { language, cookiePrefix }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );
  const dispatch = useDispatch();
  // prettier-ignore
  const [getLang, setLang] = useLocalStorage<Language>(`${cookiePrefix}-lang`, 'ru');

  // Get lang from local storage
  useEffect(() => {
    dispatch(changeLang(getLang));
  }, []);
  // Update local storage language
  useEffect(() => {
    setLang(language);
  }, [language]);

  switch (language) {
    case 'ru':
      return ru;
    case 'kz':
      return kz;
  }
};

export default useLocalization;
