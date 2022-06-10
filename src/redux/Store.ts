import { configureStore } from "@reduxjs/toolkit";
import animalsReducer from "../redux/features/AnimalsSlice";
import notisReducer from "../redux/features/NotisSlice";

export default configureStore({
  reducer: {
    animals: animalsReducer,
    notis: notisReducer,
  },
});
