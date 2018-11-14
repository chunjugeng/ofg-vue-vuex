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
    myReviewCases: {
        loadCustomer({state}, page) {
            const params = {
                page: page|| state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return applicationService.loadCustomer(params);
        },
        async customPageSize({dispatch, commit, state}, pageSize) {
            commit(type['CUSTOMPAGESIZE'], pageSize);
            await dispatch('changePage', 0);
            dispatch('initPage', state.pager, {root: true});
        },

        async changePage({dispatch, commit}, page) {
            let res = await dispatch('loadCustomer', page);
            commit(type['CALCULATEPAGES'], res.totalRecords);

            commit(type['INIT'], res);
        },
        async init({dispatch}, pageSize) {
            dispatch('customPageSize', pageSize);
        }
    }
};


export default actions;