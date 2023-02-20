import { Authentication, UserRole } from '@redux/reducers/authSlice';
import { useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';

export type UseAuthHook = {
  isLogged: boolean,
  _uid?: number,
  userRole?: UserRole,
};

const useAuth = (): UseAuthHook => {
  const { isLogged, _uid, userRole }: Authentication = useSelector(
    (state: StoreType) => state.auth,
  );

  return {
    isLogged,
    _uid,
    userRole,
  };
};

export default useAuth;
