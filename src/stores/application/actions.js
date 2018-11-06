import applicationService from '~/service/application';
import type from './mutations-type';

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
        first: {
            search({commit, state}) {
                
                commit(type.caseAssignment.first['SEARCH'], res.list);
            },
            getTime({commit}, params) {
                commit(type.caseAssignment.first['GETTIME'], params);
            },
            onChange({commit}, ev) {
                commit(type.caseAssignment.first['ONCHANGE'], ev);
            },
            customPageSize({commit, dispatch}, pageSize) {
                commit(type.caseAssignment.first['CUSTOMPAGESIZE'], pageSize);
                dispatch('changePage', 0);
            },
            async changePage({commit, dispatch, state}, page) {
                const res = await queryLoanAppManagement({
                    state,
                    page
                });
                commit(type.caseAssignment.first['UPDATEAPPTABLELIST'], res.list);
            },
            async init({commit, dispatch, state}) {
                commit(type.caseAssignment.first['CUSTOMPAGESIZE'], 10);
                
                const [app, review] = await Promise.all([queryLoanAppManagement({state}), queryLoanAppReviewers()]);

                commit(type.caseAssignment.first['INIT'], {
                    appTotalRecords: app.totalRecords,
                    reviewTotalRecords: review.totalRecords
                });
                
                commit(type.caseAssignment.first['UPDATEAPPTABLELIST'], app.list);
                commit(type.caseAssignment.first['UPDATEREVIEWTABLELIST'], review.list);
            }
        }
    }
};


export default actions;