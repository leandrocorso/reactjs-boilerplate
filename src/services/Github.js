import axios from 'axios';

const BASE_URL = 'https://api.github.com';

class GithubService {

    static fetchReposByUserName(userName) {
        return axios.get(`${BASE_URL}/users/${userName}/repos`);
    };

}

export default GithubService;
