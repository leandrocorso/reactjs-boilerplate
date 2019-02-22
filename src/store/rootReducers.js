import { combineReducers } from "redux";

import tasksReducer from '../containers/Tasks/redux/tasks.reducers';
import reposReducer from '../containers/Repos/redux/repos.reducers';

const rootReducers = combineReducers({
    repos: reposReducer,
    tasks: tasksReducer,
});

export default rootReducers;

