import { PayloadAction } from '@reduxjs/toolkit';
import {
    ModalState,
    SuccessRepostModalDetails,
    UiState,
    Toast,
    InformationModalState,
} from '@store';
import { DesofyTheme, Post, Profile } from '@types';

export const uiActions = {
    showModal: (state: UiState, action: PayloadAction<ModalState>) => {
        return {
            ...state,
            modal: {
                ...state.modal,
                isModalOpen: true,
                title: action.payload.title,
                description: action.payload.description,
                actions: action.payload.actions,
            },
        };
    },
    hideModal: (state: UiState) => {
        return {
            ...state,
            modal: {
                ...state.modal,
                isModalOpen: false,
            },
        };
    },


    showInformationModal: (state: UiState, action: PayloadAction<InformationModalState>) => {
        return {
            ...state,
            informationModal: {
                ...state.informationModal,
                isModalOpen: true,
                title: action.payload.title,
                description: action.payload.description,
                actions: action.payload.actions,
            },
        };
    },

    hideInformationModal: (state: UiState) => {
        return {
            ...state,
            informationModal: {
                ...state.informationModal,
                isModalOpen: false,
            },
        };
    },
    updateTheme: (state: UiState, action: PayloadAction<DesofyTheme>) => {
        return {
            ...state,
            theme: action.payload,
        };
    },

    showMediaModal: (state: UiState, action: PayloadAction<string>) => {
        return {
            ...state,
            mediaModal: {
                ...state.mediaModal,
                isMediaModalOpen: true,
                mediaUrl: action.payload,
            },
        };
    },
    hideMediaModal: (state: UiState) => {
        return {
            ...state,
            mediaModal: {
                ...state.mediaModal,
                isMediaModalOpen: false,
                mediaUrl: '',
            },
        };
    },

    setShowMoreOptions: (state: UiState, action: PayloadAction<boolean>) => {
        return {
            ...state,
            showMoreOptions: action.payload,
        };
    },

    showGlobalModal: (state: UiState) => {
        return {
            ...state,
            globalModal: {
                ...state.globalModal,
                isModalOpen: true,
            },
        };
    },

    setToast: (state: UiState, action: PayloadAction<Toast>) => {
        return {
            ...state,
            toast: action.payload
        };
    },
    hideGlobalModal: (state: UiState) => {
        return {
            ...state,
            globalModal: {
                ...state.globalModal,
                isModalOpen: false,
            },
        };
    },

    updateAnotherModalOpenState: (
        state: UiState,
        action: PayloadAction<boolean>
    ) => {
        return {
            ...state,
            anotherModalIsOpen: action.payload,
        };
    },
   
    setNftTransferredPostHashHex: (state: UiState, action: PayloadAction<SuccessRepostModalDetails>) => {
        return {
            ...state,
            nftTransferredPostHashHex: action.payload.postHashHex
        };
    },


    setUserLogging: (state: UiState, action: PayloadAction<boolean>) => {
        return {
            ...state,
            isUserLogging: action.payload
        };
    },
};
