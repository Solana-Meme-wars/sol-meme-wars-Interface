// store.js
import { configureStore } from '@reduxjs/toolkit';
import dummyDataReducer from './dummyData/dummyDataSlice';
import nftSliceReducer from './main Data/nftsSlice';


const store = configureStore({
  reducer: {
    dummyData: dummyDataReducer,
    nft :nftSliceReducer,
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
