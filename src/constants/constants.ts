import { DeSoNetwork } from '@types';
export class Constants {
    static readonly localStorageAuthenticatedUsers = 'desofyAuthenticatedUsers';
    static readonly localStorageRecentSearchUsers = 'desofyRecentSearchUsers';
    static readonly desoNodeHost = 'https://node.deso.org/api/v0/';
    static readonly desofyNodeHost = 'https://node.desofy.app/api/v0/';
    static readonly useDesofyNode = false;
    static readonly localStorageNotificationFilters = 'desofyNotificationFilters';
    static readonly localStorageIsNotificationExpanded = 'desofyIsNotificationExpanded';
    static readonly DEFAULT_KEY_MESSAGING_GROUP_NAME = 'default-key';
    static readonly desofyPublicKey = 'BC1YLh5pKXs8NqaUtN8Gzi3rfoAgG2VWio2NER7baDkG8T2x7wRnSwa';
    static readonly fetchTimeInterval = 1000 * 60 * 5; // 5 minutes
}

export const DEFAULT_KEY_MESSAGING_GROUP_NAME: Readonly<string> = 'default-key';
export const IS_MAINNET: Readonly<boolean> =
    process.env.REACT_APP_IS_TESTNET !== 'true';
export const USER_TO_SEND_MESSAGE_TO: Readonly<string> = IS_MAINNET
    ? 'BC1YLgUCRPPtWmCwvigZay2Dip6ce1UHd2TqniZci8qgauCtUo8mQDW'
    : 'tBCKW665XZnvVZcCfcEmyeecSZGKAdaxwV2SH9UFab6PpSRikg4EJ2';
export const DESO_NETWORK: Readonly<DeSoNetwork> = IS_MAINNET
    ? DeSoNetwork.mainnet
    : DeSoNetwork.testnet;
export const PUBLIC_KEY_LENGTH: Readonly<number> = IS_MAINNET ? 55 : 54;
export const PUBLIC_KEY_PREFIX: Readonly<string> = IS_MAINNET ? 'BC' : 'tBC';
export const MESSAGES_ONE_REQUEST_LIMIT = 25;
export const MAX_MEMBERS_IN_GROUP_SUMMARY_SHOWN = 4;
export const MAX_MEMBERS_TO_REQUEST_IN_GROUP = 50;
export const MOBILE_WIDTH_BREAKPOINT = 768;
export const REFRESH_MESSAGES_INTERVAL_MS = 5000;
export const REFRESH_MESSAGES_MOBILE_INTERVAL_MS = 20000;
export const BASE_TITLE = 'Intelligram';
export const TITLE_DIVIDER = ' · ';
export const MAX_LENGTH_FOR_POST = 19894;
export const RouteNames = {
    home: '/',
    login: '/login',
    signup: '/signup',
    profile: '/profile',
    editProfile: '/edit-profile',
    register : '/register',
    search: '/search',
    explore: '/explore',
    post: '/post',
    postWithId: '/post/:id',
    messages: '/messages',
    messagesWithPublicKey: '/messages/:publicKey',
    notifications: '/notifications',
    notificationsWithPublicKey: '/notifications/:publicKey',
    wallet: '/wallet',
    buyDeSo: '/buy-deso',
    settings: '/settings',
    blockedUsers: '/blocked-users',
    terms: '/terms',
    privacy: '/privacy',
    about: '/about',
    support: '/support',
    notFound: '/404',
};

