import { createAsyncThunk } from "@reduxjs/toolkit";
import { USERAPI } from "../apis/user.api";

export const login = createAsyncThunk(
  "user/login",
  async (userCredentials, thunkAPI) => {
    try {
      const response = await USERAPI.login(userCredentials);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.error);
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (userDetails) => {
    const response = await USERAPI.register(userDetails);
    return response.data;
  }
);

export const addUser = createAsyncThunk("user/addUser", async (userDetails) => {
  const response = await USERAPI.addUser(userDetails);
  return response.data;
});

export const getUser = createAsyncThunk("user/getUser", async () => {
  const response = await USERAPI.getUser();
  return response.data;
});

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const response = await USERAPI.getUsers();
  return response.data;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (updateUserDetails) => {
    const response = await USERAPI.updateUser(
      updateUserDetails._id,
      updateUserDetails
    );
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    const response = await USERAPI.deleteUser(userId);
    return response.data;
  }
);