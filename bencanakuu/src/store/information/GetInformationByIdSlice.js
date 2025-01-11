import { APIInformation } from '@/apis/APIInformation';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  status: "idle",
  message: "",
};


export const getInformationById = createAsyncThunk(
  "/information",
  APIInformation.getDataById
);


export const getInformationByIdSlice = createSlice({
    name: "getInformationByIdSlice",
    initialState,
    reducers: {
        resetInformationState: (state) => {
        state.status = "idle";
        state.message = "";
        state.data = {};
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getInformationById.pending, (state) => {
        state.status = "loading";
        });
        builder.addCase(getInformationById.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
        state.data = action.payload;
        });
        builder.addCase(getInformationById.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
        });
    },
})


export const getInformationByIdSelector = (state) => state.getInformationById;
export const { resetGetInformationByIdState } = getInformationByIdSlice.actions;
export const getInformationByIdReducer = getInformationByIdSlice.reducer;