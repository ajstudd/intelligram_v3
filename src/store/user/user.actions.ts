import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit';
import { DesoUser, DesofyUser, Profile, ProfileStatsResponse } from '@types';
import { Constants } from '@constants';
import { UserState } from '@store';

export const userActions: ValidateSliceCaseReducers<UserState, SliceCaseReducers<UserState>> = {
    setInitialRecentSearchedProfiles: (state: UserState, action: PayloadAction<string | undefined>) => {
        const publicKey = action.payload;
        const recentSearchedProfiles = getInitialHistoryProfiles(publicKey);
        return {
            ...state,
            recentSearchedProfiles
        };
    },

    addRecentSearchedProfile: (state: UserState, action: PayloadAction<{
        profile: Profile;
        authPublicKey: string | undefined
    }>) => {
        const historyProfile = action.payload.profile;
        const authPublicKey = action.payload.authPublicKey;
        const recentSearchedProfiles: Profile[] = state.recentSearchedProfiles.filter(
            user => user.PublicKeyBase58Check !== historyProfile.PublicKeyBase58Check
        );
        recentSearchedProfiles.push(historyProfile);
        updateLocalStorageSearchedProfiles(recentSearchedProfiles, authPublicKey);

        return {
            ...state,
            recentSearchedProfiles,
        };
    },
    removeRecentSearchedProfile: (state: UserState, action: PayloadAction<{ publicKey: string, authPublicKey: string | undefined }>) => {
        const publicKey = action.payload.publicKey;
        const authPublicKey = action.payload.authPublicKey;
        const recentSearchedProfiles: Profile[] = [...state.recentSearchedProfiles]?.filter((profile) => profile.PublicKeyBase58Check !== publicKey);
        updateLocalStorageSearchedProfiles(recentSearchedProfiles, authPublicKey);
        return {
            ...state,
            recentSearchedProfiles,
        };

    },
    clearAllRecentSearchedProfiles: (state: UserState, action: PayloadAction<{ publicKey: string, deleteInLocalStorage?: boolean } | undefined>) => {
        if (action.payload) {
            const { publicKey, deleteInLocalStorage } = action.payload;
            updateLocalStorageSearchedProfiles([], publicKey, deleteInLocalStorage);
            return {
                ...state,
                recentSearchedProfiles: [],
            };
        }
    },
    setIsFetchingDesofyUser: (state: UserState, action: PayloadAction<boolean>) => {
        const isFetchingDesofyUser = action.payload;
        return {
            ...state,
            isFetchingDesofyUser
        };
    },
    setUserStateless: (state: UserState, action: PayloadAction<DesoUser[]>) => {
        const desoUser = action.payload;
        return {
            ...state,
            desoUser
        };
    },
    setAdminAccess: (state: UserState, action: PayloadAction<boolean>) => {
        const adminAccess = action.payload;
        return {
            ...state,
            hasFetchedAdminAccess: true,
            adminAccess
        };
    },
    setUserStats: (state: UserState, action: PayloadAction<ProfileStatsResponse>) => {
        const userStats = action.payload;
        return {
            ...state,
            userStats
        };
    },
    setLoggedInUserStats: (state: UserState, action: PayloadAction<Partial<ProfileStatsResponse>>) => {
        const loggedInUserStats = action.payload;
        return {
            ...state,
            loggedInUserStats
        };
    },
    setLastProfilePostsFetched: (state: UserState, action: PayloadAction<string>) => {
        const lastProfilePostsFetched = action.payload;
        return {
            ...state,
            lastProfilePostsFetched
        };
    },
    setLastFollowersFollowingsFetched: (state: UserState, action: PayloadAction<string>) => {
        const lastFollowersFollowingsFetched = action.payload;
        return {
            ...state,
            lastFollowersFollowingsFetched
        };
    },
    setLastProfileDiamondsFetched: (state: UserState, action: PayloadAction<string>) => {
        const lastProfilePostsFetched = action.payload;
        return {
            ...state,
            lastProfilePostsFetched
        };
    },

    setDesofyUserData: (state: UserState, action: PayloadAction<DesofyUser | undefined>) => {
        const desofyUser = action.payload;
        return {
            ...state,
            desofyUser
        };
    },
    removeTwitterLink: (state: UserState, _action: PayloadAction<DesofyUser | undefined>) => {
        const updatedDesofyUser = state.desofyUser ? {
            ...state.desofyUser, twitter: {
                ...state.desofyUser.twitter,
                isLinked: false,
            }
        } : undefined;
        return {
            ...state,
            desofyUser: updatedDesofyUser
        };
    },

    setUserProfile: (state: UserState, action: PayloadAction<Profile | undefined>) => {
        const userProfile = action.payload;
        return {
            ...state,
            userProfile
        };
    },
    setTopCreatorProfiles: (state: UserState, action: PayloadAction<DesoUser[]>) => {
        const topCreatorProfiles = action.payload;
        return {
            ...state,
            topCreatorProfiles
        };
    },
    setPinnedPostHashHex: (state: UserState, action: PayloadAction<string | undefined>) => {
        const pinnedPostHashHex = action.payload;
        return {
            ...state,
            userProfile: state.userProfile ? {
                ...state.userProfile,
                ExtraData: state.userProfile?.ExtraData ? {
                    ...state.userProfile?.ExtraData,
                    PinnedPostHashHex: pinnedPostHashHex ?? ''
                } : null
            }
                : undefined
        };
    },
    setUnReadNotificationCount: (state: UserState, action: PayloadAction<number>) => {
        const unReadNotificationCount = action.payload;
        return {
            ...state,
            unReadNotificationCount
        };
    },
    removeUserFromState: (state: UserState) => {
        return {
            ...state,
            recentSearchedProfiles: [],
            desoUser: [],
            isFetchingDesofyUser: false,
            desofyUser: undefined,
            lastProfileFetched: '',
            loggedInUserStats: {
                nft_earnings: 0,
                fr_earnings_nanos: 0,
                diamonds_value_r: 0,
            },
            userStats: {
                actor: '',
                transactions: 0,
                likes_r: 0,
                likes_g: 0,
                follows_r: 0,
                follows_g: 0,
                diamonds_r: 0,
                diamonds_g: 0,
                diamonds_value_r: 0,
                diamonds_value_g: 0,
                posts: 0,
                replies_g: 0,
                reclouts_g: 0,
                quoted_reclouts_g: 0,
                replies_r: 0,
                reclouts_r: 0,
                quoted_reclouts_r: 0,
                first_txn_time: '',
                last_txn_time: '',
                profile_txn_time: '',
                username: '',
                description: '',
                fr: 0,
                total_fee_nanos: 0,
                fr_earnings_nanos: 0,
                accepted_nft_paid_additional_creator_royalties_nanos: 0,
                accepted_nft_paid_additional_creator_coin_royalties_nanos: 0,
                buynow_nft_paid_additional_creator_royalties_nanos: 0,
                buynow_nft_paid_additional_creator_coin_royalties_nanos: 0,
                total_accepted_nft_nanos: 0,
                accepted_nft_bid_paid_creator_royalty_nanos: 0,
                accepted_nft_bid_paid_creator_coin_royalty_nanos: 0,
                net_accepted_nft_nanos: 0,
                total_buynow_nft_nanos: 0,
                buynow_nft_bid_paid_creator_royalty_nanos: 0,
                buynow_nft_bid_paid_creator_coin_royalty_nanos: 0,
                net_buynow_nft_nanos: 0,
                accepted_nft_bid_received_creator_royalty_nanos: 0,
                accepted_nft_bid_received_additional_creator_royalties_nanos: 0,
                buynow_nft_bid_received_creator_royalty_nanos: 0,
                buynow_nft_bid_received_additional_creator_royalties_nanos: 0,
                net_nft_bid_nanos: 0,
                nft_received_royalties_nanos: 0,
                nft_earnings: 0,
                total_earnings: 0,
            },
            userProfile: undefined,
            topCreatorProfiles: [],
            unReadNotificationCount: 0,
        };
    },
};

function getInitialHistoryProfiles(publicKey: string | undefined): Profile[] {
    const historyProfilesKey = publicKey ? `${publicKey}_${Constants.localStorageRecentSearchUsers}` : Constants.localStorageRecentSearchUsers;
    const historyProfilesValue = localStorage.getItem(historyProfilesKey);
    return historyProfilesValue ? JSON.parse(historyProfilesValue) : [];
}

function updateLocalStorageSearchedProfiles(_historyProfilesValue: Profile[], authPublicKey: string | undefined, deleteFromLocalStorage = false) {
    const historyProfilesKey = authPublicKey ?
        `${authPublicKey}_${Constants.localStorageRecentSearchUsers}` :
        Constants.localStorageRecentSearchUsers;
    if (!deleteFromLocalStorage) {
        const historyProfilesValue = JSON.stringify(_historyProfilesValue);
        localStorage.setItem(historyProfilesKey, historyProfilesValue);
    } else {
        localStorage.removeItem(historyProfilesKey);
    }
}
