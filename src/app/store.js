import { configureStore } from '@reduxjs/toolkit';
import markUpSlice from '../components/markUpSlice';

export default configureStore({
  reducer: {
    markUp: markUpSlice,
  },
});