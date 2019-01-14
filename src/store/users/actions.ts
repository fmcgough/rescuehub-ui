import { action } from 'typesafe-actions';
import { UserActionTypes, UserWithToken } from './types';

export const fetchContext = (token: string) => action(UserActionTypes.FETCH_USER_CONTEXT, token);

export const fetchUserSuccess = (user: UserWithToken) =>
    action(UserActionTypes.FETCH_CONTEXT_SUCCESS, user);

export const fetchUserError = (err: string) => action(UserActionTypes.FETCH_CONTEXT_ERROR, err);

export const storeToken = (token: string) => action(UserActionTypes.STORE_TOKEN, token);
