import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userId: null,
  userName: null,
  isAuth: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    initialiseAuth(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.isAuth = action.payload.isAuth;
      state.isLoading = false;
    },

    login(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.isAuth = true;
      state.isLoading = false;
    },

    logout(state) {
      state.token = null;
      state.userId = null;
      state.userName = null;
      state.isAuth = false;
      state.isLoading = false;
    },

    setLoading(state, action) {
      state.isLoading = action.payload;
    }

  },
});

export const { initialiseAuth, login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer