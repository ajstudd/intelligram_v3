import { IdentityUser } from '@types';

export interface AuthState {
    identityUsers: IdentityUser[];
    isLoading: boolean;
    activeUser: IdentityUser | null | undefined;
    isInitialized: boolean;
}
