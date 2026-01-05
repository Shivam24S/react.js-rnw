import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    usersList: userSlice,
  },
});

export default store;
