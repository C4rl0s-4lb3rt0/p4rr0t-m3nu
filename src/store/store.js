import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { menuSlice } from './menu';

export const store = configureStore({
  reducer: {
      auth: authSlice.reducer,
      menu: menuSlice.reducer
  }
})