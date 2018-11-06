import {countPage} from '~/utils/helper';
import type from './mutations-type';

let mutations = {
    deposit: {
        [type.deposit['SETPAGESIZE']](state, pageSize) {
            state.pager.pageSize = pageSize;
        },
        [type.deposit['INIT']](state, payload) {
            const {totalRecords} = payload;
            let totalPage = countPage({pageSize: state.pager.pageSize, totalRecords});
            state.pager.totalPage = totalPage;
            state.pager.totalRecords = totalRecords;
        },
        [type.deposit['UPDATE']](state, payload) {
            state.table.list = payload.list;
        }
    },
    loan: {
        [type.loan['SETPAGESIZE']](state, pageSize) {
            state.pager.pageSize = pageSize;
        },
        [type.loan['INIT']](state, payload) {
            const {totalRecords} = payload;
            let totalPage = countPage({pageSize: state.pager.pageSize, totalRecords});
            state.pager.totalPage = totalPage;
            state.pager.totalRecords = totalRecords;
        },
        [type.loan['UPDATE']](state, payload) {
            state.table.list = payload.list;
        }
    },
    bonus: {
        [type.bonus['SETPAGESIZE']](state, pageSize) {
            state.pager.pageSize = pageSize;
        },
        [type.bonus['INIT']](state, payload) {
            const {totalRecords} = payload;
            let totalPage = countPage({pageSize: state.pager.pageSize, totalRecords});
            state.pager.totalPage = totalPage;
            state.pager.totalRecords = totalRecords;
        },
        [type.bonus['UPDATE']](state, payload) {
            state.table.list = payload.list;
        }
    }
    
};

export default mutations;