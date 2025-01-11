import { APIInformation } from '@/apis/APIInformation';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    status: 'idle',
    message: '',
}

export const deleteInformation = createAsyncThunk('/information', APIInformation.deleteData);

export const deleteInformationSlice = createSlice({
    name: 'deleteInformationSlice',
    initialState,
    reducers: {
        resetDeleteInformationState: (state) => {
            state.status = 'idle';
            state.message = '';
        },
    },

    extraReducers: (builder) => {
        builder.addCase(deleteInformation.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(deleteInformation.fulfilled, (state, action) => {
            state.status = 'success';
            state.message = action.payload.message;
        });
        builder.addCase(deleteInformation.rejected, (state, action) => {
            state.status = 'failed';
            state.message = action.error.message;
        });
    }
})

export const deleteInformationSelector = (state) => state.deleteInformation;
export const { resetDeleteInformationState } = deleteInformationSlice.actions;
export const deleteInformationReducer = deleteInformationSlice.reducer;
