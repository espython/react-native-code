import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types';

const initialState: User = {
  isAuth: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    //vvv
    setUserData(state, action: PayloadAction<User>) {
      const userData = action.payload;
      return { ...state, ...userData };
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
