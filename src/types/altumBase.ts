import { Profile } from './models';

export interface AltumBaseCreatorBase {
    likes?: number;
    public_key: string;
    profile?: Profile;
    follows?: number;
    diamonds_received?: number;
    diamonds_received_value?: number;
    diamonds_given?: number;
    diamonds_given_value?: number;
    acai?: number;
}

export interface AltumBaseCreatorAcai extends AltumBaseCreatorBase {
    acai: number;
}

export interface AltumBaseCreatorLikes extends AltumBaseCreatorBase {
    likes: number;
}

export interface AltumBaseCreatorFollows extends AltumBaseCreatorBase {
    follows: number;
}

export interface AltumBaseCreatorDiamondsReceived extends AltumBaseCreatorBase {
    diamonds_received: number;
    diamonds_received_value: number;
}

export interface AltumBaseCreatorDiamondsGiven extends AltumBaseCreatorBase {
    diamonds_given: number;
    diamonds_given_value: number;
}

export interface BlockchainStats {
    start: string;
    end: string;
    height: number;
    likes: number;
    follows: number;
    posts: number;
    comments: number;
    coinbuys: number;
    coinsells: number;
    coinbuysclout: number;
    coinsellsclout: number;
    dau: number;
    dau10: number;
    dau50: number;
    dal: number;
    daf: number;
    dap: number;
    dad: number;
    nu: number;
    diamonds: number;
    rate: number;
    likes_y: number;
    follows_y: number;
    posts_y: number;
    comments_y: number;
    coinbuys_y: number;
    coinsells_y: number;
    coinbuysclout_y: number;
    coinsellsclout_y: number;
    dau_y: number;
    dau10_y: number;
    dau50_y: number;
    dal_y: number;
    daf_y: number;
    dap_y: number;
    dad_y: number;
    nu_y: number;
    diamonds_y: number;
}

export interface ProfileStats {
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
    buynow_nft_paid_additional_creator_royalties_nanos: null;
    buynow_nft_paid_additional_creator_coin_royalties_nanos: null;
    total_accepted_nft_nanos: number;
    accepted_nft_bid_paid_creator_royalty_nanos: number;
    accepted_nft_bid_paid_creator_coin_royalty_nanos: number;
    net_accepted_nft_nanos: number;
    total_buynow_nft_nanos: null;
    buynow_nft_bid_paid_creator_royalty_nanos: null;
    buynow_nft_bid_paid_creator_coin_royalty_nanos: null;
    net_buynow_nft_nanos: null;
    accepted_nft_bid_received_creator_royalty_nanos: number;
    accepted_nft_bid_received_additional_creator_royalties_nanos: number;
    buynow_nft_bid_received_creator_royalty_nanos: number;
    buynow_nft_bid_received_additional_creator_royalties_nanos: number;
    net_nft_bid_nanos: number;
    nft_received_royalties_nanos: number;
    nft_earnings: number;
    total_earnings: number;
}
