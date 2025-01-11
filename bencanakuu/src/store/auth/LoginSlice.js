import { APIAuth } from "@/apis/APIAuth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
  data: {},
};

export const userLogin = createAsyncThunk("/account/users", APIAuth.login);

export const loginSlice = createSlice({
  name: "loginSice",
  initialState,
  reducers: {
    resetLoginState: (state) => {
      state.status = "idle";
      state.message = "";
      state.data = {};
    },
  },

  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
      state.data = action.payload.data;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message
    });
  },
});


export const userLoginSelector = (state) =>state.userLogin;
export const { resetLoginState } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;