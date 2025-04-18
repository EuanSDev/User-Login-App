import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/store/authSlice";
import uiReducer from '@/store/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});