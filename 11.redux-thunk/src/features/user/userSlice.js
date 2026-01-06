import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestStart: (state) => {
      (state.loading = true), (state.error = null);
    },
    requestSuccess: (state, action) => {
      (state.loading = false), (state.users = action.payload);
    },
    requestFailed: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    addUserSuccess: (state, action) => {
      (state.loading = false), state.users.push(action.payload);
      console.log([...state.users]);
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
  },
});

export const {
  requestStart,
  requestSuccess,
  requestFailed,
  addUserSuccess,
  deleteUserSuccess,
} = user.actions;

export default user.reducer;
