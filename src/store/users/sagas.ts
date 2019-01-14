import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { UserService } from '../../services/UserService';
import { fetchContext, fetchUserSuccess, fetchUserError, storeToken } from './actions';
import { UserActionTypes } from './types';

// Use redux-saga to trigger actions asynchronously, with a generator function
function* handleFetchContext(action: ActionType<typeof fetchContext>) {
    const service = new UserService(action.payload);
    try {
        const result = yield call(() => service.getContext());
        if (result.error) {
            yield put(fetchUserError(result.error));
        } else {
            yield all([
                put(fetchUserSuccess(result)),
                put(storeToken(result.token)),
            ]);
        }
    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchUserError(err.stack!));
        } else {
            yield put(fetchUserError('An unknown error occurred.'));
        }
    }
}

function* watchFetchRequest() {
    yield takeEvery(UserActionTypes.FETCH_USER_CONTEXT, handleFetchContext);
}

function* handleStoreToken(action: ActionType<typeof storeToken>) {
    yield call(() => localStorage.setItem('@@token', action.payload));
}

function* watchStoreToken() {
    yield takeLatest(UserActionTypes.STORE_TOKEN, handleStoreToken);
}

function* userSaga() {
    yield all([
        fork(watchFetchRequest),
        fork(watchStoreToken)
    ]);
}

export default userSaga;
