import { FC, useEffect } from 'react';
import {
  Authentication,
  authInitial,
  loadData,
} from '@redux/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { ProviderProps } from '@providers/Provider.props';

const AuthProvider: FC<ProviderProps> = ({ children }) => {
  const { cookiePrefix }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );
  const authData: Authentication = useSelector(
    (state: StoreType) => state.auth,
  );
  const dispatch = useDispatch();

  // prettier-ignore
  const [getData, setData] = useLocalStorage<Authentication>(`${cookiePrefix}-auth`, authInitial);

  // Get auth data from local storage
  useEffect(() => {
    dispatch(loadData(getData));
  }, []);
  // Save auth data when it`s changing
  useEffect(() => {
    setData(authData);
  }, [authData]);

  return <>{children}</>;
};

export default AuthProvider;
