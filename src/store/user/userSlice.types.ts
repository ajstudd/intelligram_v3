import { DesoUser, DesofyUser, Profile, ProfileStatsResponse } from '@types';

export interface UserState {
    recentSearchedProfiles: Profile[];
    desoUser: DesoUser[];
    adminAccess?: boolean;
    hasFetchedPromotionAccess: boolean;
    hasFetchedAdminAccess: boolean;
    isFetchingDesofyUser: boolean;
    desofyUser: DesofyUser | undefined;
    userStats: ProfileStatsResponse;
    loggedInUserStats: Partial<ProfileStatsResponse>;
    userProfile: Profile | undefined;
    topCreatorProfiles: DesoUser[];
    lastProfilePostsFetched: string;
    lastFollowersFollowingsFetched: string;
    lastProfileDiamondsFetched: string;
    unReadNotificationCount: number;
}
