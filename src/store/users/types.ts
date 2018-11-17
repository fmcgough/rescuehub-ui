export interface User {
    id: number;
    version: number;
    email: string;
    roles: string[];
    name: string;
    new: boolean;
}

export interface UserState {
    readonly user?: User;
}
