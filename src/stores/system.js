import {countPage} from '~/utils/helper';
import systemService from '~/service/system';
import { cpus } from 'os';
const type = {
    UPDATETABLELIST: 'UPDATETABLELIST',
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

        tableList: []
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
        [type['UPDATETABLELIST']](state, list) {
            state.tableList = list;
        }
    },
    actions: {
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