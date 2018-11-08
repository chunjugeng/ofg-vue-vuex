import applicationService from '~/service/application';
import type from './mutations-type';

function loanAppManagement(pager, page) {
    const params = {
        page: page || pager.page,
        pageSize: pager.pageSize,
        type: 'media-report',
        platform: 'desktop'
    };
    return applicationService.loadCustomer(params);
}
function queryLoanAppManagement(payload) {
    const {state, page} = payload;
    const params = {
        page: page|| state.appPager.page,
        pageSize: state.appPager.pageSize,
        type: 'media-report',
        platform: 'desktop'
    };
    return applicationService.loadCustomer(params);
}

function queryLoanAppReviewers() {
    return applicationService.queryLoadCustomer();
}

const actions= {
    allReviewCases: {
        queryLoanAppManagement({state}, page) {
            const params = {
                page: page|| state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return applicationService.loadCustomer(params);
        },
        async init({commit, dispatch}) {
            const res = await dispatch('queryLoanAppManagement');
            commit(type.allReviewCases['INIT'], res.list);
        }

    },
    allReviewTasks: {},

    caseAssignment: {
        getTime({commit}, params) {
            commit(type.caseAssignment['GETTIME'], params);
        },
        onChange({commit}, ev) {
            commit(type.caseAssignment['ONCHANGE'], ev);
        },
        customPageSize({commit, dispatch}, pageSize) {
            commit(type.caseAssignment['CUSTOMPAGESIZE'], pageSize);
            dispatch('changePage', 0);
        },
        async changePage({commit, dispatch, state}, page) {
            const res = await loanAppManagement(state.appPager, page)
            commit(type.caseAssignment['UPDATEAPPTABLELIST'], res.list);
        },
        async init({commit, state}) {
            commit(type.caseAssignment['CUSTOMPAGESIZE'], 10);
            const [app, review] = await Promise.all([loanAppManagement(state.appPager), queryLoanAppReviewers()]);
            commit(type.caseAssignment['INIT'], {
                app, review
            });
        }
    },
    myReviewCase: {
        async changePage({commit, state}, page) {
            const res = await loanAppManagement(state, page);
            commit(type.myReviewCase['UPDATE'], res.list);
        },
        async init({commit, state}) {
            const res = await loanAppManagement(state);
            commit(type.myReviewCase['INIT'], res.totalRecords);
            commit(type.myReviewCase['UPDATE'], res.list);
            
        }
    }
};


export default actions;