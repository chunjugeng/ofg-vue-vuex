import customerService from '~/service/customer';
import {countPage, onChange} from '~/utils/helper';
const type = {
    INIT: 'INIT',
    CALCULATEPAGE: 'CALCULATEPAGE',
    CUSTOMPAGESIZE: 'CUSTOMPAGESIZE',
    CHANGEUI: 'CHANGEUI',
    GETTIME: 'GETTIME'
};
export default {
    namespaced: true,
    state: {
        loading: true,
        search: {
            mobile: '',
            realName: '',
            ktp: '',
            status: '',
            registerTime: '',
            toTime: ''
        },
        pager: {
            page: 0,
            pageSize: 10,
            totalRecords: 0,
            totalPage: 0
        },

        customerList: []
    },
    mutations: {
        [type['GETTIME']](state, params) {
            state.search[params.key] = params.val;
        },
        [type['CHANGEUI']](state, ev) {
            onChange.call(state.search, ev);
        },
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
            state.customerList = list;
        }
    },
    actions: {
        getTime({commit}, params) {
            commit(type['GETTIME'], params);
        },
        async onQuery({commit, state, dispatch}) {
            dispatch('changePage', 0);
        },

        changeUI({commit}, ev) {
            commit(type['CHANGEUI'], ev);
        },

        queryCustomerList({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                ...state.search
            };
            return customerService.queryCustomerList(params);
        },

        async customPageSize({commit, dispatch, state}, pageSize) {
            commit(type['CUSTOMPAGESIZE'], pageSize);
            await dispatch('changePage');
            dispatch('initPage', state.pager, {root: true});
        },
        async changePage({commit, dispatch}, page) {
            const res = await dispatch('queryCustomerList', page);
            commit(type['CALCULATEPAGE'], res.totalRecords);
            commit(type['INIT'], res.list);
        },

        async init({commit, dispatch, state, rootState}, pageSize) {
            await dispatch('customPageSize', pageSize);
        }
    }
}