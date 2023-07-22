import { createAsyncThunk } from '@reduxjs/toolkit';
import { USERAPI } from '../apis/admin.api';

export const login = createAsyncThunk('admin/login', async (userCredentials) => {
  const response = await USERAPI.login(userCredentials);
  return response.data;
});

export const register = createAsyncThunk('admin/register', async (userDetails) => {
  const response = await USERAPI.register(userDetails);
  return response.data;
});

export const getAdmin = createAsyncThunk('admin/getAdmin', async () => {
  const response = await USERAPI.getAdmin();
  return response.data;
});