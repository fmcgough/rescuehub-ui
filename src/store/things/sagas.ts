import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { ThingService } from '../../services/ThingService';
import { fetchSuccess, fetchError } from './actions';
import { ThingActionTypes } from './types';

// Use redux-saga to trigger actions asynchronously, with a generator function
function* handleFetch() {
    const service = new ThingService(''); // TODO get token from localStorage
    try {
        const result = yield call(() => service.getThings());
        if (result.error) {
            yield put(fetchError(result.error));
        } else {
            yield put(fetchSuccess(result));
        }
    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchError(err.stack!));
        } else {
            yield put(fetchError('An unknown error occurred.'));
        }
    }
}

function* watchFetchRequest() {
    yield takeEvery(ThingActionTypes.FETCH_REQUEST, handleFetch);
}

function* thingSaga() {
    yield all([
        fork(watchFetchRequest)
    ]);
}

export default thingSaga;
