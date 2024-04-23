import { PayloadAction } from '@reduxjs/toolkit';
import { CachedState } from '@store';
import { Post, NotificationsState, PromotionProfile } from '@types';
import { PostEntryResponse } from 'deso-protocol';

export const cachedDataActions = {
    setData: <T>(state: CachedState, action: PayloadAction<{
        key: string,
        data: T[],
    }>) => {
        return {
            ...state,
            [action.payload.key]: {
                ...state[action.payload.key],
                data: action.payload.data,
                lastFetchTime: new Date().toISOString(),
            },
        };
    },

    findAndUpdatePromotionPostOfUser: (state: CachedState, action: PayloadAction<Partial<Post>>) => {
        const promotionPosts: Post[] = [...state.promotionPostsOfUser.data];
        const forEachCallback = (p_posts: Post[]) => (data: Post, index: number) => {
            if (data.promotionId === action.payload.promotionId) {
                p_posts[index] = {
                    ...p_posts[index],
                    ...action.payload
                };
            }
        };
        promotionPosts.forEach(forEachCallback(promotionPosts));
        return {
            ...state,
            promotionPostsOfUser: {
                ...state.promotionPostsOfUser,
                data: promotionPosts,
            },
        };
    },

    findAndUpdatePromotionProfilesOfUser: (state: CachedState, action: PayloadAction<Partial<PromotionProfile>>) => {
  const promotionProfiles: PromotionProfile[] = [...state.promotionProfilesOfUser.data];
        const forEachCallback = (p_profiles: PromotionProfile[]) => (data: PromotionProfile, index: number) => {
            if (data._id === action.payload.promotionId) {
                p_profiles[index] = {
                    ...p_profiles[index],
                    ...action.payload,
                };
                }
            };
        promotionProfiles.forEach(forEachCallback(promotionProfiles));
        return {
            ...state,
            promotionProfilesOfUser: {
                ...state.promotionProfilesOfUser,
                data: promotionProfiles,
            },
        };
    },

    findAndUpdatePromotionPost: (state: CachedState, action: PayloadAction<Partial<Post>>) => {
        const promotionPosts: Post[] = [...state.promotionPosts.data];
        const forEachCallback = (p_posts: Post[]) => (data: Post, index: number) => {
            if (data.promotionId === action.payload.promotionId) {
                p_posts[index] = {
                    ...p_posts[index],
                    ...action.payload
                }
            }
        };
        promotionPosts.forEach(forEachCallback(promotionPosts));
        return {
            ...state,
            promotionPosts: {
                ...state.promotionPosts,
                data: promotionPosts,
            },
        };
    },
    findAndUpdatePromotionProfile: (state: CachedState, action: PayloadAction<Partial<PromotionProfile>>) => {
        const promotionProfiles: PromotionProfile[] = [...state.promotionProfiles.data];
        const forEachCallback = (p_profiles: PromotionProfile[]) => (data: PromotionProfile, index: number) => {
            if (data._id === action.payload.promotionId) {
                p_profiles[index] = {
                    ...p_profiles[index],
                    ...action.payload,
                };
            }
        };
        promotionProfiles.forEach(forEachCallback(promotionProfiles));
        return {
            ...state,
            promotionProfiles: {
                ...state.promotionProfiles,
                data: promotionProfiles,
            },
        };
    },

    setNewDataPostHashHexes: (state: CachedState, action: PayloadAction<{
        key: string,
        newDataPostHashHexes: string[],
    }>) => {
        return {
            ...state,
            [action.payload.key]: {
                ...state[action.payload.key],
                newDataPostHashHexes: action.payload.newDataPostHashHexes,
            },
        };
    },

    setNewData: <T>(state: CachedState, action: PayloadAction<{
        key: string,
        newData: T[],
    }>) => {
        return {
            ...state,
            [action.payload.key]: {
                ...state[action.payload.key],
                newData: action.payload.newData,
                lastFetchTime: new Date().toISOString(),
            },
        };
    },

    transferNewDataToMainData: (state: CachedState, action: PayloadAction<string>) => {
        return {
            ...state,
            [action.payload]: {
                ...state[action.payload],
                data: state[action.payload].newData,
                dataPostHashHexes: state[action.payload].newDataPostHashHexes,
                newData: [],
                newDataPostHashHexes: [],
                lastFetchTime: new Date().toISOString(),
            },
        };
    },

    addNewPostInNewTabAndProfile: (
        state: CachedState<Post>,
        action: PayloadAction<Post>
    ) => {
        return {
            ...state,
            newTabData: {
                ...state.newTabData,
                data: [action.payload, ...state.newTabData.data],
            },
            profilePostsTabData: {
                ...state.profilePostsTabData,
                data: [action.payload, ...state.profilePostsTabData.data],
            },
        };
    },

    addNewPostInSelectedTab: (
        state: CachedState<Post>,
        action: PayloadAction<{ key: string, post: Post }>
    ) => {
        return {
            ...state,
            [action.payload.key]: {
                ...state[action.payload.key],
                data: [action.payload.post, ...state[action.payload.key].data],
            },
        };
    },

    updateNewTabAndProfileTab: (
        state: CachedState<Post>,
        action: PayloadAction<Post[]>
    ) => {
        return {
            ...state,
            newTabData: {
                ...state.newTabData,
                data: action.payload,
            },
            profilePostsTabData: {
                ...state.profilePostsTabData,
                data: action.payload,
            },
        };
    },

    updateSendDiamondStateForAllCachedPosts: (
        state: CachedState<Post>,
        action: PayloadAction<{ postHashHex: string; diamondLevel: number }>
    ) => {
        const finalState = { ...state };
        const lists = Object.keys(finalState);

        for (let i = 0; i < lists.length; i++) {
            const posts = [...finalState[lists[i]].data];
            const newPosts = [...state[lists[i]].newData];

            const forEachCallback = (p_posts: (Post | NotificationsState)[]) => (_data: Post | NotificationsState, index: number) => {
                const postsData = _data as Post;
                const notificationState = _data as NotificationsState;
                const updatePostRepost = (post: Post) => {
                    if (post?.PostHashHex && post.PostHashHex === action.payload.postHashHex) {

                        const diamondCount = post.DiamondCount + action.payload.diamondLevel;
                        post = {
                            ...post,
                            DiamondCount: diamondCount,
                            PostEntryReaderState: {
                                ...post.PostEntryReaderState,
                                DiamondLevelBestowed: action.payload.diamondLevel,
                            },
                        };
                    } else if (
                        post?.RepostedPostEntryResponse?.PostHashHex && post.RepostedPostEntryResponse?.PostHashHex === action.payload.postHashHex
                    ) {

                        const diamondCount = post.RepostedPostEntryResponse.DiamondCount + action.payload.diamondLevel;
                        post = {
                            ...post,
                            RepostedPostEntryResponse: {
                                ...post.RepostedPostEntryResponse,
                                DiamondCount: diamondCount,
                                PostEntryReaderState: {
                                    ...post.RepostedPostEntryResponse.PostEntryReaderState,
                                    DiamondLevelBestowed: action.payload.diamondLevel,
                                },
                            },
                        };
                    }

                    const updatedComments = post.Comments?.map((comment) => {

                        if (comment?.Comments) {
                            const comments = [...comment.Comments];
                            for (let j = comments.length - 1; j >= 0; j--) {
                                const comment = comments[j];
                                if (comment?.PostHashHex && comment.PostHashHex === action.payload.postHashHex) {
                                    const diamondCount = comment.DiamondCount + action.payload.diamondLevel;
                                    comments[j] = {
                                        ...comment,
                                        DiamondCount: diamondCount,
                                        PostEntryReaderState: {
                                            ...comment.PostEntryReaderState,
                                            DiamondLevelBestowed: action.payload.diamondLevel,
                                        },
                                    };
                                }
                            }
                            comment = {
                                ...comment,
                                Comments: comments,
                            };
                        }

                        if (comment?.PostHashHex && comment.PostHashHex === action.payload.postHashHex) {
                            const diamondCount = comment.DiamondCount + action.payload.diamondLevel;
                            comment = {
                                ...comment,
                                DiamondCount: diamondCount,
                                PostEntryReaderState: {
                                    ...comment.PostEntryReaderState,
                                    DiamondLevelBestowed: action.payload.diamondLevel,
                                },
                            };
                        }
                        return comment;
                    });

                    return {
                        ...post,
                        Comments: updatedComments || null,
                    };
                };

                if (notificationState.NotificationsPosts) {
                    let post: PostEntryResponse | null = null;
                    const posts = Object.values(notificationState.NotificationsPosts);
                    posts.forEach((p) => {
                        if (p.PostHashHex === action.payload.postHashHex) {
                            post = p;
                        }
                        if (p.RepostedPostEntryResponse?.PostHashHex === action.payload.postHashHex) {
                            post = p;
                        }
                        p.Comments?.forEach((comment) => {
                            if (comment.PostHashHex === action.payload.postHashHex) {
                                post = p;
                            }
                        });
                    });

                    if (post) {
                        const updatedPost = updatePostRepost(post) as unknown as PostEntryResponse;
                        p_posts[index] = {
                            ...notificationState,
                            NotificationsPosts: {
                                ...notificationState.NotificationsPosts,
                                [updatedPost.PostHashHex]: updatedPost,
                            },
                        };
                    }
                }

                if (postsData.PostHashHex) {
                    p_posts[index] = updatePostRepost(postsData);
                }
            };

            posts.forEach(forEachCallback(posts));
            newPosts.forEach(forEachCallback(newPosts));

            finalState[lists[i]] = {
                ...state[lists[i]],
                data: posts,
                newData: newPosts
            };
        }
        return finalState;
    },

    updatePollsInAllCachedPosts: (
        state: CachedState<Post>,
        action: PayloadAction<{ postHashHex: string; associationName: string, publicKey: string }>
    ) => {
        const finalState = { ...state };
        const lists = Object.keys(finalState);

        for (let i = 0; i < lists.length; i++) {
            const posts = [...finalState[lists[i]].data];
            const newPosts = [...state[lists[i]].newData];

            const forEachCallback = (p_posts: (Post | NotificationsState)[]) => (_data: Post | NotificationsState, index: number) => {
                const postsData = _data as Post;
                const notificationState = _data as NotificationsState;
                const updatePostRepost = (post: Post) => {

                    if (post?.PostHashHex && post.PostHashHex === action.payload.postHashHex) {
                        if (!post.desofyPoll) {
                            return post;
                        }

                        post = {
                            ...post,
                            desofyPoll: {
                                ...post.desofyPoll,
                                hasCurrentUserVoted: true,
                                options: post.desofyPoll.options.map((option) => {
                                    if (option.name === action.payload.associationName) {
                                        return {
                                            ...option,
                                            votes: [...(option.votes || []), action.payload.publicKey]
                                        };
                                    } else {
                                        return option;
                                    }
                                }),
                            },
                        };
                    } else if (
                        post?.RepostedPostEntryResponse?.PostHashHex && post.RepostedPostEntryResponse?.PostHashHex === action.payload.postHashHex
                    ) {
                        if (!post.RepostedPostEntryResponse?.desofyPoll) {
                            return post;
                        }

                        post = {
                            ...post,
                            RepostedPostEntryResponse: {
                                ...post.RepostedPostEntryResponse,
                                desofyPoll: {
                                    ...post.RepostedPostEntryResponse.desofyPoll,
                                    hasCurrentUserVoted: true,
                                    options: post.RepostedPostEntryResponse.desofyPoll.options.map((option) => {
                                        if (option.name === action.payload.associationName) {
                                            return {
                                                ...option,
                                                votes: [...(option.votes || []), action.payload.publicKey]
                                            };
                                        } else {
                                            return option;
                                        }
                                    }),
                                }
                            },
                        };
                    }

                    const updatedComments = post.Comments?.map((comment) => {

                        if (comment?.Comments) {
                            const comments = [...comment.Comments];
                            for (let j = comments.length - 1; j >= 0; j--) {
                                let comment = comments[j];
                                if (comment?.PostHashHex && comment.PostHashHex === action.payload.postHashHex) {
                                    if (!comment.desofyPoll) {
                                        return comment;
                                    }

                                    comment = {
                                        ...comment,
                                        desofyPoll: {
                                            ...comment.desofyPoll,
                                            hasCurrentUserVoted: true,
                                            options: comment.desofyPoll.options.map((option) => {
                                                if (option.name === action.payload.associationName) {
                                                    return {
                                                        ...option,
                                                        votes: [...(option.votes || []), action.payload.publicKey]
                                                    };
                                                } else {
                                                    return option;
                                                }
                                            }),
                                        },
                                    };
                                }
                            }
                            comment = {
                                ...comment,
                                Comments: comments,
                            };
                        }

                        if (comment?.PostHashHex && comment.PostHashHex === action.payload.postHashHex) {
                            if (!comment.desofyPoll) {
                                return comment;
                            }
                            comment = {
                                ...comment,
                                desofyPoll: {
                                    ...comment.desofyPoll,
                                    hasCurrentUserVoted: true,
                                    options: comment.desofyPoll.options.map((option) => {
                                        if (option.name === action.payload.associationName) {
                                            return {
                                                ...option,
                                                votes: [...(option.votes || []), action.payload.publicKey]
                                            };
                                        } else {
                                            return option;
                                        }
                                    }),
                                },
                            };
                        }
                        return comment;
                    });

                    return {
                        ...post,
                        Comments: updatedComments || null,
                    };
                };

                if (notificationState.NotificationsPosts) {
                    let post: PostEntryResponse | null = null;
                    const posts = Object.values(notificationState.NotificationsPosts);
                    posts.forEach((p) => {
                        if (p.PostHashHex === action.payload.postHashHex) {
                            post = p;
                        }
                        if (p.RepostedPostEntryResponse?.PostHashHex === action.payload.postHashHex) {
                            post = p;
                        }
                        p.Comments?.forEach((comment) => {
                            if (comment.PostHashHex === action.payload.postHashHex) {
                                post = p;
                            }
                        });
                    });

                    if (post) {
                        const updatedPost = updatePostRepost(post) as unknown as PostEntryResponse;
                        p_posts[index] = {
                            ...notificationState,
                            NotificationsPosts: {
                                ...notificationState.NotificationsPosts,
                                [updatedPost.PostHashHex]: updatedPost,
                            },
                        };
                    }
                }

                if (postsData.PostHashHex) {
                    p_posts[index] = updatePostRepost(postsData);
                }
            };

            posts.forEach(forEachCallback(posts));
            newPosts.forEach(forEachCallback(newPosts));
            finalState[lists[i]] = {
                ...state[lists[i]],
                data: posts,
                newData: newPosts
            };
        }
        return finalState;
    },

    updateCommentInAllCachedPosts: (
        state: CachedState<Post>,
        action: PayloadAction<{ postHashHex: string, modifiedPost: Post }>
    ) => {
        const finalState = { ...state };
        const lists = Object.keys(finalState);

        for (let i = 0; i < lists.length; i++) {
            const posts = [...finalState[lists[i]].data];
            const newPosts = [...state[lists[i]].newData];

            const forEachCallback = (p_posts: (Post | NotificationsState)[]) => (_data: Post | NotificationsState, index: number) => {
                const postsData = _data as Post;
                const notificationState = _data as NotificationsState;
                const updatePostRepost = (post: Post) => {

                    if (post?.PostHashHex && post.PostHashHex === action.payload.postHashHex) {
                        const modifiedPost = { ...action.payload.modifiedPost };
                        post = {
                            ...post,
                            CommentCount: modifiedPost.CommentCount,
                            Comments: [...(modifiedPost.Comments || [])],
                        };
                    } else if (
                        post?.RepostedPostEntryResponse?.PostHashHex && post.RepostedPostEntryResponse?.PostHashHex === action.payload.postHashHex
                    ) {
                        const modifiedPost = { ...action.payload.modifiedPost };
                        post = {
                            ...post,
                            RepostedPostEntryResponse: {
                                ...post.RepostedPostEntryResponse,
                                CommentCount: modifiedPost.CommentCount,
                                Comments: [...(modifiedPost.Comments || [])],
                            },
                        };
                    }

                    const updatedComments = post.Comments?.map((comment) => {

                        if (comment?.Comments) {
                            const comments = [...comment.Comments];
                            for (let j = comments.length - 1; j >= 0; j--) {
                                let comment = comments[j];
                                if (comment?.PostHashHex && comment.PostHashHex === action.payload.postHashHex) {
                                    const modifiedPost = { ...action.payload.modifiedPost };
                                    comment = {
                                        ...comment,
                                        CommentCount: modifiedPost.CommentCount,
                                        Comments: [...(modifiedPost.Comments || [])],
                                    };
                                }
                            }
                            comment = {
                                ...comment,
                                Comments: comments,
                            };
                        }

                        if (comment?.PostHashHex && comment.PostHashHex === action.payload.postHashHex) {
                            const modifiedPost = { ...action.payload.modifiedPost };

                            comment = {
                                ...comment,
                                CommentCount: modifiedPost.CommentCount,
                                Comments: [...(modifiedPost.Comments || [])],
                            };
                        }
                        return comment;
                    });

                    return {
                        ...post,
                        Comments: updatedComments || null,
                    };
                };

                if (notificationState.NotificationsPosts) {
                    let post: PostEntryResponse | null = null;
                    const posts = Object.values(notificationState.NotificationsPosts);

                    posts.forEach((p) => {
                        if (p.PostHashHex === action.payload.postHashHex) {
                            post = p;
                        }
                        if (p.RepostedPostEntryResponse?.PostHashHex === action.payload.postHashHex) {
                            post = p;
                        }
                        p.Comments?.forEach((comment) => {
                            if (comment.PostHashHex === action.payload.postHashHex) {
                                post = p;
                            }
                        });
                    });

                    if (post) {
                        const updatedPost = updatePostRepost(post) as unknown as PostEntryResponse;
                        p_posts[index] = {
                            ...notificationState,
                            NotificationsPosts: {
                                ...notificationState.NotificationsPosts,
                                [updatedPost.PostHashHex]: updatedPost,
                            },
                        };
                    }
                }

                if (postsData.PostHashHex) {
                    p_posts[index] = updatePostRepost(postsData);
                }
            };

            posts.forEach(forEachCallback(posts));
            newPosts.forEach(forEachCallback(newPosts));

            finalState[lists[i]] = {
                ...state[lists[i]],
                data: posts,
                newData: newPosts
            };
        }
        return finalState;
    },

    deletePostFromCachedState: (
        state: CachedState<Post>,
        action: PayloadAction<{ hashHex: string }>
    ): CachedState<Post> => {
        // Create a copy of the state to make changes without modifying the original state
        const finalState: CachedState<Post> = { ...state };

        // Get the list of keys from the finalState
        const lists = Object.keys(finalState);

        for (let i = 0; i < lists.length; i++) {
            const posts = [...finalState[lists[i]].data];
            const newPosts = [...finalState[lists[i]].newData];

            // Define the forEachCallback outside of the loop to avoid unnecessary re-creation
            const forEachCallback = (p_posts: Post[]) => (data: Post | NotificationsState, index: number) => {
                const postsData = data as Post;

                if (postsData.Comments) {
                    const comments = [...postsData.Comments];
                    for (let j = comments.length - 1; j >= 0; j--) {
                        const comment = comments[j];
                        if (comment?.PostHashHex && comment.PostHashHex === action.payload.hashHex) {
                            comments[j] = {
                                ...comment,
                                IsHidden: true,
                            };
                        }
                    }
                    p_posts[index] = {
                        ...postsData,
                        CommentCount: comments.length - 1,
                        Comments: comments,
                    };
                }

                if (postsData.PostHashHex && postsData.PostHashHex === action.payload.hashHex) {
                    p_posts[index] = {
                        ...p_posts[index],
                        IsHidden: true,
                    };
                }
                else if (
                    postsData?.RepostedPostEntryResponse?.PostHashHex && postsData.RepostedPostEntryResponse?.PostHashHex === action.payload.hashHex
                ) {
                    p_posts[index] = {
                        ...p_posts[index],
                        RepostedPostEntryResponse: {
                            ...p_posts[index].RepostedPostEntryResponse,
                            IsHidden: true,
                        },
                    };
                }
            };

            // Use forEachCallback to process both 'data' and 'newData'
            posts.forEach(forEachCallback(posts));
            newPosts.forEach(forEachCallback(newPosts));

            // Update the state with the modified data and newData arrays
            finalState[lists[i]] = {
                ...finalState[lists[i]],
                data: posts,
                newData: newPosts,
            };
        }

        return finalState;
    },

    resetAllState: (state: CachedState) => {
        const finalState = { ...state };
        const lists = Object.keys(finalState);

        for (let i = 0; i < lists.length; i++) {
            finalState[lists[i]] = {
                ...state[lists[i]],
                data: [],
                newData: [],
                dataPostHashHexes: [],
                newDataPostHashHexes: [],
                lastFetchTime: new Date().toISOString(),
            };
        }
        return finalState;
    },

    resetCachedDataOfKeys: (state: CachedState, action: PayloadAction<string[]>) => {
        const finalState = { ...state };
        const lists = Object.keys(finalState);

        for (let i = 0; i < lists.length; i++) {
            if (action.payload.includes(lists[i])) {
                finalState[lists[i]] = {
                    ...state[lists[i]],
                    data: [],
                    newData: [],
                    dataPostHashHexes: [],
                    newDataPostHashHexes: [],
                    lastFetchTime: new Date().toISOString(),
                };
            }
        }
        return finalState;
    },

    setSinglePost: (
        state: CachedState<Post>,
        action: PayloadAction<Post | undefined>
    ) => {
        return {
            ...state,
            singlePost: {
                ...state.singlePost,
                data: action.payload ? [action.payload] : [],
            }
        };
    },

    updateCachedRepostState: (state: CachedState<Post | NotificationsState>, action: PayloadAction<{
        hashHex: string;
        repostPostHashHex: string;
    }>) => {
        const finalState = { ...state };
        const lists = Object.keys(finalState);

        for (let i = 0; i < lists.length; i++) {
            const data = [...state[lists[i]].data];
            const newData = [...state[lists[i]].newData];

            const forEachCallback = (p_posts: (Post | NotificationsState)[]) => (_data: Post | NotificationsState, index: number) => {
                const postsData = _data as Post;
                const notificationState = _data as NotificationsState;
                const updatePostRepost = (post: Post) => {
                    let repostedByReader = false;
                    let repostCount = 0;
                    if (post?.PostHashHex && post.PostHashHex === action.payload.hashHex) {

                        repostedByReader =
                            !post.PostEntryReaderState?.RepostedByReader;
                        repostCount = repostedByReader
                            ? post.RepostCount + 1
                            : post.RepostCount - 1;
                        post = {
                            ...post,
                            RepostCount: repostCount,
                            PostEntryReaderState: {
                                ...(post.PostEntryReaderState || {}),
                                RepostedByReader: repostedByReader,
                                RepostPostHashHex: action.payload.repostPostHashHex,
                            },
                        };
                    } else if (
                        post?.RepostedPostEntryResponse?.PostHashHex && post.RepostedPostEntryResponse?.PostHashHex === action.payload.hashHex
                    ) {

                        repostedByReader =
                            !post.RepostedPostEntryResponse.PostEntryReaderState?.RepostedByReader;
                        repostCount = repostedByReader
                            ? post.RepostedPostEntryResponse.RepostCount + 1
                            : post.RepostedPostEntryResponse.RepostCount - 1;
                        post = {
                            ...post,
                            RepostedPostEntryResponse: {
                                ...post.RepostedPostEntryResponse,
                                RepostCount: repostCount,
                                PostEntryReaderState: {
                                    ...(post.RepostedPostEntryResponse.PostEntryReaderState || {}),
                                    RepostedByReader: repostedByReader,
                                    RepostPostHashHex: action.payload.repostPostHashHex,
                                },
                            },
                        };
                    }

                    const updatedComments = post.Comments?.map((comment) => {
                        repostedByReader = false;
                        repostCount = 0;

                        if (comment?.Comments) {
                            const comments = [...comment.Comments];
                            for (let j = comments.length - 1; j >= 0; j--) {
                                let comment = comments[j];
                                if (comment?.PostHashHex && comment.PostHashHex === action.payload.hashHex) {

                                    repostedByReader =
                                        !comment.PostEntryReaderState?.RepostedByReader;
                                    repostCount = repostedByReader
                                        ? comment.RepostCount + 1
                                        : comment.RepostCount - 1;
                                    comment = {
                                        ...comment,
                                        RepostCount: repostCount,
                                        PostEntryReaderState: {
                                            ...(comment.PostEntryReaderState || {}),
                                            RepostedByReader: repostedByReader,
                                            RepostPostHashHex: action.payload.repostPostHashHex,
                                        },
                                    };
                                }
                                comments[j] = comment;
                            }
                            comment = {
                                ...comment,
                                Comments: comments,
                            };
                        }

                        if (comment?.PostHashHex && comment.PostHashHex === action.payload.hashHex) {

                            repostedByReader =
                                !comment.PostEntryReaderState?.RepostedByReader;
                            repostCount = repostedByReader
                                ? comment.RepostCount + 1
                                : comment.RepostCount - 1;
                            comment = {
                                ...comment,
                                RepostCount: repostCount,
                                PostEntryReaderState: {
                                    ...(comment.PostEntryReaderState || {}),
                                    RepostedByReader: repostedByReader,
                                    RepostPostHashHex: action.payload.repostPostHashHex,
                                },
                            };
                        }
                        return comment;
                    });

                    return {
                        ...post,
                        Comments: updatedComments || null,
                    };
                };

                if (notificationState.NotificationsPosts) {
                    let post: PostEntryResponse | null = null;
                    const posts = Object.values(notificationState.NotificationsPosts);
                    posts.forEach((p) => {
                        if (p.PostHashHex === action.payload.hashHex) {
                            post = p;
                        }
                        if (p.RepostedPostEntryResponse?.PostHashHex === action.payload.hashHex) {
                            post = p;
                        }
                        p.Comments?.forEach((comment) => {
                            if (comment.PostHashHex === action.payload.hashHex) {
                                post = p;
                            }
                        });
                    });

                    if (post) {
                        const updatedPost = updatePostRepost(post) as unknown as PostEntryResponse;
                        p_posts[index] = {
                            ...notificationState,
                            NotificationsPosts: {
                                ...notificationState.NotificationsPosts,
                                [updatedPost.PostHashHex]: updatedPost,
                            },
                        };
                    }
                }

                if (postsData.PostHashHex) {
                    p_posts[index] = updatePostRepost(postsData);
                }
            };

            data.forEach(forEachCallback(data));
            newData.forEach(forEachCallback(newData));

            finalState[lists[i]] = {
                ...state[lists[i]],
                data: data,
                newData: newData
            };
        }
        return finalState;
    },

    updateModifiedPostInAllCachedStates: (
        state: CachedState<Post>,
        action: PayloadAction<{ modifiedPost: Post }>
    ) => {
        const finalState = { ...state };
        const lists = Object.keys(finalState);

        for (let i = 0; i < lists.length; i++) {
            const posts = [...finalState[lists[i]].data];
            const newPosts = [...state[lists[i]].newData];

            const forEachCallback = (p_posts: (Post | NotificationsState)[]) => (_data: Post | NotificationsState, index: number) => {
                const postsData = _data as Post;
                const notificationState = _data as NotificationsState;
                const updatePostRepost = (post: Post) => {

                    if (post?.PostHashHex && post.PostHashHex === action.payload.modifiedPost.PostHashHex) {
                        const modifiedPost = { ...action.payload.modifiedPost };
                        post = modifiedPost;
                    } else if (
                        post?.RepostedPostEntryResponse?.PostHashHex
                        && post.RepostedPostEntryResponse?.PostHashHex === action.payload.modifiedPost.PostHashHex
                    ) {

                        const modifiedPost = { ...action.payload.modifiedPost };
                        post = {
                            ...post,
                            RepostedPostEntryResponse: modifiedPost,
                        };
                    }

                    const updatedComments = post.Comments?.map((comment) => {

                        if (comment?.Comments) {
                            const comments = [...comment.Comments];
                            for (let j = comments.length - 1; j >= 0; j--) {
                                let comment = comments[j];
                                if (comment?.PostHashHex && comment.PostHashHex === action.payload.modifiedPost.PostHashHex) {
                                    const modifiedPost = { ...action.payload.modifiedPost };
                                    comment = modifiedPost;
                                }
                            }
                            comment = {
                                ...comment,
                                Comments: comments,
                            };
                        }

                        if (comment?.PostHashHex && comment.PostHashHex === action.payload.modifiedPost.PostHashHex) {
                            const modifiedPost = { ...action.payload.modifiedPost };

                            comment = modifiedPost;
                        }
                        return comment;
                    });

                    return {
                        ...post,
                        Comments: updatedComments || null,
                    };
                };

                if (notificationState.NotificationsPosts) {
                    let post: PostEntryResponse | null = null;
                    const posts = Object.values(notificationState.NotificationsPosts);
                    posts.forEach((p) => {
                        if (p.PostHashHex === action.payload.modifiedPost.PostHashHex) {
                            post = p;
                        }
                        if (p.RepostedPostEntryResponse?.PostHashHex === action.payload.modifiedPost.PostHashHex) {
                            post = p;
                        }
                        p.Comments?.forEach((comment) => {
                            if (comment.PostHashHex === action.payload.modifiedPost.PostHashHex) {
                                post = p;
                            }
                        });
                    });

                    if (post) {
                        const updatedPost = updatePostRepost(post) as unknown as PostEntryResponse;
                        p_posts[index] = {
                            ...notificationState,
                            NotificationsPosts: {
                                ...notificationState.NotificationsPosts,
                                [updatedPost.PostHashHex]: updatedPost,
                            },
                        };
                    }
                }

                if (postsData.PostHashHex) {
                    p_posts[index] = updatePostRepost(postsData);
                }
            };

            posts.forEach(forEachCallback(posts));
            newPosts.forEach(forEachCallback(newPosts));
            finalState[lists[i]] = {
                ...state[lists[i]],
                data: posts,
                newData: newPosts
            };
        }
        return finalState;
    },

    updateCachedPostLike: (state: CachedState<Post | NotificationsState>, action: PayloadAction<{
        hashHex: string
    }>) => {

        const finalState = { ...state };
        const lists = Object.keys(finalState);

        for (let i = 0; i < lists.length; i++) {
            const data = [...state[lists[i]].data];
            const newData = [...state[lists[i]].newData];

            const forEachCallback = (p_posts: (Post | NotificationsState)[]) => (_data: Post | NotificationsState, index: number) => {
                const postData = _data as Post;
                const notificationState = _data as NotificationsState;

                const updatePostLikes = (post: Post) => {
                    if (post?.PostHashHex && post.PostHashHex === action.payload.hashHex) {
                        post = {
                            ...post,
                            LikeCount: !post.PostEntryReaderState?.LikedByReader
                                ? post.LikeCount + 1
                                : post.LikeCount - 1,
                            PostEntryReaderState: {
                                ...post.PostEntryReaderState,
                                LikedByReader: !post.PostEntryReaderState?.LikedByReader,
                            },
                        };
                    } else if (
                        post?.RepostedPostEntryResponse?.PostHashHex && post.RepostedPostEntryResponse?.PostHashHex === action.payload.hashHex
                    ) {
                        post = {
                            ...post,
                            RepostedPostEntryResponse: {
                                ...post.RepostedPostEntryResponse,
                                LikeCount: !post.RepostedPostEntryResponse.PostEntryReaderState?.LikedByReader
                                    ? post.RepostedPostEntryResponse.LikeCount + 1
                                    : post.RepostedPostEntryResponse.LikeCount - 1,
                                PostEntryReaderState: {
                                    ...post.RepostedPostEntryResponse.PostEntryReaderState,
                                    LikedByReader: !post.RepostedPostEntryResponse.PostEntryReaderState?.LikedByReader,
                                },
                            },
                        };
                    }

                    const updatedComments = post.Comments?.map((comment) => {

                        if (comment?.Comments) {
                            const comments = [...comment.Comments];
                            for (let j = comments.length - 1; j >= 0; j--) {
                                let comment = comments[j];
                                if (comment?.PostHashHex && comment.PostHashHex === action.payload.hashHex) {
                                    comment = {
                                        ...comment,
                                        LikeCount: !comment.PostEntryReaderState?.LikedByReader
                                            ? comment.LikeCount + 1
                                            : comment.LikeCount - 1,
                                        PostEntryReaderState: {
                                            ...comment.PostEntryReaderState,
                                            LikedByReader: !comment.PostEntryReaderState?.LikedByReader,
                                        },
                                    };
                                    comments[j] = comment;
                                }
                            }
                            comment = {
                                ...comment,
                                Comments: comments,
                            };
                        }
                        if (comment?.PostHashHex && comment.PostHashHex === action.payload.hashHex) {
                            comment = {
                                ...comment,
                                LikeCount: !comment.PostEntryReaderState?.LikedByReader
                                    ? comment.LikeCount + 1
                                    : comment.LikeCount - 1,
                                PostEntryReaderState: {
                                    ...comment.PostEntryReaderState,
                                    LikedByReader: !comment.PostEntryReaderState?.LikedByReader,
                                },
                            };
                        }
                        return comment;
                    });

                    return {
                        ...post,
                        Comments: updatedComments || null,
                    };
                };

                if (notificationState.NotificationsPosts) {
                    let post: PostEntryResponse | null = null;
                    const posts = Object.values(notificationState.NotificationsPosts);
                    posts.forEach((p) => {
                        if (p.PostHashHex === action.payload.hashHex) {
                            post = p;
                        }
                        if (p.RepostedPostEntryResponse?.PostHashHex === action.payload.hashHex) {
                            post = p;
                        }
                        p.Comments?.forEach((comment) => {
                            if (comment.PostHashHex === action.payload.hashHex) {
                                post = p;
                            }
                        });
                    });

                    if (post) {
                        const updatedPost = updatePostLikes(post) as unknown as PostEntryResponse;
                        p_posts[index] = {
                            ...notificationState,
                            NotificationsPosts: {
                                ...notificationState.NotificationsPosts,
                                [updatedPost.PostHashHex]: updatedPost,
                            },
                        };
                    }
                }

                if (postData.PostHashHex) {
                    p_posts[index] = updatePostLikes(postData);
                }
            };

            data.forEach(forEachCallback(data));
            newData.forEach(forEachCallback(newData));

            finalState[lists[i]] = {
                ...state[lists[i]],
                data: data,
                newData: newData
            };
        }

        return finalState;
    },
};
