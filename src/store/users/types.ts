export interface User {
    id: number;
    version: number;
    email: string;
    roles: string[];
    name: string;
    new: boolean;
}

export interface Context {
    context: any;
    user: User;
}

export interface UserWithToken {
    user: User;
    token: string;
}

export const enum UserActionTypes {
    FETCH_USER_CONTEXT = '@@users/FETCH_USER_CONTEXT',
    FETCH_CONTEXT_SUCCESS = '@@users/FETCH_CONTEXT_SUCCESS',
    FETCH_CONTEXT_ERROR = '@@users/FETCH_CONTEXT_ERROR',
    STORE_TOKEN = '@@users/STORE_TOKEN',
}

export interface UserState {
    readonly user?: User;
    readonly authToken?: string;
    readonly authError?: string;
}
