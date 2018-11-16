import type from './mutations-type';
import systemService from '~/service/system';
export default {
    finance: {
        LOANISSUE({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return systemService.loadCustomer(params);
        },

        BONUSISSUE({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return systemService.loadCustomer(params);
        },
        LOANDEPOSIT({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return systemService.loadCustomer(params);
        },

        async customPageSize({commit, dispatch, state}, params) {
            commit(type['CUSTOMPAGESIZE'], params.pageSize);
            await dispatch('changePage', {type: params.type, page: 0});
            dispatch('initPage', state.pager, {root: true});
        },
        async changePage({commit, dispatch}, params) {
            const res = await dispatch(params.type, params.page);
            commit(type['CALCULATEPAGE'], res.totalRecords);
            commit(type['INIT'], res.list);
        },

        async init({dispatch}, params) {
            await dispatch('customPageSize', params);
            
        }
    },
    operation: {
        customPageSize({commit}, pageSize) {
            commit(type['CUSTOMPAGESIZE'], pageSize);
        },
        changePage({commit}, list) {
            commit(type['UPDATETABLELIST'], list);
        },
        init({commit, dispatch, state}, res) {
            commit(type['CALCULATEPAGE'], res.totalRecords);
            commit(type['UPDATETABLELIST'], res.list);
            dispatch('initPage', state.pager, {root: true});
        }
    }
}