import { createSlice } from '@reduxjs/toolkit';
import { profileActions } from './profile.actions';
import { ProfileState } from './profile.types';

const initialState: ProfileState = {
    diamondsInfo: undefined,
};

export const profileSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: profileActions,
});

export const {
    storeDiamondsInfo,
} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
