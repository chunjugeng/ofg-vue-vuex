import collectionService from '~/service/collection';
import {countPage} from '~/utils/helper';

const type = {
    INIT: 'INIT',
    CUSTOMPAGESIZE: 'CUSTOMPAGESIZE',
    CALCULATEPAGES: 'CALCULATEPAGES', 
    DEFAULT: 'DEFAULT',
    UPDATE: 'UPDATE',
    CHANGENAV: 'CHANGENAV',
    CHANGETYPE: 'CHANGETYPE',
    UPDATELIST: 'UPDATELIST',
    RESETPAGER: 'RESETPAGER',
    
    UPDATEPAGESIZE: 'UPDATEPAGESIZE'
};
export default {
    namespaced: true, 
    state: {
        loading: true,
        pager: {
            page: 0,
            pageSize: 10,
            totalRecords: 0,
            totalPage: 0
        },
        search: {
            customerId: '',
            customerName: '',
            customerMobile: '',
            createTime: '',
            toTome: '',
            loanStatus: ''
        },
        nav: [
            {   
                type: 'CURRENT',
                text: 'Current Loan',
                thead: ['Application ID', 'Customer Name', 'Customer Mobile', 'Final Approve Time', 'Amount', 'Duration', 'Loan Type', 'Loan Status', 'Extension Nums', 'Due Date', 'Due Amount','Create Time']
            },
            {
                type: 'OVERDUE',
                text: 'Overdue Loan',
                thead: ['Application ID', 'Customer Name', 'Customer Mobile', 'Final Approve Time', 'Amount', 'Duration', 'Loan Type', 'Loan Status', 'Extension Nums', 'Due Date', 'Due Amount', 'Deposit Date', 'Received Amount', 'Overdue Days', 'Create Time', 'Option']
            }
        ],
        currType: 'CURRENT',
        table: {
            thead: [],
            list: [],
            text: 'Current Loan'
        }
            
    },
    mutations: {
        [type['CALCULATEPAGES']](state, totalRecords) {
            const pager = {
                totalRecords,
                pageSize: state.pager.pageSize
            };
            const totalPage = countPage(pager);
            state.loading = false;
            state.pager.totalPage = totalPage;
            state.pager.totalRecords = totalRecords;
        },
        [type['CUSTOMPAGESIZE']](state, pageSize) {
            state.pager.pageSize = pageSize;
        },
        [type['RESETPAGER']](state, payload) {
            state.pager.page = 0;
            state.pager.pageSize = payload.pSize;
            state.pager.totalRecords = payload.totalRecords;
        },
        [type['ERROR']](state, error) {
            state.loading = false;
            state.error = error;
        },
        [type['CHANGETYPE']](state, type) {
            state.loading = true;
            state.currType = type;
        },
        [type['DEFAULT']](state, res) {
            state.table.thead = res.thead;
            state.table.list = res.list;
        },
        [type['INIT']](state, res) {
            state.table.currType = state.nav[0].type;
            state.table.thead = state.nav[0].thead;
            state.table.text = state.nav[0].text;
            state.table.list = res.list;
        },

        [type['CHANGENAV']](state, payload) {
            // state.loading = false;
            state.table.thead = payload.thead;
            state.table.list = payload.list;
            state.table.text = payload.text;
        },
        [type['UPDATELIST']](state, list) {
            state.table.list = list;
        },
    },
    actions: {
        customPageSize({commit, dispatch}, params) {
            commit(type['CUSTOMPAGESIZE'], params.pSize);
            dispatch('changePage', 0);
        },
        REDUCE({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
            };
            return collectionService.queryLoadCustomer(params);
        },
        PART({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return collectionService.loadCustomer(params);
        },
        OVERDUE({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
            };
            return collectionService.queryLoadCustomer(params);
        },
        CURRENT({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return collectionService.loadCustomer(params);
        },

        async changePage({commit, state, dispatch}, page) {
            const res = await dispatch(state.currType, page);
            commit(type['CALCULATEPAGES'], res.totalRecords);
            commit(type['UPDATELIST'], res.list);
        },
        async init({commit, dispatch, state}, params) {
            try {
                !params.thead ? commit(type['CHANGETYPE'], 'CURRENT') : commit(type['CHANGETYPE'], params.type);
                commit(type['CUSTOMPAGESIZE'], params.pSize);
                const res = await dispatch(state.currType);
                commit(type['CALCULATEPAGES'], res.totalRecords);
                if ( params.thead && params.thead.length > 0) {
                    commit(type['DEFAULT'], {...res, thead: params.thead});
                } else {
                    commit(type['INIT'], {...res});
                }
                
            } catch(e) {
                commit(type['ERROR'], e);
            }
        },
        async changeNav({commit, state, dispatch}, TYPE) {
            commit(type['CHANGETYPE'], TYPE);
            commit(type['CUSTOMPAGESIZE'], 10);

            let table = {};
            const res = await dispatch(TYPE);
            commit(type['CALCULATEPAGES'], res.totalRecords);
            state.nav.map(data=> {
                if (data.type === TYPE) {
                    table.text = data.text;
                    table.thead = data.thead;
                }
            });
            
            
            commit(type['RESETPAGER'], {pSize: 10, totalRecords: res.totalRecords});
            commit(type['CHANGENAV'], {
                ...res,
                ...table
            });
            
        }
    }
}