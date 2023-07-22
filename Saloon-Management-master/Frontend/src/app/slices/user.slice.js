import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addUser, deleteUser, getUser, getUsers, login, register, updateUser } from '../actions/user.actions';

const getUserByIdFunc = (userList, userId) => {
  const result = userList.filter(function (el) {
    return el._id === userId;
  });
  return result ? result[0] : null; // or undefined
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    selectedUser: null,
    users: [],
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
    getUserById: (state, action) => {
      state.selectedUser = getUserByIdFunc(state.users, action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loginStatus = true;
      toast.success(action.payload);
      localStorage.setItem('x-auth-token', action.payload.token);
      localStorage.setItem('role', "USER");
      window.location.href = '/';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginStatus = false;
      toast.error(action.payload);
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loginStatus = true;
      localStorage.setItem('x-auth-token', action.payload.token);
      localStorage.setItem('role', "USER");
      window.location.href = '/';
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users = [...state.users, action.payload];
      toast.success("User Added Successfull");
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loginStatus = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((x) => (x._id === action.payload._id ? action.payload : x));
      toast.success("User Edited Successfull");
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((x) => x._id !== action.payload._id);
    });
  },
});

export const { logout, getUserById } = userSlice.actions;

export default userSlice.reducer;