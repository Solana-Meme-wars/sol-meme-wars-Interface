import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'; 
import { dummyNftType } from '../../libs/types';
import { FormDataType } from '../../components/common/PostNft';

const API_URL = 'https://solana-meme-wars-backend.vercel.app';


interface NftState {
  nfts: dummyNftType[],
  loading:boolean
}

// Initial state
const initialState: NftState = {
  nfts: [],
  loading:false
};

// Fetch NFTs  
export const fetchNfts = createAsyncThunk<dummyNftType[], void, { rejectValue: string }>(
  'nfts/fetchNfts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<dummyNftType[]>(`${API_URL}/api/posts`);
      console.log("data....");
      console.log(response.data); 
        
      return response.data; // Assume the API returns an array of profiles
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profiles');
    }
  }
);


// Post Nfts
export const postNfts = createAsyncThunk< any, FormDataType, { rejectValue: string }>(
  'nfts/postNfts',
  async (formData , { rejectWithValue }) => {
    console.log("form data....");
    console.log(formData);
    try {
      const response = await axios.post(`${API_URL}/api/posts`,formData);
      console.log("data....");
      console.log(response.data); 
      return response.data;  
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || 'Failed to fetch profiles');
    }
  }
);



// Slice
const nftSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchNfts
      .addCase(fetchNfts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNfts.fulfilled, (state, action : PayloadAction<dummyNftType[]>) => {
        state.loading = false;
        state.nfts = action.payload; // Set the profile object
      })
      .addCase(fetchNfts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(postNfts.pending, (state) => {
        state.loading = true;
      })
      .addCase(postNfts.fulfilled, (state) => {
        state.loading = false; 
      })
      .addCase(postNfts.rejected, (state) => {
        state.loading = false;
      })
  },
});

// export const { fetchNfts } = nftSlice.actions

export default nftSlice.reducer;
