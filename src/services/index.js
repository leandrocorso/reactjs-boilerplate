import ExampleService from './Example';
import GithubService from './Github';

class Service {

    static exec = async (serviceFunction, ...args) => {
        try {
            const result = await serviceFunction(...args);
            return result.data;
        } catch(error) {
            const { status, statusText } = error.request;
            return Object.assign({ error : `HTTP ${status} - (${statusText})` }, error);
        }
    }

}

export { Service, ExampleService, GithubService, };
