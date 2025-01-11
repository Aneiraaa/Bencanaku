import { APIInformation } from "@/apis/APIInformation";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
};

export const patchInformation = createAsyncThunk(
  "/information",
  async (payload) => APIInformation.patchData(payload)
);

export const patchInformationSlice = createSlice({
  name: "patchInformationSlice",
  initialState,
  reducers: {
    resetPatchInformationState: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(patchInformation.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(patchInformation.fulfilled, (state, action) => {
      state.status = 'success';
      state.message = action.payload.message;

    });

    builder.addCase(patchInformation.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const patchInformationSelector = (state) => state.patchInformation;
export const { resetPatchInformationState } = patchInformationSlice.actions;
export const patchInformationReducer = patchInformationSlice.reducer;
