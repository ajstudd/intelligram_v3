import { createSlice } from '@reduxjs/toolkit';
import { cachedDataActions } from './cachedData.actions';
import { CachedState } from './cachedData.types';

const initialState: CachedState = {
    newTabData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    followersData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    }
    ,
    followingData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    trendingTabData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    followingTabData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    trendingTagsData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    topCreatorsData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    topDesofyUsersData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    topCreatorsByCategoryData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    dailyBlockchainData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    hashtagTabData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    creatorsTabData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    contentTabData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    profilePostsTabData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    profileDiamondsGivenData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    profileDiamondsRecievedData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    profileCoinHoldersData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    tweetHistoryData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    topSearchedPosts: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    recentSearchedPosts: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    searchedTagPosts: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    importTweetData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    blockedUsersData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    bookmarkedPostData: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    userListPosts: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    notificationState: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    notificationList: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    notificationProfile: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    notificationPosts: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString()
    },
    singlePost:
    {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    userList:
    {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    promotionPosts: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    promotionProfiles: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    singleUserList:
    {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    promotionProfilesOfUser: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    adminPanelPromotedProfiles: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    promotedProfiles: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    promotionPostsOfUser: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    adminPanelPromotedPost: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    },
    promotedPost: {
        data: [],
        newData: [],
        newDataPostHashHexes: [],
        dataPostHashHexes: [],
        lastFetchTime: new Date().toISOString(),
    }
};

export const cachedDataSlice = createSlice({
    name: 'cachedData',
    initialState: initialState,
    reducers: cachedDataActions,
});

export const {
    setData,
    setNewData,
    setNewDataPostHashHexes,
    setSinglePost,
    resetCachedDataOfKeys,
    findAndUpdatePromotionPost,
    updateModifiedPostInAllCachedStates,
    addNewPostInNewTabAndProfile,
    addNewPostInSelectedTab,
    transferNewDataToMainData,
    updateCachedPostLike,
    resetAllState,
    findAndUpdatePromotionPostOfUser,
    updateNewTabAndProfileTab,
    deletePostFromCachedState,
    findAndUpdatePromotionProfile,
    findAndUpdatePromotionProfilesOfUser,
    updateCachedRepostState,
    updateCommentInAllCachedPosts,
    updatePollsInAllCachedPosts,
    updateSendDiamondStateForAllCachedPosts,
} = cachedDataSlice.actions;

export const cachedDataReducer = cachedDataSlice.reducer;
