import {get} from './fetch';
class Finance {
    loadCustomer(params) {
        return get('/feapi/news', params);
    }
    queryLoadCustomer(params) {
        return get('/feapi/plans', params);
    }
}
export default new Finance();