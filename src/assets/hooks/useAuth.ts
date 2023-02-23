import { Authentication, login, UserRole } from '@redux/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';

export type UseAuthHook = {
  isLogged: boolean,
  _uid?: number,
  userRole?: UserRole,
  loginUser: (uid: number, role: UserRole) => void,
};

const useAuth = (): UseAuthHook => {
  const { isLogged, _uid, userRole }: Authentication = useSelector(
    (state: StoreType) => state.auth,
  );
  const dispatch = useDispatch();

  return {
    isLogged,
    _uid,
    userRole,
    loginUser: (uid, role) => {
      dispatch(login({ uid, role }));
    },
  };
};

export default useAuth;
