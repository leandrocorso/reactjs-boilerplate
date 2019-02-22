import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class ExampleService {

    static fetchPosts() {
        return axios.get(`${BASE_URL}/posts`);
    };

}

export default ExampleService;
