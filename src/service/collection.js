import {get} from './fetch';
class Collection {
    loadCustomer(params) {
        return get('/feapi/news', params);
    }
    queryLoadCustomer(params) {
        return get('/feapi/plans', params);
    }
    
    getLoanAppReviewers(params) {
        return get('/review/loanAppReviewers', params);
    }
}
export default new Collection();