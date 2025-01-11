import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { userProfilesProps } from '../../libs/types';
 
 
interface ProfileState {
  profile: userProfilesProps | null;  
  loading: boolean;
}

// Initial state
const initialState: ProfileState = {
  profile: null, 
  loading: false,
};

 
export const fetchProfile = createAsyncThunk<userProfilesProps, void, { rejectValue: string }>(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<userProfilesProps>('https://example.com/api/profile');
      return response.data; // Assuming API returns the user profile object
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profile');
    }
  }
);

// Update user profile (POST request)
export const updateProfile = createAsyncThunk<userProfilesProps, userProfilesProps, { rejectValue: string }>(
  'profile/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await axios.post<userProfilesProps>('https://example.com/api/profile', profileData);
      return response.data; // Assuming API returns the updated profile
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to update profile');
    }
  }
);

// Profile slice
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchProfile
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<userProfilesProps>) => {
        state.loading = false;
        state.profile = action.payload; // Set the profile object
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.loading = false;
      })
      // Handle updateProfile
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<userProfilesProps>) => {
        state.loading = false;
        state.profile = action.payload; // Update the profile object
      })
      .addCase(updateProfile.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default profileSlice.reducer;
