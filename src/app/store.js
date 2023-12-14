import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./features/studentSlice";
import productSlice from "./features/productSlice";
import userSlice from './features/userSlice';

const store = configureStore({
  reducer: {
    studentSlice,
    productSlice,
    userSlice,
    
  },
});

export default store;
