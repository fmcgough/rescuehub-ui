import { Reducer } from 'redux';
import { ThingActionTypes, ThingState } from './types';

export const initialState: ThingState = {
    error: undefined,
    loading: false,
    things: [],
};

const reducer: Reducer<ThingState> = (state = initialState, action) => {
    switch (action.type) {
        case ThingActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true };
        }
        case ThingActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, things: action.payload };
        }
        case ThingActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
};

export { reducer as thingReducer };
