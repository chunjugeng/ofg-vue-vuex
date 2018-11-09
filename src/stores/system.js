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
        querySettingList({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return systemService.loadCustomer(params);
        },

        async customPageSize({commit, dispatch, state}, pageSize) {
            commit(type['CUSTOMPAGESIZE'], pageSize);
            await dispatch('changePage');
            dispatch('initPage', state.pager, {root: true});
        },
        async changePage({commit, dispatch}, page) {
            const res = await dispatch('querySettingList', page);
            commit(type['CALCULATEPAGE'], res.totalRecords);
            commit(type['INIT'], res.list);
        },

        async init({commit, dispatch, state, rootState}, pageSize) {
            // commit(type['CUSTOMPAGESIZE'], pageSize);
            // const res = await dispatch('querySettingList');
            // commit(type['CALCULATEPAGE'], res.totalRecords);
            // commit(type['INIT'], res.list);
            await dispatch('customPageSize', pageSize);
            
        }

    }
}