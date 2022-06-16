import { configureStore } from "@reduxjs/toolkit";
import notisReducer from "../redux/features/NotisSlice";

export default configureStore({
  reducer: {
    notis: notisReducer,
  },
});
