import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ErrorState {
  error: boolean;
  message: string;
}

const initialState: ErrorState = {
  error: false,
  message: '',
};

const errorSlice = createSlice({
  initialState,
  name: 'error',
  reducers: {
    setError(state, {payload}: PayloadAction<string>) {
      state.error = true;
      state.message = payload;
    },
    clearError(state) {
      state.error = false;
      state.message = '';
    },
  },
});

export const {clearError, setError} = errorSlice.actions;

export default errorSlice.reducer;
