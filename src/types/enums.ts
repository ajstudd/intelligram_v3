export enum EventType {
    IncreaseFollowers = 0,
    DecreaseFollowers = 1,
    OpenMessagesSettings = 2,
    ToggleProfileManager = 3,
    Navigation = 4,
    ToggleNotificationsFilter = 5,
    ToggleActionSheet = 6,
    UnsavePost = 7,
    RemovePendingBadges = 9,
    ToggleProfileInfoModal = 10,
    RefreshNotifications = 11,
    RefreshMessages = 12,
    FocusSearchHeader = 13,
    ToggleBidForm = 14,
    ToggleSetSelectedNfts = 15,
    BroadcastMessage = 16,
    ToggleHideNFTs = 17,
    ToggleRefreshDraftPosts = 18,
    ToggleHideCoinPrice = 19,
    UpdateContactsWithMessages = 20,
    RefreshContactsWithMessages = 21,
    OpenTransactionsFilter = 22,
    OpenNftFilterSettings = 23,
    toggleNftFilterIcon = 24,
    ToggleAcceptNFTModal = 25,
    NewComment = 26,
    VisibleFeedsUpdate = 27,
    ShowGiphyDialog = 28,
    VotePollPost = 29,
    ToggleContactsModal = 30,
    AddAsyncRequest = 31
}

export enum NotificationType {
    SubmitPost = 'SUBMIT_POST',
    BasicTransfer = 'BASIC_TRANSFER',
    CreatorCoin = 'CREATOR_COIN',
    Follow = 'FOLLOW',
    Like = 'LIKE',
    CreatorCoinTransfer = 'CREATOR_COIN_TRANSFER',
    NftBid = 'NFT_BID',
    AcceptNftBid = 'ACCEPT_NFT_BID',
    NftTransfer = 'NFT_TRANSFER',
    CreateNft = 'CREATE_NFT',
    UpdateNft = 'UPDATE_NFT'
}

export enum OptionType {
    Post = 'Post',
    FounderReward = 'FounderReward',
    Follow = 'Follow',
    None = ''
}

export enum DesofyTheme {
    Automatic = 'automatic',
    Light = 'light-theme',
    Dark = 'dark-theme',
    navy = 'navy-theme'
}

export enum HiddenNFTType {
    Posts = 'Post',
    Details = 'Details',
    None = 'None'
}

export enum FeedType {
    Hot = 'Hot',
    Global = 'Global',
    Following = 'Following',
    Welcome = 'Welcome',
    Language = 'Language',
    Trending = 'Trending',
}

export enum SubscriptionNotificationType {
    Post = 'post',
    FounderReward = 'founderReward'
}

export enum HotFeedFilter {
    Today = 'day',
    Week = 'week'
}

export enum HomeScreenTab {
    Hot = 'Hot',
    Global = 'Global',
    Following = 'following',
    Welcome = 'Welcome',
    Language = 'Language',
    Trending = 'trending',
    New = 'new'
}

export enum BidScreenTab {
    BuyNow = 'Buy Now',
    Bid = 'Bid',
}

export enum MessageFilter {
    Holders = 'Holders',
    Holding = 'Holding',
    Followers = 'Followers',
    Following = 'Following'
}

export enum MessageSort {
    MostRecent = 'time',
    MostFollowed = 'followers',
    MostClout = 'clout',
    LargestHolder = 'holders',
}

export enum TransactionsFilter {
    FundTransfers = 'FundsTransfer',
    CreatorCoinsInvestments = 'CreatorCoinsInvestments',
    CreatorCoinsTransfers = 'CreatorCoinTransfer',
    Diamonds = 'Diamonds'
}

export enum NftType {
    Single = 'Single',
    Multiple = 'Multiple'
}

export enum ProfileScreenTab {
    Posts = 'Posts',
    Diamonds = 'Diamonds',
    NFTs = 'NFTs',
    Gallery = 'Gallery'
}

export enum NotificationSetting {
    Active = 'active',
    Like = 'like',
    Follow = 'follow',
    Comment = 'comment',
    Mention = 'mention',
    Repost = 'repost',
    Diamond = 'diamond',
    Monetary = 'monetary',
    OnlyVerified = 'onlyVerified',
    Nft = 'nft',
    Messages = 'messages',
}

export enum WalletTab {
    Purchased = 'Purchased',
    Received = 'Received'
}

export enum CreatorCoinScreenTab {
    Holders = 'Holders',
    History = 'History'
}

export enum NftFilter {
    Gallery = 'Gallery',
    MyBids = 'MyBids',
    ForSale = 'ForSale',
    Transferable = 'Transferable',
    PendingTransfers = 'PendingTransfers'
}

export enum NftSort {
    MostRecent = 'MostRecent',
    MostPopular = 'MostPopular',
    PriceAscending = 'PriceAscending',
    PriceDecending = 'PriceDescending'
}

export enum AffectedPublicKeyMeta {
    ParentPosterPublicKeyBase58Check = 'ParentPosterPublicKeyBase58Check',
    MentionedPublicKeyBase58Check = 'MentionedPublicKeyBase58Check',
    RepostedPublicKeyBase58Check = 'RepostedPublicKeyBase58Check',
}

export enum TopCreatorsType {
    Likes = 0,
    Follows = 1,
    DiamondsReceived = 2,
    DiamondsGiven = 3,
}

export enum UserActivityType {
    Login = 'Login',
    Logout = 'Logout',
    Post = 'Post',
    Like = 'Like',
    Repost = 'Repost',
    Comment = 'Comment',
    Diamond = 'Diamond',
    Follow = 'Follow',
    Unfollow = 'Unfollow',
    Session = 'Session'
}

export enum NotificationSubscriptionType {
    post = 'post',
    founderReward = 'founderReward'
}

export enum FollowerFollowingTabNames {
    Followers = 'followers',
    Following = 'following'
}

export enum PostAssociationType {
    PollResponse = 'POLL_RESPONSE'
}
