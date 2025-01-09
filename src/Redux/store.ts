// store.js
import { configureStore } from '@reduxjs/toolkit';
import dummyDataReducer from './dummyData/dummyDataSlice';


const store = configureStore({
  reducer: {
    dummyData: dummyDataReducer,
  },

});

export type RootState = ReturnType<typeof store.getState>;

export default store;
