import { PayloadAction } from '@reduxjs/toolkit';
import { DesofyTweet, ListedUser, Post, Post as PostResponse, UserList } from '@types';
import { PostState } from '@store';

export const postActions = {
    setPosts: (state: PostState, action: PayloadAction<PostResponse[]>) => {
        return {
            ...state,
            posts: action.payload,
        };
    },

    setTweets: (state: PostState, action: PayloadAction<PostResponse[]>) => {
        return {
            ...state,
            tweets: action.payload,
        };
    },

    updateImportedTweets: (
        state: PostState,
        action: PayloadAction<PostResponse[]>
    ) => {
        return {
            ...state,
            importedTweets: action.payload,
        };
    },

    updateDesofyTweets: (
        state: PostState,
        action: PayloadAction<DesofyTweet[]>
    ) => {
        return {
            ...state,
            desofyTweets: [...state.desofyTweets, ...action.payload],
        };
    },
    setTopPosts: (state: PostState, action: PayloadAction<Post[]>) => {
        return {
            ...state,
            topPosts: action.payload,
        };
    },
    setRecentPosts: (state: PostState, action: PayloadAction<Post[]>) => {
        return {
            ...state,
            recentPosts: action.payload,
        };
    },

    setIsImportingTweets: (
        state: PostState,
        action: PayloadAction<{
            isImportingTweets: boolean;
            importingTweetId: string | undefined;
        }>
    ) => {
        return {
            ...state,
            isImportingTweets: action.payload.isImportingTweets,
            importingTweetId: action.payload.importingTweetId,
        };
    },

    setIsFetchingBookMarkedPosts: (
        state: PostState,
        action: PayloadAction<boolean>
    ) => {
        return {
            ...state,
            isFetchingBookMarkedPosts: action.payload,
        };
    },

    setDesofyTweets: (state: PostState, action: PayloadAction<DesofyTweet[]>) => {
        return {
            ...state,
            desofyTweets: action.payload,
        };
    },

    setImportedTweets: (
        state: PostState,
        action: PayloadAction<PostResponse[]>
    ) => {
        return {
            ...state,
            importedTweets: action.payload,
        };
    },

    updatePostLike: (state: PostState, action: PayloadAction<string>) => {
        const posts = [...state.posts];
        const postIndex = posts.findIndex(
            (post) => post.PostHashHex === action.payload
        );
        if (postIndex !== -1) {
            const likedByReader =
                !posts[postIndex]?.PostEntryReaderState?.LikedByReader;
            const likeCount = likedByReader
                ? posts[postIndex].LikeCount + 1
                : posts[postIndex].LikeCount - 1;

            const updatedObj = {
                ...posts[postIndex],
                LikeCount: likeCount,
                PostEntryReaderState: {
                    ...posts[postIndex].PostEntryReaderState,
                    LikedByReader: likedByReader,
                },
            };

            posts[postIndex] = updatedObj;
        }
        return {
            ...state,
            posts: posts,
        };
    },
    updateRepostLoading: (
        state: PostState,
        action: PayloadAction<{ postHashHex: string; isError?: boolean }>
    ) => {
        if (action.payload.isError) {
            return {
                ...state,
                isRepostingPostHashHexes: state.isRepostingPostHashHexes.filter(
                    (postHashHex) => postHashHex !== action.payload.postHashHex
                ),
            };
        }
        return {
            ...state,
            isRepostingPostHashHexes: [
                ...state.isRepostingPostHashHexes,
                action.payload.postHashHex,
            ],
        };
    },

    turnOffRepostLoading: (
        state: PostState,
        action: PayloadAction<string>
    ) => {
        return {
            ...state,
            isRepostingPostHashHexes: state.isRepostingPostHashHexes.filter(
                (postHashHex) => postHashHex !== action.payload
            ),
        };
    },

    updateRepostState: (
        state: PostState,
        action: PayloadAction<{
            postHashHex: string;
            repostPostHashHex: string;
        }>
    ) => {
        const posts = [...state.posts];
        const postIndex = posts.findIndex(
            (post) => post.PostHashHex === action.payload.postHashHex
        );
        let isRepostingPostHashHexes = state.isRepostingPostHashHexes;

        if (postIndex !== -1) {
            const repostedByReader =
                !posts[postIndex].PostEntryReaderState.RepostedByReader;
            const repostCount = repostedByReader
                ? posts[postIndex].RepostCount + 1
                : posts[postIndex].RepostCount - 1;
            const updatedObj = {
                ...posts[postIndex],
                RepostCount: repostCount,
                PostEntryReaderState: {
                    ...posts[postIndex].PostEntryReaderState,
                    RepostedByReader: repostedByReader,
                    RepostPostHashHex: action.payload.repostPostHashHex,
                },
            };

            isRepostingPostHashHexes = state.isRepostingPostHashHexes.filter(
                (postHashHex) => postHashHex !== posts[postIndex].PostHashHex
            );

            posts[postIndex] = updatedObj;
        }

        return {
            ...state,
            posts: posts,
            isRepostingPostHashHexes: isRepostingPostHashHexes,
        };
    },
    updateQuoteRepostLoading: (
        state: PostState,
        action: PayloadAction<{ postHashHex: string; isError?: boolean }>
    ) => {
        if (action.payload.isError) {
            return {
                ...state,
                isQuoteRepostingPostHashHexes:
                    state.isQuoteRepostingPostHashHexes.filter(
                        (postHashHex) => postHashHex !== action.payload.postHashHex
                    ),
            };
        }
        return {
            ...state,
            isQuoteRepostingPostHashHexes: [
                ...state.isQuoteRepostingPostHashHexes,
                action.payload.postHashHex,
            ],
        };
    },
    updateQuoteRepostState: (state: PostState, action: PayloadAction<string>) => {
        const posts = [...state.posts];
        const postIndex = posts.findIndex(
            (post) => post.PostHashHex === action.payload
        );
        let isQuoteRepostingPostHashHexes = state.isQuoteRepostingPostHashHexes;

        if (postIndex !== -1) {
            const repostCount = posts[postIndex].RepostCount + 1;

            const updatedObj = {
                ...posts[postIndex],
                RepostCount: repostCount,
                PostEntryReaderState: {
                    ...posts[postIndex].PostEntryReaderState,
                },
            };

            isQuoteRepostingPostHashHexes =
                state.isQuoteRepostingPostHashHexes.filter(
                    (postHashHex) => postHashHex !== posts[postIndex].PostHashHex
                );

            posts[postIndex] = updatedObj;
        }

        return {
            ...state,
            posts: posts,
            isQuoteRepostingPostHashHexes: isQuoteRepostingPostHashHexes,
        };
    },

    sendDiamondLoading: (
        state: PostState,
        action: PayloadAction<{ postHashHex: string; isError?: boolean }>
    ) => {
        if (action.payload.isError) {
            return {
                ...state,
                isSendDiamondPostHashHexes: state.isSendDiamondPostHashHexes.filter(
                    (postHashHex) => postHashHex !== action.payload.postHashHex
                ),
            };
        }
        return {
            ...state,
            isSendDiamondPostHashHexes: [
                ...state.isSendDiamondPostHashHexes,
                action.payload.postHashHex,
            ],
        };
    },
    updateSendDiamondState: (
        state: PostState,
        action: PayloadAction<{ postHashHex: string; diamondLevel: number }>
    ) => {
        const posts = [...state.posts];
        const postIndex = posts.findIndex(
            (post) => post.PostHashHex === action.payload.postHashHex
        );
        let isSendDiamondPostHashHexes = state.isSendDiamondPostHashHexes;

        if (postIndex !== -1) {
            const diamondCount = posts[postIndex].DiamondCount + 1;

            const updatedObj = {
                ...posts[postIndex],
                DiamondCount: diamondCount,
                PostEntryReaderState: {
                    ...posts[postIndex].PostEntryReaderState,
                    DiamondLevelBestowed: action.payload.diamondLevel,
                },
            };

            isSendDiamondPostHashHexes = state.isQuoteRepostingPostHashHexes.filter(
                (postHashHex) => postHashHex !== posts[postIndex].PostHashHex
            );

            posts[postIndex] = updatedObj;
        }

        return {
            ...state,
            posts: posts,
            isSendDiamondPostHashHexes: isSendDiamondPostHashHexes,
        };
    },
    setTrendingViewedPosts: (state: PostState, action: PayloadAction<string>) => {
        return {
            ...state,
            trendingViewedPosts: [...state.trendingViewedPosts, action.payload],
        };
    },
    deletePost: (state: PostState, action: PayloadAction<string>) => {
        const posts = state.posts.filter(
            (post) => post.PostHashHex !== action.payload
        );
        return {
            ...state,
            posts: posts,
        };
    },
    updatePost: (state: PostState, action: PayloadAction<PostResponse>) => {
        const posts = [...state.posts];
        const postIndex = state.posts.findIndex(
            (post) => post.PostHashHex === action.payload.PostHashHex
        );

        posts[postIndex] = action.payload;
        return {
            ...state,
            posts: posts,
        };
    },
    setSavedPostsPostHashHexes: (
        state: PostState,
        action: PayloadAction<string[]>
    ) => {
        return {
            ...state,
            savedPostsPostHashHexes: action.payload,
        };
    },
    setBookMarkedPosts: (state: PostState, action: PayloadAction<Post[]>) => {
        return {
            ...state,
            bookMarkedPosts: action.payload,
        };
    },
    setScheduledPosts: (
        state: PostState,
        action: PayloadAction<PostResponse[]>
    ) => {
        return {
            ...state,
            scheduledPosts: action.payload,
        };
    },
    filterScheduledPost: (state: PostState, action: PayloadAction<string>) => {
        const scheduledPosts = state.scheduledPosts.filter(
            (post) => post._id !== action.payload
        );
        return {
            ...state,
            scheduledPosts: scheduledPosts,
        };
    },
    setActiveUserListId: (state: PostState, action: PayloadAction<string>) => {
        return {
            ...state,
            activeUserListId: action.payload,
        };
    },
    setListWithUsersData: (state: PostState, action: PayloadAction<{ userList: UserList, listedUsers: ListedUser[] }>) => {
        return {
            ...state,
            activeListWithUsersData: action.payload,
        };
    },

    removePromotionPost: (state: PostState) => {
        return {
            ...state,
            promotionPost: null,
        };
    },
    removeAdminPanelPromotionPost: (state: PostState) => {
        return {
            ...state,
            adminPanelPromotionPost: null,
        };
    },
    setAdminPanelPromotionPost: (
        state: PostState,
        action: PayloadAction<Post>
    ) => {
        return {
            ...state,
            adminPanelPromotionPost: action.payload,
        };
    },
    setPromotionPost: (state: PostState, action: PayloadAction<Post>) => {
        return {
            ...state,
            promotionPost: action.payload,
        };
    },
};
