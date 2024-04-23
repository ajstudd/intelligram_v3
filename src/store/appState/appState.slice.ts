import { createSlice } from '@reduxjs/toolkit';
import { appStateActions } from './appState.action';
import { AppState } from './appStateSlice.types';

const initialState: AppState = {
	exchangeRate: {
		BuyDeSoFeeBasisPoints: 0,
		NanosPerETHExchangeRate: 0,
		NanosSold: 0,
		SatoshisPerBitCloutExchangeRate: 0,
		SatoshisPerDeSoExchangeRate: 0,
		USDCentsPerBitCloutExchangeRate: 0,
		USDCentsPerBitCloutReserveExchangeRate: 0,
		USDCentsPerBitcoinExchangeRate: 0,
		USDCentsPerDeSoBlockchainDotCom: 0,
		USDCentsPerDeSoCoinbase: 0,
		USDCentsPerDeSoExchangeRate: 0,
		USDCentsPerDeSoReserveExchangeRate: 0,
		USDCentsPerETHExchangeRate: 0,
	},
	settings: {
		deSoNode: '',
		useDesofyNode: true,
		isPromotionPostsEnabled: false,
		isReferralSystemActive: true,
	}
};

export const appStateSlice = createSlice({
	name: 'appState',
	initialState: initialState,
	reducers: appStateActions,
});

export const { setExchangeRate, setDefaultSettings, setSettings } = appStateSlice.actions;

export const appStateReducer = appStateSlice.reducer;
