import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewChannel,
  singleChannel,
  registerChannel,
  updateChannel,
  deleteChannel,
} from "../actions/channelAction";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channel: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(updateChannel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateChannel.fulfilled, (state, action) => {
        state.loading = false;
        state.channel = action.payload;
      })
      .addCase(updateChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteChannel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteChannel.fulfilled, (state, action) => {
        state.loading = false;
        state.channel = action.payload;
      })
      .addCase(deleteChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleChannel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleChannel.fulfilled, (state, action) => {
        state.loading = false;
        state.channel = action.payload;
      })
      .addCase(singleChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewChannel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewChannel.fulfilled, (state, action) => {
        state.loading = false;
        state.channel = action.payload;
      })
      .addCase(viewChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerChannel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerChannel.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.channel = action.payload;
      })
      .addCase(registerChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default channelSlice.reducer;
