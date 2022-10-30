import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  data: null | [] | {access_token: string; refresh_token: string};
  description: string;
  message: string;
  errors: {};
}

interface AuthState {}

const initialState: AuthState = {};

const auth = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    onLogin(_, {}: PayloadAction<LoginPayload>) {},
    onLoginResponse(_, {payload}: PayloadAction<LoginResponse>) {
      const {data} = payload;
      if (data && !Array.isArray(data)) {
        // Store in local
      }
    },

    onRegister() {},
    onRegisterResponse() {},

    onForgotPassword() {},
    onForgotPasswordResponse() {},

    onVerifyUser() {},
    onVerifyUserResponse(_, {}: PayloadAction<LoginResponse>) {},
  },
});

export const {
  onLogin,
  onLoginResponse,
  onRegister,
  onRegisterResponse,
  onForgotPassword,
  onForgotPasswordResponse,
} = auth.actions;

export default auth.reducer;
