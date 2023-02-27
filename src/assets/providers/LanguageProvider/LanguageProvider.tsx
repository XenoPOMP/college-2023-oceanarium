import { FC, useEffect } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import {
  AppSettings,
  changeLang,
  Language,
} from '@redux/reducers/appSettingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { useLocalStorage } from '@hooks/useLocalStorage';

const LanguageProvider: FC<ProviderProps> = ({ children }) => {
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

  return <>{children}</>;
};

export default LanguageProvider;
