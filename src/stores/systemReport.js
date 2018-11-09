import {countPage} from '~/utils/helper';
import systemService from '~/service/system';
const type = {
    INIT: 'INIT',
    CALCULATEPAGE: 'CALCULATEPAGE',
    CUSTOMPAGESIZE: 'CUSTOMPAGESIZE'
};
export default {
    namespaced: true,
    state: {
        loading: true,
        search: {
            key: '',
            value: '',
            name: ''
        },
        pager: {
            page: 0,
            pageSize: 10,
            totalRecords: 0,
            totalPage: 0
        },

        settingList: []
    },
    mutations: {
        [type['CUSTOMPAGESIZE']](state, pageSize) {
            state.loading = true;
            state.pager.pageSize = parseFloat(pageSize);
        },
        [type['CALCULATEPAGE']](state, totalRecords) {
            const params = {
                totalRecords, 
                pageSize: state.pager.pageSize
            };
            state.loading = false;
            const totalPage = countPage(params);
            state.pager.totalRecords = totalRecords;
            state.pager.totalPage = totalPage;
        },
        [type['INIT']](state, list) {
            state.settingList = list;
        }
    },
    actions: {
        BONUSISSUE({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return systemService.loadCustomer(params);
        },

        FEEDBACKSUMMARY({state}, page) {
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

    }
}