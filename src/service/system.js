import {get} from './fetch';
class System {
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
export default new System();