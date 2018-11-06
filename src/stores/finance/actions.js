
import financeService from '~/service/finance';
import type from './mutations-type';
let actions = {
    deposit: {
        setPageSize({commit, dispatch}, pageSize) {
            commit(type.deposit['SETPAGESIZE'], pageSize);
            dispatch('changePage', 0);
        },

        queryDeposit({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return financeService.loadCustomer(params);
        },

        async changePage({commit, dispatch}, page) {
            const res = await dispatch('queryDeposit', page);
            commit(type.deposit['UPDATE'], {
                list: res.list
            });
        },

        async init({commit, dispatch}) {
            await commit(type.deposit['SETPAGESIZE'], 10);
            const res = await dispatch('queryDeposit');
            commit(type.deposit['INIT'], {
                totalRecords: res.totalRecords
            });
            commit(type.deposit['UPDATE'], {
                list: res.list
            });
        }
    },
    loan: {
        setPageSize({commit, dispatch}, pageSize) {
            commit(type.loan['SETPAGESIZE'], pageSize);
            dispatch('changePage', 0);
        },
        queryLoan({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return financeService.loadCustomer(params);
        },

        async changePage({commit, dispatch}, page) {
            const res = await dispatch('queryLoan', page);
            commit(type.loan['UPDATE'], {
                list: res.list
            });
        },
        
        async init({commit, dispatch}) {
            await commit(type.loan['SETPAGESIZE'], 10);
            const res = await dispatch('queryLoan');
            commit(type.loan['INIT'], {
                totalRecords: res.totalRecords
            });
            commit(type.loan['UPDATE'], {
                list: res.list
            });
        },

        
    },
    bonus: {
        setPageSize({commit, dispatch}, pageSize) {
            commit(type.bonus['SETPAGESIZE'], pageSize);
            dispatch('changePage', 0);
        },
        queryBonus({state}, page) {
            const params = {
                page: page || state.pager.page,
                pageSize: state.pager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            return financeService.loadCustomer(params);
        },
        async changePage({commit, dispatch}, page) {
            const res = await dispatch('queryBonus', page);
            commit(type.bonus['UPDATE'], {
                list: res.list
            });
        },
        async init({commit, dispatch}) {
            await commit(type.bonus['SETPAGESIZE'], 10);
            const res = await dispatch('queryBonus');
            commit(type.loan['INIT'], {
                totalRecords: res.totalRecords
            });
            commit(type.bonus['UPDATE'], {
                list: res.list
            });
        },
    }
};

export default actions;
