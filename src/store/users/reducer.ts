import { Reducer } from 'redux';
import { UserState } from './types';

export const initialState: UserState = {
    user: undefined
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export { reducer as userReducer };
