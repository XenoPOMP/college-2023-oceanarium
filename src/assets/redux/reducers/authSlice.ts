import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';

export type UserRole = 'visitor' | 'employee';

export type Authentication = {
  isLogged: boolean,
  _uid?: number,
  userRole?: UserRole,
};

const initialState: Authentication = {
  isLogged: false,
  _uid: undefined,
  userRole: undefined,
};

const authSlice = createSlice({
  name: 'authenticationSlice',
  initialState,
  reducers: {
    login(state, action: ReduxAction<{ uid: number, role: UserRole }>) {
      state.isLogged = true;
      state._uid = action.payload.uid;
      state.userRole = action.payload.role;
    },

    loadData(state, action: ReduxAction<Authentication>) {
      const { isLogged, _uid, userRole } = action.payload;

      state.isLogged = isLogged;
      state._uid = _uid;
      state.userRole = userRole;
    },
  },
});

export default authSlice.reducer;
export const { login, loadData } = authSlice.actions;
export const authInitial = authSlice.getInitialState();
