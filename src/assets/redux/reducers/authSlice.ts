import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';
import { ac } from 'vitest/dist/types-aac763a5';

export type Authentication = {
  isLogged: boolean,
  _uid?: number,
  userRole?: 'visitor' | 'employee',
};

const initialState: Authentication = {
  isLogged: false,
};

const authSlice = createSlice({
  name: 'authenticationSlice',
  initialState,
  reducers: {
    login(state, action: ReduxAction<number>) {
      state._uid = action.payload;
    },

    loadData(state, action: ReduxAction<Authentication>) {
      state = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login, loadData } = authSlice.actions;
export const authInitial = authSlice.getInitialState();
