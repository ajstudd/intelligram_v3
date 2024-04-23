import { DesofyTweet, ListedUser, Post, Post as PostResponse, UserList } from '@types';

export interface PostState {
    posts: PostResponse[];
    tweets: PostResponse[];
    desofyTweets: DesofyTweet[];
    topPosts: Post[];
    recentPosts: Post[];
    isImportingTweets: boolean;
    importingTweetId: string | undefined;
    isFetchingBookMarkedPosts: boolean;
    importedTweets: PostResponse[];
    scheduledPosts: PostResponse[];
    isRepostingPostHashHexes: string[];
    isQuoteRepostingPostHashHexes: string[];
    isSendDiamondPostHashHexes: string[];
    trendingViewedPosts: string[];
    savedPostsPostHashHexes: string[];
    bookMarkedPosts: Post[];
    activeUserListId: string;
    activeListWithUsersData: {
        userList: UserList;
        listedUsers: ListedUser[]
    }
    promotionPost: Post | null;
    adminPanelPromotionPost: Post | null;
}
