import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { ThingState } from './things/types';
import thingSaga from './things/sagas';
import { thingReducer, initialState as thingState } from './things/reducer';

export interface RootState {
    things: ThingState;
}

export const initialState: RootState = {
    things: thingState
};

// Whenever an action is dispatched, Redux will update each top-level application
// state property using the reducer with the matching name. It's important that
// the names match exactly, and that the reducer acts on the corresponding
// RootState property type.
export const rootReducer = combineReducers<RootState>({
    things: thingReducer
});

// Use `fork` to execute these tasks in the background
export function* rootSaga() {
    yield all([
        fork(thingSaga),
        // Fork any other store sagas here...
    ]);
}
