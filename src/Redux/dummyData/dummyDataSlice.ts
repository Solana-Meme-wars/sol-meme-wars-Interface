// slices/userProfilesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { dummyHotNft, dummyNft, dummyNftData, dummyRecentNft, dummyTrendingNft, dummyUserProfiles, dummyVisitedNft } from '../../data/dummyData';
import { dummyHotNftType, dummyNftDataProps, dummyNftType, dummyRecentNftType, dummyTrendingNftType, dummyUserProfilesProps, dummyVisitedNftType } from '../../libs/types';

export type InitialStateType = {
  profiles: dummyUserProfilesProps,
  nfts: dummyNftType[],
  visitedNft: dummyVisitedNftType[],
  hotNfts:dummyHotNftType[],
  trendingNft:dummyTrendingNftType[],
  recentNft:dummyRecentNftType[],
  nftData: dummyNftDataProps,
}

const initialState:InitialStateType = {
  profiles: dummyUserProfiles, // Store the dummy data here
  nfts: dummyNft,
  visitedNft : dummyVisitedNft,
  hotNfts: dummyHotNft,
  trendingNft:dummyTrendingNft  ,
  recentNft: dummyRecentNft,
  nftData:dummyNftData,
};

const dymmyDataSlice = createSlice({
  name: 'dummyData',
  initialState,
  reducers: {
    setProfiles(state, action) {
      state.profiles = action.payload;
    },
  },
});

export const { setProfiles } = dymmyDataSlice.actions;
export default dymmyDataSlice.reducer;
