import {createSlice} from '@reduxjs/toolkit';

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  initialState,
  name: 'loader',
  reducers: {
    startLoader(state) {
      state.isLoading = true;
    },
    stopLoader(state) {
      state.isLoading = false;
    },
  },
});

export const {startLoader, stopLoader} = loaderSlice.actions;

export default loaderSlice.reducer;
