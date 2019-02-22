// import { FETCH_REPOS } from './repos.actionTypes';

export function fetchReposByUserName(userName) {
    console.log(userName)
    return { type: 'FETCH_REPOS', userName }
}