import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import {
    uiReducer,
    userReducer,
    authReducer,
    appStateReducer,
    postReducer,
    profileReducer,
    cachedDataReducer,
} from '@store';

const store = configureStore({
    reducer: {
        auth: authReducer,
        cachedData: cachedDataReducer,
        ui: uiReducer,
        user: userReducer,
        appState: appStateReducer,
        post: postReducer,
        profile: profileReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export * from './auth';
export * from './ui';
export * from './user';
export * from './appState';
export * from './post';
export * from './profile';
export * from './cached';

export default store;
