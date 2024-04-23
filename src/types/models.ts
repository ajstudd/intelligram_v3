// import { AffectedPublicKeyMeta } from '.';
import { NotificationType } from './enums';

export interface User {
    publicKey: string;
}

export interface ProfileWithPublicKey {
    Profile: Profile;
    PublicKeyBase58Check: string;
}

export interface CoinEntry {
    DeSoLockedNanos: number;
    CoinWatermarkNanos: number;
    CoinsInCirculationNanos: number;
    CreatorBasisPoints: number;
}

export interface UserList {
    _id: string;
    title: string;
    description: string;
    ownerPublicKey: string;
    createdAt: string;
    updatedAt: string;
    listedUserCount?: number
}

export interface ListedUser {
    _id: string;
    note: string;
    userPublicKey: string;
    userAddedBy: string;
    listId: string;
    createdAt: string;
    updatedAt: string;
    profile: Profile | null;
}
export interface ListWithUsers {
    userList: UserList;
    listedUsers: ListedUser[];
}

export interface ListedUsersWithProfile {
    listedUser: ListedUser;
    profile: Profile;
}

export interface ListWithUsersData {
    userList: UserList;
    listedUsers: ListedUsersWithProfile[];
}
export interface UserList {
    _id: string;
    title: string;
    description: string;
    ownerPublicKey: string;
}

export interface User {
    BalanceNanos: number;
    BlockedPubKeys: any;
    CanCreateProfile: boolean;
    HasPhoneNumber: boolean;
    IsAdmin: boolean;
    ProfileEntryResponse: Profile;
    PublicKeyBase58Check: string;
    PublicKeysBase58CheckFollowedByUser: string[];
    UsersWhoHODLYou: CreatorCoinHODLer[];
    UsersYouHODL: CreatorCoinHODLer[];
}

export interface TransferCoinResponse {
    SpendAmountNanos: number;
    TotalInputNanos: number;
    ChangeAmountNanos: number;
    FeeNanos: number;
    Transaction: {
        TxnVersion: number;
        TxnInputs: any[] | null;
        TxnOutputs: any[] | null;
        TxnFeeNanos: number;
        TxnNonce: {
            ExpirationBlockHeight: number;
            PartialID: number;
        };
        TxnMeta: {
            ProfilePublicKey: string;
            CreatorCoinToTransferNanos: number;
            ReceiverPublicKey: string;
        };
        PublicKey: string;
        ExtraData: any | null;
        Signature: {
            Sign: any | null;
            RecoveryId: number;
            IsRecoverable: boolean;
        };
        TxnTypeJSON: number;
    };
    TransactionHex: string;
    TxnHashHex: string;
}

export interface CreatorCoinTransaction {
    ExpectedDeSoReturnedNanos: number;
    ExpectedCreatorCoinReturnedNanos: number;
    FounderRewardGeneratedNanos: number;
    SpendAmountNanos: number;
    TotalInputNanos: number;
    ChangeAmountNanos: number;
    FeeNanos: number;
    Transaction: {
        TxnVersion: number;
        TxInputs: null | any[]; // You can replace 'any' with a more specific type if needed
        TxOutputs: null | any[]; // You can replace 'any' with a more specific type if needed
        TxnFeeNanos: number;
        TxnNonce: {
            ExpirationBlockHeight: number;
            PartialID: number;
        };
        TxnMeta: {
            ProfilePublicKey: string;
            OperationType: number;
            DeSoToSellNanos: number;
            CreatorCoinToSellNanos: number;
            DeSoToAddNanos: number;
            MinDeSoExpectedNanos: number;
            MinCreatorCoinExpectedNanos: number;
        };
        PublicKey: string;
        ExtraData: null | any; // You can replace 'any' with a more specific type if needed
        Signature: {
            Sign: null | any; // You can replace 'any' with a more specific type if needed
            RecoveryId: number;
            IsRecoverable: boolean;
        };
        TxnTypeJSON: number;
    };
    TransactionHex: string;
    TxnHashHex: string;
}

export interface ProfileExtraData {
    LargeProfilePicURL: string;
    PinnedPostHashHex?: string;
    FeaturedImageURL?: string;
}

export interface Profile {
    _id?: string;
    id : string;
    username: string;
    name: string;
    phone : string;
    score : number;
    email: string;
    role: 'ADMIN' | 'USER';
    photo?: string;
    IsVerified: boolean;
    Posts: Post[] | null;
}

interface DesoTransactionNonce {
    ExpirationBlockHeight: number;
    PartialID: number;
}

interface DesoTransactionSignature {
    Sign: {
        R: number;
        S: number;
    };
    RecoveryId: number;
    IsRecoverable: boolean;
}

interface DesoTransactionOutput {
    PublicKey: string;
    AmountNanos: number;
}

interface DesoTransaction {
    TxnVersion: number;
    TxInputs: any[] | null; // Replace 'any[]' with the actual type if known
    TxOutputs: DesoTransactionOutput[];
    TxnFeeNanos: number;
    TxnNonce: DesoTransactionNonce;
    TxnMeta: any; // Replace 'any' with the actual type if known
    PublicKey: string;
    ExtraData: any | null; // Replace 'any' with the actual type if known
    Signature: DesoTransactionSignature;
    TxnTypeJSON: number;
}

interface TransactionResponse {
    Transaction: DesoTransaction;
    TxnHashHex: string;
    TransactionIDBase58Check: string;
}

interface ConstructedTransactionResponse {
    TotalInputNanos: number;
    SpendAmountNanos: number;
    ChangeAmountNanos: number;
    FeeNanos: number;
    TransactionIDBase58Check: string;
    Transaction: DesoTransaction;
    TransactionHex: string;
    TxnHashHex: string;
}

interface SubmittedTransactionResponse {
    Transaction: DesoTransaction;
    TxnHashHex: string;
    TransactionIDBase58Check: string;
    PostEntryResponse: any | null; // Replace 'any' with the actual type if known
}


export enum StringFunctionOptions {
    FirstLetterUpperCase = 'FirstLetterUpperCase',
    FirstLetterLowerCase = 'FirstLetterLowerCase',
    AllUpperCase = 'AllUpperCase',
    AllLowerCase = 'AllLowerCase',
    CapitalizeWholeString = 'CapitalizeWholeString',
    RemoveWhiteSpace = 'RemoveWhiteSpace',
    RemoveSpecialCharacters = 'RemoveSpecialCharacters',
    RemoveNumbers = 'RemoveNumbers',
}

export interface PromotionPostPriceResponse {
    promotionPostPrice: {
        desoAmount: number;
        validityHours: number;
        _id: string
    }
    success: boolean;
}

export interface PromotionProfilePriceResponse {
    promotionProfilePrice: {
        desoAmount: number;
        validityHours: number;
        _id: string
    }
    success: boolean;
}

export interface Impressions {
    views: number;
    uniqueViews: number;
}

export interface PromotionImpressionCount {
    impressions: Impressions;
    success: boolean;
}
export interface PromotionClickCount {
    clicks: number;
    success: boolean;
}

export interface GetSettingsResponse {
    _id: string;
    deSoNode: string;
    useDesofyNode: boolean;
    createdAt: string;
    updatedAt: string;
    isPromotionPostsEnabled: boolean;
    isReferralSystemActive: boolean;
}
export interface PromotionPaymentAccountResponse {
    promotionPaymentAccount: {
        _id: string;
        publicKey: string;
        label: string
    }
    success: boolean;
}

export interface PromotionPost {
        _id: string;
        desoAmount?: number;
        views?: number;
        userPublicKey: string;
        transactionHash: string;
        status: string;
        scheduledStart: string;
        paymentAccount: string;
        isDeleted: boolean;
        adminResponse: string;
        durationHours: number;
        postSnapshot: Post;
        impressions: number;
}

export interface PromotionProfile {
    _id: string;
    publicKey: string;
    userName: string;
    isDeleted: boolean;
    scheduledStart: string;
    isRefunded: boolean;
    durationHours: number;
    status: string;
    paymentAccount: string;
    transactionId: string;
    impressions: number;
    clicks: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
    isPromoted?: boolean;
    promotionStatus: string;
    promotionId?: string;
    desoAmount?: number;
    remarks?: string;
    adminResponse ? : string;
    scheduledStartPlus24Hours: string;
}
export interface PromotionPostResponse {
    promotionPost: PromotionPost;
    success: boolean;
}
export interface PromotionProfileResponse {
    promotionProfiles: PromotionProfile[];
    success: boolean;
}
export interface SinglePromotionProfileResponse {
    promotionProfile: PromotionProfile;
    success: boolean;
}

export interface BlockedDatesResponse {
    success: boolean;
    blockedDates: string[];
}
export interface promotePostActionResponse {
    success: boolean;
    message: string;
}
export interface PromotionsListResponse {
    success: boolean;
    promotions: Promotion[];
}
export interface PromotionProfileListResponse {
    success: boolean;
    promotions: PromotionProfile[];
}
export interface Promotion {
    _id: string;
    postHashHex: string;
    userPublicKey: string;
    postSnapshot: Post;
    scheduledStart: number; // You can use a Date type if you want to work with date objects.
    durationHours: number;
    status: string;
    paymentAccount: string;
    desoAmount?: number;
    transactionHash: string;
    adminResponse?: string;
    impressions: number; // The actual type should be specified based on your data.
    views: number; // The actual type should be specified based on your data.
}

export enum PromotionStatus {
    Pending = 'Pending',
    Approved = 'Approved',
    Rejected = 'Rejected',
    Finished = 'Finished',
    Cancelled = 'Cancelled',
    Promoted = 'Promoted',
    Abandoned = 'Abandoned',
}

export interface DesoTransactionResponse {
    constructedTransactionResponse: ConstructedTransactionResponse;
    submittedTransactionResponse: SubmittedTransactionResponse;
}

export interface DAOCoinEntry {
    NumberOfHolders: number;
    CoinsInCirculationNanos: string;
    MintingDisabled: boolean;
    TransferRestrictionStatus: string;
}

export interface PostReaderState {
    LikedByReader: boolean;
    RepostedByReader: boolean;
    RepostPostHashHex?: string;
    DiamondLevelBestowed: number;
}

export interface PostExtraData {
    EmbedVideoURL?: string;
    isDesofyPoll?: boolean;
    Node?: string;
    Language?: string;
    app?: string;
    PollOptions?: string;
    PollWeightType?: string;
}

export interface NodeInfo {
    Name: string;
    Owner: string;
    URL: string;
}

export interface Post {
    _id?: string;
    PostHashHex: string;
    Body: string;
    scheduledTime?: number;
    ImageURLs: string[];
    VideoURLs: string[];
    isImportedTweet?: boolean;
    TimestampNanos: number;
    ProfileEntryResponse: Profile;
    LikeCount: number;
    PostEntryReaderState: PostReaderState;
    CommentCount: number;
    Comments: Post[] | null;
    RepostCount: number;
    RepostedPostEntryResponse: Post;
    DiamondCount: number;
    ParentStakeID: string;
    PostExtraData: PostExtraData;
    ConfirmationBlockHeight: number;
    CreatorBasisPoints: number;
    InGlobalFeed: boolean;
    InMempool: boolean;
    IsHidden: boolean;
    IsPinned: boolean;
    ParentPosts: Post[];
    PosterPublicKeyBase58Check: string;
    StakeMultipleBasisPoints: number;
    QuoteRepostCount: number;
    IsNFT: boolean;
    SerialNumber: number;
    NumNFTCopies: number;
    NumNFTCopiesBurned: number;
    NumNFTCopiesForSale: number;
    IsForSale?: boolean;
    HighestBidAmountNanos: number;
    LastAcceptedBidAmountNanos: number;
    LowestBidAmountNanos: number;
    MinBidAmountNanos: number;
    OwnerPublicKeyBase58Check: string;
    BidAmountNanos: number;
    NFTRoyaltyToCoinBasisPoints: number;
    NFTRoyaltyToCreatorBasisPoints: number;
    AdditionalCoinRoyaltiesMap?: { [k: string]: number };
    AdditionalDESORoyaltiesMap?: { [k: string]: number };
    HasUnlockable?: boolean;
    imageDimensions?: { width: number; height: number }[];
    processed?: boolean;
    desofyPoll?: DesofyPoll;
    isPromoted?: boolean;
    promotionStatus?: string;
    impressions?: number;
    views?: number;
    promotionId?: string;
    desoAmount?: number;
    remarks?: string;
}

export interface ScheduledPost {
    _id: string;
    signedTransactionHex?: string;
    postHashHex?: string;
    scheduledTime: number;
    postToTwitter: boolean;
    posted: boolean;
    BodyObj: {
        Body: string;
        ImageURLs: string[];
        VideoURLs: string[];
    };
    PostExtraData?: Partial<PostExtraData>;
    pollOptions: PollOption[];
    post?: Post;
}

export interface NotificationLikeMetaData {
    IsUnlike: boolean;
    PostHashHex: string;
}

export interface NotificationFollowMetaData {
    IsUnfollow: boolean;
}

export interface NotificationSubmitPostMetaData {
    ParentPostHashHex: string;
    PostHashBeingModifiedHex: string;
}

export interface NotificationCreatorCoinMetaData {
    DeSoToAddNanos: number;
    DeSoToSellNanos: number;
    CreatorCoinToSellNanos: number;
    OperationType: string;
    DESOLockedNanosDiff: number;
}

export interface NotificationCreatorCoinTransferMetaData {
    CreatorCoinToTransferNanos: number;
    CreatorUsername: string;
    DiamondLevel: number;
    PostHashHex: string;
}

export interface NotificationBasicTransferMetaData {
    DiamondLevel: number;
    PostHashHex: string;
}

export interface NotificationNftBidMetaData {
    BidAmountNanos: number;
    NFTPostHashHex: string;
    SerialNumber: number;
    IsBuyNowBid: boolean;
    OwnerPublicKeyBase58Check: string;
    AdditionalCoinRoyaltiesMap: { [k: string]: number };
    AdditionalDESORoyaltiesMap: { [k: string]: number };
}

export interface NotificationTransactionOutputResponse {
    AmountNanos: number;
    PublicKeyBase58Check: string;
}

export interface AffectedPublicKeyObj {
    // Metadata: AffectedPublicKeyMeta,
    PublicKeyBase58Check: string;
}

export interface NotificationCreateNftMetaData {
    NFTPostHashHex: string;
    AdditionalCoinRoyaltiesMap: { [k: string]: number };
    AdditionalDESORoyaltiesMap: { [k: string]: number };
}

export interface NotificationUpdateNftMetaData {
    NFTPostHashHex: string;
    IsForSale: boolean;
}

export interface NotificationTransferNFTMetaData {
    NFTPostHashHex: string;
}

export interface NotificationMetaData {
    TxnType: NotificationType;
    TransactorPublicKeyBase58Check: string;
    CreatorCoinTxindexMetadata?: NotificationCreatorCoinMetaData;
    SubmitPostTxindexMetadata?: NotificationSubmitPostMetaData;
    FollowTxindexMetadata?: NotificationFollowMetaData;
    LikeTxindexMetadata?: NotificationLikeMetaData;
    CreatorCoinTransferTxindexMetadata?: NotificationCreatorCoinTransferMetaData;
    NFTBidTxindexMetadata?: NotificationNftBidMetaData;
    AcceptNFTBidTxindexMetadata?: NotificationNftBidMetaData;
    BasicTransferTxindexMetadata?: NotificationBasicTransferMetaData;
    AffectedPublicKeys?: AffectedPublicKeyObj[];
    CreateNFTTxindexMetadata?: NotificationCreateNftMetaData;
    UpdateNFTTxindexMetadata?: NotificationUpdateNftMetaData;
    NFTTransferTxindexMetadata?: NotificationTransferNFTMetaData;
}

export interface Notification {
    Index: number;
    Metadata: NotificationMetaData;
    TxnOutputResponses: NotificationTransactionOutputResponse[];
    isSeen?: boolean;
}

export interface CreatorCoinHODLer {
    BalanceNanos: number;
    CreatorPublicKeyBase58Check: string;
    HODLerPublicKeyBase58Check: string;
    ProfileEntryResponse: Profile;
    HasPurchased: boolean;
}

export interface ContactWithMessages {
    Messages: Message[];
    NumMessagesRead: number;
    ProfileEntryResponse: Profile;
    PublicKeyBase58Check: string;
    CreatorCoinHoldingAmount?: number;
    UnreadMessages?: boolean;
    LastDecryptedMessage?: string;
}

export interface Message {
    DecryptedText?: string;
    EncryptedText: string;
    IsSender: boolean;
    RecipientMessagingGroupKeyName: string;
    RecipientMessagingPublicKey: string;
    RecipientPublicKeyBase58Check: string;
    SenderMessagingGroupKeyName: string;
    SenderMessagingPublicKey: string;
    SenderPublicKeyBase58Check: string;
    TstampNanos: number;
    LastOfGroup?: boolean;
    V2: boolean;
    diamondLevel?: number;
    post?: Post;
    Version?: number;
}

export interface DiamondSender {
    HighestDiamondLevel: number;
    ProfileEntryResponse: Profile;
    ReceiverPublicKeyBase58Check: string;
    SenderPublicKeyBase58Check: string;
    TotalDiamonds: string;
}

export interface CreatorCoinTransaction {
    transactorPublicKey: string;
    coinsInCirculation: number;
    coinsChange: number;
    coinPrice: number;
    bitcloutValue: number;
    usdValue: number;
    timeStamp: number;
}

export interface CloutTag {
    clouttag: string;
    count: number;
}

export interface BidEdition {
    BuyNowPriceNanos: number;
    HighestBidAmountNanos: number;
    IsForSale: boolean;
    IsBuyNow: boolean;
    IsPending: boolean;
    LastAcceptedBidAmountNanos: number;
    LowestBidAmountNanos: number;
    MinBidAmountNanos: number;
    OwnerPublicKeyBase58Check: string;
    SerialNumber: number;
    LastOwnerPublicKeyBase58Check?: string;
}

export interface SearchHistoryProfile {
    Username: string;
    IsVerified: boolean;
    ProfilePic: string;
    PublicKeyBase58Check: string;
}

export interface LoginButton {
    title: string;
    label: string;
    action: () => void;
}

export interface TransactionMetaData {
    TransactorPublicKeyBase58Check: string;
    CreatorCoinTxindexMetadata?: NotificationCreatorCoinMetaData;
    SubmitPostTxindexMetadata?: NotificationSubmitPostMetaData;
    FollowTxindexMetadata?: NotificationFollowMetaData;
    LikeTxindexMetadata?: NotificationLikeMetaData;
    CreatorCoinTransferTxindexMetadata?: NotificationCreatorCoinTransferMetaData;
    NFTBidTxindexMetadata?: NotificationNftBidMetaData;
    AcceptNFTBidTxindexMetadata?: NotificationNftBidMetaData;
    BasicTransferTxindexMetadata?: NotificationBasicTransferMetaData;
    AffectedPublicKeys?: { PublicKeyBase58Check: string; Metadata: string }[];
}

export interface Transaction {
    TransactionIDBase58Check: string;
    TransactionType: NotificationType;
    TransactionMetadata: TransactionMetaData;
    Outputs: { PublicKeyBase58Check: string; AmountNanos: number }[];
}

export interface TweetPoll {
    options: string[];
    duration_minutes: number;
}

export interface TweetOptions {
    poll?: TweetPoll;
}
export interface DesofyUser {
    publicKey: string;
    twitter: {
        name?: string;
        username?: string;
        id?: string;
        isLinked: boolean;
        profileImageUrl?: string;
        alwaysPostToTwitter?: boolean;
        includeDesofySignature?: boolean;
    };
    isMigratedToDesofySavedPosts: boolean;
    email?: string;
    referralLimit: number;
    notifications?: {
        settings: {
            [key: string]: boolean;
        };
    };
    hasAccessedPromotion: boolean;
    hasAccessedProfilePromotion : boolean;
    referralCode: string;
    isMigratedToDesofyNotifications: boolean;
}

export interface PollOption {
    _id?: string;
    name: string;
    votes?: string[];
}

export interface DesofyPoll {
    _id?: string;
    createdAt?: string;
    options: PollOption[];
    postHashHex?: string;
    publicKey?: string;
    updatedAt?: string;
    hasCurrentUserVoted?: boolean;
}

export interface ReferredUser {
    amountNanos: number;
    receiverReferralCode: string;
    referralCodeUserPublicKey: string;
    transactionIDBase58Check: string;
    referralCodeUserProfile: Profile;
}

export interface MessageDiamonds {
    _id: string;
    createdAt: string;
    diamondLevel: number;
    tStampNanos: number;
    sendDesoTransactionHex: string;
    receiverPublicKey: string;
    senderPublicKey: string;
    updatedAt: string;
}

export interface TweetPoll {
    options: string[];
    duration_minutes: number;
}

export interface TweetOptions {
    poll?: TweetPoll;
}

export interface SharePostProfile {
    profile: Profile;
    isSelected: boolean;
}

export interface CreatePostConfig {
    body: string;
    ownerPublicKey: string;
    posterPublicKey: string;
    isImportedTweet?: boolean;
    imageUrls?: string[];
    embeddedVideoUrl?: string;
    profileEntryResponse?: Profile ;
    videoUrls?: string[];
    createdAt: string | Date;
}

export interface ImportedTweetPost {
    twitterAccountId: string;
    tweetId: string;
    postHashHex: string;
    publicKey: string;
}

export interface DesofyPostedTweet {
    twitterAccountId: string;
    tweetId: string;
    postHashHex: string;
    publicKey: string;
}

export interface TweetMedia {
    height: number;
    width: number;
    media_key: string;
    type: 'photo' | 'video';
    url: string;
    localUrl?: string;
}

export interface DesofyTweet {
    created_at: string;
    edit_history_tweet_ids: string[];
    id: string;
    text: string;
    post: Post;
    importedDesofyPost?: ImportedTweetPost;
    medias: TweetMedia[];
}

export interface TweetResponseMetadata {
    next_token: string;
    result_count: number;
    newest_id: string;
    oldest_id: string;
}

export interface GetAllTweetsResponse {
    data: DesofyTweet[];
    metaData: TweetResponseMetadata;
    tweetIdToImportedTweetPostsMap: { [tweetId: string]: ImportedTweetPost };
    tweetIdToDesofyPostedTweetsMap: { [tweetId: string]: DesofyPostedTweet };
}

export interface NotificationsSubscriptions {
    publicKey: string;
    subscribedPublicKey: string;
    post: boolean;
    founderReward: boolean;
}

export interface ExchangeRateResponse {
    BuyDeSoFeeBasisPoints: number;
    NanosPerETHExchangeRate: number;
    NanosSold: number;
    SatoshisPerBitCloutExchangeRate: number;
    SatoshisPerDeSoExchangeRate: number;
    USDCentsPerBitCloutExchangeRate: number;
    USDCentsPerBitCloutReserveExchangeRate: number;
    USDCentsPerBitcoinExchangeRate: number;
    USDCentsPerDeSoBlockchainDotCom: number;
    USDCentsPerDeSoCoinbase: number;
    USDCentsPerDeSoExchangeRate: number;
    USDCentsPerDeSoReserveExchangeRate: number;
    USDCentsPerETHExchangeRate: number;
}

export interface AppSettings {
    deSoNode: string;
    useDesofyNode: boolean;
    isReferralSystemActive: boolean;
    isPromotionPostsEnabled: boolean;
}

export interface ProfileStatsResponse {
    actor: string;
    transactions: number;
    likes_r: number;
    likes_g: number;
    follows_r: number;
    follows_g: number;
    diamonds_r: number;
    diamonds_g: number;
    diamonds_value_r: number;
    diamonds_value_g: number;
    posts: number;
    replies_g: number;
    reclouts_g: number;
    quoted_reclouts_g: number;
    replies_r: number;
    reclouts_r: number;
    quoted_reclouts_r: number;
    first_txn_time: string;
    last_txn_time: string;
    profile_txn_time: string;
    username: string;
    description: string;
    fr: number;
    total_fee_nanos: number;
    fr_earnings_nanos: number;
    accepted_nft_paid_additional_creator_royalties_nanos: number;
    accepted_nft_paid_additional_creator_coin_royalties_nanos: number;
    buynow_nft_paid_additional_creator_royalties_nanos: number;
    buynow_nft_paid_additional_creator_coin_royalties_nanos: number;
    total_accepted_nft_nanos: number;
    accepted_nft_bid_paid_creator_royalty_nanos: number;
    accepted_nft_bid_paid_creator_coin_royalty_nanos: number;
    net_accepted_nft_nanos: number;
    total_buynow_nft_nanos: number;
    buynow_nft_bid_paid_creator_royalty_nanos: number;
    buynow_nft_bid_paid_creator_coin_royalty_nanos: number;
    net_buynow_nft_nanos: number;
    accepted_nft_bid_received_creator_royalty_nanos: number;
    accepted_nft_bid_received_additional_creator_royalties_nanos: number;
    buynow_nft_bid_received_creator_royalty_nanos: number;
    buynow_nft_bid_received_additional_creator_royalties_nanos: number;
    net_nft_bid_nanos: number;
    nft_received_royalties_nanos: number;
    nft_earnings: number;
    total_earnings: number;
}

export interface SingleProfileResponse {
    Profile: Profile;
    IsBlacklisted: boolean;
    IsGraylisted: boolean;
}

export interface TopCreatorsByFollowsResponse {
    data: TopCreator[];
}

interface TopCreator {
    public_key: string;
    follows: string;
    updated_at: string;
}

export interface CreatePromotionResponse {
    success: boolean;
    message:string;
    data: PromotionPost;
}

export interface DesoUser {
    PublicKeyBase58Check: string;
    ProfileEntryResponse: Profile;
    Utxos?: any;
    BalanceNanos: number;
    PublicKeysBase58CheckFollowedByUser: string[];
    UsersYouHODL: CreatorCoinHODLer[];
    UsersWhoHODLYouCount: number;
    HasPhoneNumber: boolean;
    CanCreateProfile: boolean;
    BlockedPubKeys: { [publicKey: string]: boolean };
    HasEmail: boolean;
    EmailVerified: boolean;
    JumioStartTime: number;
    JumioFinishedTime: number;
    JumioVerified: boolean;
    JumioReturned: boolean;
    IsAdmin: boolean;
    IsSuperAdmin: boolean;
    IsBlacklisted: boolean;
    IsGraylisted: boolean;
    TutorialStatus: string;
    CreatorCoinsPurchasedInTutorial: number;
    MustCompleteTutorial: boolean;
}

export interface TweetHistory {
    postHashHex: string;
    publicKey: string;
    tweetId: string;
    twitterAccountId: string;
    _id: string;
}

export interface IdentityUser {
    accessLevel: number;
    accessLevelHmac: string;
    btcDepositAddress: string;
    encryptedSeedHex: string;
    hasExtraText: boolean;
    jwt: string;
    adminAccess?: boolean;
    network: string;
    publicKey: string;
    derivedPublicKeyBase58Check: string;
    isActive: boolean;
    identityUserDetails: Profile;
    messagingPublicKeyBase58Check: string;
    accessGroupsOwned?: AccessGroupEntryResponse[] | undefined;
    allAccessGroups?: AccessGroupEntryResponse[] | undefined;
    isLoadingUser?: boolean;
    blockedPubKeys: {
        [key: string]: any;
    };
    hidePromotionPost?: string
}

export interface ScheduledPostDerivedAuthUser {
    publicKey: string;
    derivedPublicKey: string;
    encryptedDerivedSeedHex: string;
    expireDate: Date;
}

export interface AuthenticatedUserEncryptionKey {
    key: string;
    iv: string;
}

export interface DerivedAuthenticatedUser {
    publicKey: string;
    derivedPublicKey: string;
    encryptedDerivedSeedHex: string;
    encryptedDerivedJwt: string;
    encryptedJwt: string;
    encryptedAccessSignature: string;
    expirationBlock: number;
    derived: true;
    expireDate: Date;
    transactionSpendingLimitHex: string;
    encryptedMessagingPrivateKey: string;
    encryptedMessagingKeySignature: string;
    messagingPublicKeyBase58Check: string;
}

export interface DesofyTweet {
    created_at: string;
    edit_history_tweet_ids: string[];
    id: string;
    text: string;
    post: Post;
    importedDesofyPost?: ImportedTweetPost;
    medias: TweetMedia[];
}

export interface TweetResponseMetadata {
    next_token: string;
    result_count: number;
    newest_id: string;
    oldest_id: string;
}

export interface DesofyPostedTweet {
    twitterAccountId: string;
    tweetId: string;
    postHashHex: string;
    publicKey: string;
}
export interface GetAllTweetsResponse {
    data: DesofyTweet[];
    metaData: TweetResponseMetadata;
    tweetIdToImportedTweetPostsMap: { [tweetId: string]: ImportedTweetPost };
    tweetIdToDesofyPostedTweetsMap: { [tweetId: string]: DesofyPostedTweet };
}

export interface PostStatelessResponse {
    PostsFound: Post[];
    HotFeedPage: Post[];
}

export interface DiamondSender {
    DiamondSenderProfile: Profile;
    DiamondLevel: number;
}

export interface DesoApiError {
    message: string;
    status: number;
}

export interface NotificationFilterObject {
    label: string;
    isChecked: boolean;
    value: string;
}

export interface ProfileValues {
    Username: string | undefined;
    Description: string | undefined;
    CreatorBasisPoints: number;
}

export interface UpdateProfile {
    Username: string;
    Description: string;
    publicKey: string;
    CreatorBasisPoints: number;
    ExtraData: ProfileExtraData;
}

export interface Conversation {
    firstMessagePublicKey: string;
    messages: DecryptedMessageEntryResponse[];
    ChatType: ChatType;
}

export interface Conversation {
    firstMessagePublicKey: string;
    messages: DecryptedMessageEntryResponse[];
    ChatType: ChatType;
}
export interface ConversationMap {
    [k: string]: Conversation;
}

export interface AccessGroupMemberEntryResponse {
    AccessGroupMemberPublicKeyBase58Check: string;
    AccessGroupMemberKeyName: string;
    EncryptedKey: string;
    ExtraData?: {
        [k: string]: string;
    };
}

export interface AccessGroupEntryResponse {
    AccessGroupOwnerPublicKeyBase58Check: string;
    AccessGroupKeyName: string;
    AccessGroupPublicKeyBase58Check: string;
    ExtraData?: {
        [k: string]: string;
    };
    AccessGroupMemberEntryResponse: AccessGroupMemberEntryResponse | null;
}

export interface PublicKeyToProfileEntryResponseMap {
    [k: string]: String | null;
}

export enum ChatType {
    DM = 'DM',
    GROUPCHAT = 'GroupChat',
}

export interface NewMessageEntryResponse {
    ChatType: ChatType;
    SenderInfo: AccessGroupInfo;
    RecipientInfo: AccessGroupInfo;
    MessageInfo: MessageInfo;
}

export interface AccessGroupInfo {
    OwnerPublicKeyBase58Check: string;
    AccessGroupPublicKeyBase58Check: string;
    AccessGroupKeyName: string;
}
export interface MessageInfo {
    EncryptedText: string;
    TimestampNanos: number;
    TimestampNanosString: string;
    ExtraData: {
        [k: string]: string;
    };
}

export declare type DecryptedMessageEntryResponse = NewMessageEntryResponse & {
    DecryptedMessage: string;
    IsSender: boolean;
    error: string;
    diamondLevel?: number;
};

export enum DeSoNetwork {
    mainnet = 'mainnet',
    testnet = 'testnet',
}

export interface TransactionConstructionResponse {
    TransactionHex: string;
}

export interface ConstructAndSubmitResponse {
    TransactionConstructionResponse: TransactionConstructionResponse;
    SubmitTransactionResponse: any;
}
