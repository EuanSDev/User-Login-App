import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authNav: {
    open: false,
  }
};

const authSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleAuthNav(state) {
      state.authNav.open = !state.authNav.open;
    }
  },
});

export const { toggleAuthNav } = authSlice.actions;
export default authSlice.reducer