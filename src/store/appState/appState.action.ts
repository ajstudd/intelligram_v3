import { PayloadAction } from '@reduxjs/toolkit';

import { AppSettings, ExchangeRateResponse } from '@types';
import { AppState } from '@store';

export const appStateActions = {
	setExchangeRate: (state: AppState, action: PayloadAction<ExchangeRateResponse>) => {
		const exchangeRate = action.payload;
		return {
			...state,
			exchangeRate
		};
	},
	setSettings: (state: AppState, action: PayloadAction<AppSettings>) => {
		const settings = action.payload;
		return {
			...state,
			settings
		};
	},
	setDefaultSettings: (state: AppState) => {
		return {
			...state,
			settings: {
				deSoNode: '',
				useDesofyNode: true,
				isPromotionPostsEnabled: false,
				isReferralSystemActive: true,
			}
		};
	},
};
