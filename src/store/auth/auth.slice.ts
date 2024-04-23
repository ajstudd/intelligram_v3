import { createSlice } from '@reduxjs/toolkit';
import { authActions } from './auth.actions';
import { AuthState } from './authSlice.types';

const initialState: AuthState = {
    identityUsers: [],
    isLoading: true,
    activeUser: null,
    isInitialized: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: authActions,
});

export const { addIdentityUser, updateActiveIdentityUser, initializeAuth, removeIdentityUser, modifyIdentityUser,
    updateIdentityUser, updateIdentityAccessGroup, updateIdentityActiveUser, updateHidePromotionPostForIdentityUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
