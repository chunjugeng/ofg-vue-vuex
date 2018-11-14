
import applicationService from '~/service/application';
import {countPage} from '~/utils/helper';
import state  from './state';
import mutations from './mutations';
import actions from './actions';
import type from './mutations-type';
const Application = {
    namespaced: true,
    state: {
        loading: true,
        search: {},
        pager: {
            page: 0,
            pageSize: 10,
            totalRecords: 0,
            totalPage: 0
        },
        tableList: [],
    },

    mutations: {
        [type['CUSTOMPAGESIZE']](state, pageSize) {
            state.pager.pageSize = pageSize;
        },
        [type['CALCULATEPAGES']](state, totalRecords) {
            const params = {
                totalRecords,
                pageSize: state.pager.pageSize
            };
            const totalPage = countPage(params);
            state.loading = false;
            state.pager.totalRecords = totalRecords;
            state.pager.totalPage = totalPage;
        },
        [type['INIT']](state, res) {
            state.tableList = res.list;
        },
    },
    actions: {
        loanAppManagement({state}, page) {
            const params = {
                page: page|| state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return applicationService.loadCustomer(params);
        },

        reviewTaskAssign({state}, page) {
            const params = {
                page: page|| state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return applicationService.loadCustomer(params);
        },
        async customPageSize({dispatch, commit, state}, params) {
            commit(type['CUSTOMPAGESIZE'], params.pageSize);
            await dispatch('changePage', {type: params.type, page: 0});
            dispatch('initPage', state.pager, {root: true});
        },

        async changePage({dispatch, commit}, params) {
            let res = {};
            switch(params.type) {
                case 'ALLREVIEWCASES':
                    res = await dispatch('loanAppManagement', params.page);
                    break;
                    
                case 'ALLREVIEWTASKS':
                    res = await dispatch('reviewTaskAssign', params.page);
                    break;
            }
            commit(type['CALCULATEPAGES'], res.totalRecords);

            commit(type['INIT'], res);
        },
        async init({dispatch}, params) {
            dispatch('customPageSize', params);
        }
    },
    modules: {
        caseAssignment: {
            namespaced: true,
            state: state.caseAssignment,
            mutations: mutations.caseAssignment,
            actions: actions.caseAssignment,
        },
        myReviewCases: {
            namespaced: true,
            state: state.myReviewCases,
            mutations: mutations.myReviewCases,
            actions: actions.myReviewCases
        }
        
    }
};

export default Application;