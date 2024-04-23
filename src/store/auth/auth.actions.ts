import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit';

import { IdentityUser, Profile, UpdateProfile } from '@types';
import { AuthState } from '@store';
import { Constants } from '@constants';


// HELPER FUNCTIONS :
function updateLocalStorageIdentityUsers(identityUsers: IdentityUser[]) {
    const authUsersKey = Constants.localStorageAuthenticatedUsers;
    const authUsersValue = JSON.stringify(identityUsers);
    localStorage.setItem(authUsersKey, authUsersValue);
}

function getInitialIdentityUsers(): IdentityUser[] {
    const authUsersKey = Constants.localStorageAuthenticatedUsers;
    const authUsersValue = localStorage.getItem(authUsersKey);
    return authUsersValue ? JSON.parse(authUsersValue) : [];
}

function getActiveUser(identityUsers: IdentityUser[]) {
    const activeUser = identityUsers.find((user: IdentityUser) =>
        user.isActive
    );
    return activeUser;
}
