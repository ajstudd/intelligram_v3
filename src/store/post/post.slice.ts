import { createSlice } from '@reduxjs/toolkit';
import { postActions } from './post.actions';
import { PostState } from './postSlice.types';
import { UserList } from '@types';

const initialState: PostState = {
    posts: [],
    tweets: [],
    desofyTweets: [],
    topPosts: [],
    recentPosts: [],
    importedTweets: [],
    scheduledPosts: [],
    isRepostingPostHashHexes: [],
    isImportingTweets: false,
    importingTweetId: undefined,
    isFetchingBookMarkedPosts: false,
    isQuoteRepostingPostHashHexes: [],
    isSendDiamondPostHashHexes: [],
    trendingViewedPosts: [],
    savedPostsPostHashHexes: [],
    bookMarkedPosts: [],
    activeUserListId: '',
    activeListWithUsersData: {
        userList: {} as UserList,
        listedUsers: [],
    },
    adminPanelPromotionPost: null,
    promotionPost: null
};

export const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: postActions,
});

export const {
    setPosts,
    updatePostLike,
    updateRepostLoading,
    updateRepostState,
    turnOffRepostLoading,
    setDesofyTweets,
    updateQuoteRepostLoading,
    updateImportedTweets,
    updateDesofyTweets,
    setTweets,
    setIsFetchingBookMarkedPosts,
    setIsImportingTweets,
    updateQuoteRepostState,
    setImportedTweets,
    sendDiamondLoading,
    updateSendDiamondState,
    setTrendingViewedPosts,
    deletePost,
    setRecentPosts,
    removeAdminPanelPromotionPost,
    setAdminPanelPromotionPost,
    removePromotionPost,
    setTopPosts,
    updatePost,
    setSavedPostsPostHashHexes,
    setBookMarkedPosts,
    setScheduledPosts,
    filterScheduledPost,
    setActiveUserListId,
    setListWithUsersData,
    setPromotionPost,
} = postSlice.actions;

export const postReducer = postSlice.reducer;
