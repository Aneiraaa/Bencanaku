import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIAuth } from "@/apis/APIAuth";

const initialState = {
  status: "idle",
  message: "",
};

export const userRegister = createAsyncThunk(
  "/register",
  APIAuth.register
);

const registerSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    resetRegisterState: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const userRegisterSelector = (state) => state.userRegister;
export const { resetRegisterState } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;