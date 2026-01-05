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
    addUser: (state, action) => {
      (state.loading = false), state.users.push(action.payload);
      console.log([...state.users])
    },
  },
});

export const { requestStart, requestSuccess, requestFailed } = user.actions;

export default user.reducer;
