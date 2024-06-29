// store.js
import { configureStore } from '@reduxjs/toolkit';
import { sliceReducer } from './slice';

const store = configureStore({
  reducer: {
    movie: sliceReducer,
  },
});

export default store; // Ensure this is a default export
