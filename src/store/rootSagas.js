import { all } from 'redux-saga/effects';

import reposSagas from '../containers/Repos/redux/repos.sagas';

export default function* rootSagas() {
    yield all([
        ...reposSagas,
    ]);
};
