import { AppSettings, ExchangeRateResponse } from '@types';

export interface AppState {
	settings: AppSettings;
	exchangeRate: ExchangeRateResponse;
}
