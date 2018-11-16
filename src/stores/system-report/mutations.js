import type from './mutations-type';
import {countPage} from '~/utils/helper';
export default {
    finance: {
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
            state.tableList = list;
        }
    },
    operation: {
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
    }
}