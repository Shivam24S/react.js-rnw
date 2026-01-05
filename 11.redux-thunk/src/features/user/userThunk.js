import axios from "axios";
import { requestFailed, requestStart, requestSuccess } from "./userSlice";

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(requestStart());

    try {
      const res = await axios("https://jsonplaceholder.typicode.com/users");

      const data = res.data;

      dispatch(requestSuccess(data));
    } catch (error) {
      dispatch(requestFailed(error.message));
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    // dispatch(requestStart());

    console.log("new user",user)

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        user
      );

      dispatch(addUser(user));
    } catch (error) {
      dispatch(requestFailed(error.message));
    }
  };
};
