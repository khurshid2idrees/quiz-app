import { configureStore } from "@reduxjs/toolkit";
import quizeReducer from "../redux/questionSlice";

export const store = configureStore({
  reducer: {
    // put all the reducers here
    questions: quizeReducer,
  },
});
