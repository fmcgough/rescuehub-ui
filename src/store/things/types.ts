export interface Thing {
    id?: number;
    description: string;
}

export const enum ThingActionTypes {
    FETCH_REQUEST = '@@things/FETCH_REQUEST',
    FETCH_SUCCESS = '@@things/FETCH_SUCCESS',
    FETCH_ERROR = '@@things/FETCH_ERROR',
}

export interface ThingState {
    readonly loading: boolean;
    readonly things: Thing[];
    readonly error?: string;
}
