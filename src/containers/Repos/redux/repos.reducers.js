import { FETCH_REPOS } from './repos.actionTypes';

const INITIAL_STATE = {
    userName: null,
    isLoading: false,
    error: null,
    data: null,
}

export default function reducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case FETCH_REPOS.REQUEST:
            return  {
                ...state,
                userName: action.userName,
                isLoading: true,
                data: state.data,
            }

        case FETCH_REPOS.SUCCESS:
            return  {
                ...state,
                isLoading: false,
                error: state.error,
                data: action.data,
            }

        case FETCH_REPOS.FAILURE:
            return  {
                ...state,
                isLoading: false,
                error: action.error,
                data: state.data,
            }

        case FETCH_REPOS.CANCEL:
        case FETCH_REPOS.RESET:
            return { ...state }
            
        default: return state;
    }
};