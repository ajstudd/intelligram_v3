import React from 'react';
import { DesofyTheme, Profile, Post, DiamondSender } from '@types';

export interface ModalAction {
    // TODO: the actionType should come from an enum.
    actionType?: string;
    label: string;
    variant: 'primary' | 'primary-outline';
}

export interface ModalState {
    isModalOpen: boolean;
    title: string;
    description: string;
    actions?: ModalAction[];
}
export interface InformationModalState {
    isModalOpen: boolean;
    title: string;
    description: React.ReactNode;
    actions?: ModalAction[];
}

export interface MediaModal {
    isMediaModalOpen: boolean;
    mediaUrl: string;
}

export interface ScheduleModal {
    isScheduleModalOpen: boolean;
}

export interface PaidPromotionModal {
    isPaidPromotionModalOpen: boolean;
    promotedPost: Post | undefined;
}

export interface DeletePromotionPostModal {
    isDeletePromotionModalOpen: boolean;
    isProfilePromotion?: boolean;
    promotionId: string;
}
export interface RejectPromotionPostModal {
    isRejectPromotionModalOpen: boolean;
    post: Post | undefined;
    isProfilePromotion?: boolean;
    promotionId: string;
}
export interface CancelPromotionPostModal {
    isCancelPromotionModalOpen: boolean;
    post: Post | undefined;
    isProfilePromotion?: boolean;
    promotionId: string;
}
export interface ProfileBasicInfo {
    username : string;
    publicKey : string;
}
export interface ProfilePromotionModal {
    isProfilePromotionModalOpen: boolean;
    promotedProfile: ProfileBasicInfo | undefined;
}

export interface CreatePostModal {
    isCreatePostModalOpen: boolean;
}

export interface RepostModal {
    isRepostModalOpen: boolean;
    profiles: Profile[];
    isFetchingProfiles: boolean;
    repostCount: number;
}

export interface LikedByModal {
    isLikedByModalOpen: boolean;
    profiles: Profile[];
    isFetchingProfiles: boolean;
    likeCount: number;
}

export interface DiamondModal {
    isDiamondModalOpen: boolean;
    isFetchingSenders: boolean;
    diamondSenders: DiamondSender[];
    diamondCount: number;
}

export interface QuoteRepostModal {
    isQuoteRepostModalOpen: boolean;
    isFetchingQuoteReposts: boolean;
    QuoteReposts: Post[];
    quoteRepostCount: number;
}

export interface LikedByModalDetails {
    profiles: Profile[];
    likeCount?: number;
}

export interface RepostModalDetails {
    profiles: Profile[];
    repostCount?: number;
}

export interface DiamondModalDetails {
    diamondSenders: DiamondSender[];
    diamondCount?: number;
}

export interface QuoteRepostModalDetails {
    QuoteReposts: Post[];
    quoteRepostCount?: number;
}

export interface RepostWithQuoteModal {
    isRepostWithQuoteModalOpen: boolean;
    post: Post | null;
    isSinglePost?: boolean;
    quotingUsername: string;
}

export interface RepostWithQuoteModalDetails {
    post: Post | null;
    isSinglePost?: boolean;
    quotingUsername: string;
}

export interface SuccessRepostModal {
    isSuccessRepostModalOpen: boolean;
    postHashHex: string;
}
export interface SuccessRepostModalDetails {
    postHashHex: string;
}

export interface EditProfileModal {
    isEdiProfileModalOpen: boolean;
    profile: Profile | undefined;
}

export interface EditProfileModalDetails {
    profile: Profile | undefined;
}

export interface AcceptNftTransferModal {
    isAcceptNftTransferModalOpen: boolean;
    post: Post | undefined;
}

export interface AcceptNftTransferModalDetails {
    post: Post | undefined;
}

export interface SelectedUserList {
    label: string
    value: number | string
}

export interface SuccessNftTransferModal {
    isSuccessNftTransferModalOpen: boolean;
    successMessage: string;
}
export interface SuccessNftTransferModalDetails {
    successMessage: string;
}

export interface DeletePostModal {
    isDeletePostModalOpen: boolean;
    post: Post | undefined;
    isSinglePost: boolean;
}

export interface deleteUserListModal {
    isDeleteUserListModalOpen: boolean;
    title: string;
    description: string;
    listType: string;
    id: string;
    userPublicKey?: string;
    listId?: string;
}

export interface DeletePostModalDetails {
    post: Post | undefined;
    isSinglePost: boolean;
}

export interface EditPostModal {
    isEditPostModalOpen: boolean;
    post: Post | undefined;
    isSinglePost: boolean;
}

export interface EditPostModalDetails {
    post: Post | undefined;
    isSinglePost: boolean;
}

export interface DisconnectTwitterModal {
    isDisconnectTwitterModalOpen: boolean;
}

export interface ConnectTwitterModal {
    isConnectTwitterModalOpen: boolean;
}

export interface BuyCoinModal {
    isBuyCoinModalOpen: boolean;
    profile: Profile | null;
    isFetchingProfiles: boolean;
    buyValue: number;
    sellValue: number;
}

export interface Toast {
    isOpen: boolean;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
}

export interface PageScrollOffset {
    page: string;
    scrollOffset: number;
    visibleItemIndex: number
}

export interface AddUserToListModal {
    isAddUserToListModalOpen: boolean;
}
export interface AddUserListModal {
    isAddUserListModalOpen: boolean;
}

export interface UiState {
    modal: ModalState;
    informationModal: InformationModalState;
    theme: DesofyTheme;
    anotherModalIsOpen: boolean;
    showMoreOptions: boolean;
    mediaModal: MediaModal;
    globalModal: ModalState;
    toast: Toast;
}

export interface CreatePostErrorModal {
    isCreatePostErrorModalOpen: boolean;
    error: string;
}
