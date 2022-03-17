import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers(): any {
  try {
    const result = yield call(api.getUsers);
    yield put(
      actions.getUserSuccess({
        items: result.data,
      })
    );
  } catch (e) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
