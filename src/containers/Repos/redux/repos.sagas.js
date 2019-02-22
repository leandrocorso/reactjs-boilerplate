import { takeEvery, put, call } from 'redux-saga/effects';

import  { GithubService } from '../../../services';
import  { HTTP_ERROR } from '../../../utils/constants';
import { FETCH_REPOS } from './repos.actionTypes';

function* fetchReposByUserName(action){
	console.log(action)
	try {
		const result = yield call(GithubService.getGithubReposByUserName(action.userName));
		if (result.status === 200) {
			yield put({ type: FETCH_REPOS.SUCCESS, data: result.data });
		} else {
			yield put({ type: FETCH_REPOS.FAILURE, error: HTTP_ERROR[result.status] });
		}
  } catch(e) {
		yield put({ type: FETCH_REPOS.FAILURE, error: HTTP_ERROR[e.status] });
  }
}

export default [
	takeEvery(FETCH_REPOS.REQUEST, fetchReposByUserName),
];
