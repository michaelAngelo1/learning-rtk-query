import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthTypes = {
  token: string;
}

const initialState: AuthTypes = {
  token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    }
  }
});

export const {setToken} = authSlice.actions;

export default authSlice.reducer;