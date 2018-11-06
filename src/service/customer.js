import {get} from './fetch';
class Customer {
    getLoadCustomer(params) {
        return get('/feapi/news', params);
    }
    queryLoadCustomer(params) {
        return get('/feapi/plans', params);
    }
}
export default new Customer();