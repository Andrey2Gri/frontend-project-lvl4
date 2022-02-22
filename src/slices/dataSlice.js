/* eslint-disable no-param-reassign */

import axios from 'axios';
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import routes from '../routes.js';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (header) => {
    const { data } = await axios.get(routes.dataPath(), { headers: header });
    console.log('data:', data);
    return data;
  },
);

const dataAdapter = createEntityAdapter();
const initialState = {
  channelsInfo: {},
  messagesInfo: {},
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        const { channels, messages, currentChannelId } = action.payload;
        state.channelsInfo = {
          channels,
          currentChannelId,
        };
        state.messagesInfo = {
          messages,
        };
      });
  },
});

export const selectors = dataAdapter.getSelectors((state) => state);
export default dataSlice.reducer;
