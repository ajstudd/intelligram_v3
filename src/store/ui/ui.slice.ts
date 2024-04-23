import { createSlice } from '@reduxjs/toolkit';
import { DesofyTheme } from '@types';
import { uiActions } from './ui.actions';
import { UiState } from './uiSlice.types';

const initialState: UiState = {
    informationModal: {
        isModalOpen: false,
        title: '',
        description: '',
        actions: [],
    },
    showMoreOptions: false,
    modal: {
        isModalOpen: false,
        title: '',
        description: '',
        actions: [],
    },
    toast: {
        isOpen: false,
        message: '',
        type: 'success',
        duration: 3000,
    },
    globalModal: {
        isModalOpen: false,
        title: '',
        description: '',
        actions: [],
    },
    anotherModalIsOpen: false,
    theme: DesofyTheme.Dark,
    mediaModal: {
        isMediaModalOpen: false,
        mediaUrl: '',
    },
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: uiActions,
});

export const {
    showModal,
   
    updateAnotherModalOpenState,
    hideModal,
    setToast,
    updateTheme,
    showMediaModal,
    hideMediaModal,

    hideGlobalModal,
  
    hideInformationModal,
    showInformationModal,
    showGlobalModal,
    setShowMoreOptions,
      setNftTransferredPostHashHex,
    setUserLogging,
} = uiSlice.actions;

export const { caseReducers } = uiSlice;

export const uiReducer = uiSlice.reducer;
