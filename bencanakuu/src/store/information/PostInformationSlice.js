import { APIInformation } from "@/apis/APIInformation";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
};

export const postInformation = createAsyncThunk(
  "/information",
  APIInformation.postData
);

export const postInformationSlice = createSlice({
  name: "postInformationSlice",
  initialState,
  reducers: {
    resetPostInformationState: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(postInformation.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(postInformation.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
    });
    builder.addCase(postInformation.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const postInformationSelector = (state) => state.postInformation;
export const { resetPostInformationState } = postInformationSlice.actions;
export const postInformationReducer = postInformationSlice.reducer;
