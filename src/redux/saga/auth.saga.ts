import {PayloadAction} from '@reduxjs/toolkit';
import {takeLatest} from 'redux-saga/effects';
import {
  LoginPayload,
  onForgotPassword,
  onLogin,
  onRegister,
} from '../slices/auth.slice';

function* handleLogin({payload}: PayloadAction<LoginPayload>) {
  // API CALL
  console.log('LOGIN CLICKED', payload);
}

function* handlerRegister() {
  console.log('REGISTER CLICKED');
}

function* handleForgotPassword() {
  console.log('FORGOT PASSWORD CLICKED');
}

export default function* authSaga() {
  yield takeLatest(onLogin.type, handleLogin);
  yield takeLatest(onRegister.type, handlerRegister);
  yield takeLatest(onForgotPassword.type, handleForgotPassword);
}
