import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewProgram,
  singleProgram,
  registerProgram,
  updateProgram,
  deleteProgram,
} from "../actions/programAction";

const programSlice = createSlice({
  name: "program",
  initialState: {
    program: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(updateProgram.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProgram.fulfilled, (state, action) => {
        state.loading = false;
        state.program = action.payload;
      })
      .addCase(updateProgram.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteProgram.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProgram.fulfilled, (state, action) => {
        state.loading = false;
        state.program = action.payload;
      })
      .addCase(deleteProgram.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleProgram.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleProgram.fulfilled, (state, action) => {
        state.loading = false;
        state.program = action.payload;
      })
      .addCase(singleProgram.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewProgram.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewProgram.fulfilled, (state, action) => {
        state.loading = false;
        state.program = action.payload;
      })
      .addCase(viewProgram.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerProgram.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerProgram.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.program = action.payload;
      })
      .addCase(registerProgram.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default programSlice.reducer;
