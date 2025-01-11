import { APIInformation } from "@/apis/APIInformation";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
  data: [],
  shouldFetchLatestEvents: false, 
};

export const getInformation = createAsyncThunk(
  "/information",
  APIInformation.getData
);

export const getInformationSlice = createSlice({
  name: "getInformationSlice",
  initialState,
  reducers: {
    resetGetInformationState: (state) => {
      state.status = "idle";
      state.message = "";
      state.data = [];
      state.shouldFetchLatestEvents = !state.shouldFetchLatestEvents;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getInformation.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getInformation.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
      state.data = action.payload;
    });
    builder.addCase(getInformation.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const getInformationSelector = (state) => state.getInformation;
export const { resetGetInformationState } = getInformationSlice.actions;
export const getInformationReducer = getInformationSlice.reducer;
