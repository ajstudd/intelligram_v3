import { PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from '@store';

export const profileActions = {
    storeDiamondsInfo: (state: ProfileState, action: PayloadAction<any>) => {
        state.diamondsInfo = action.payload;
    },
};
