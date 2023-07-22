import { createSlice } from '@reduxjs/toolkit';
import { getAdmin, login, register } from '../actions/admin.actions';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    user: null,
    loginStatus: false,
  },
  reducers: {
    logout: (state) => {
      window.location.href = '/login';
      localStorage.removeItem('x-auth-token');
      localStorage.removeItem('role');
      state.user = null;
      state.loginStatus = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loginStatus = true;
      localStorage.setItem('x-auth-token', action.payload.token);
      localStorage.setItem('role', "ADMIN");
      window.location.href = '/dashboard';
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loginStatus = true;
      localStorage.setItem('x-auth-token', action.payload.token);
      localStorage.setItem('role', "ADMIN");
      window.location.href = '/dashboard';
    });
    builder.addCase(getAdmin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loginStatus = true;
    });
  },
});

export const { logout } = adminSlice.actions;

export default adminSlice.reducer;