import {countPage, onChange} from '~/utils/helper';
import type from './mutations-type';
const mutations = {
    caseAssignment: {
        [type.caseAssignment['GETTIME']](state, payload) {
            state.search[payload.name] = payload.date;
        },
        [type.caseAssignment['ONCHANGE']](state, ev) {
            onChange.call(state.search, ev);
        },
        [type.caseAssignment['CUSTOMPAGESIZE']](state, pageSize) {
            state.appPager.pageSize = pageSize;
        },
        [type.caseAssignment['UPDATEAPPTABLELIST']](state, list) {
            state.appTable.list = list;
        },
        [type.caseAssignment['INIT']](state, payload) {
            const {app, review} = payload;
            const params = {
                totalRecords: app.totalRecords,
                pageSize: state.appPager.pageSize
            };
            let totalPage = countPage(params);
            state.appPager.totalPage = totalPage;
            state.appPager.totalRecords = app.totalRecords;
            state.appTable.list = app.list;
            state.reviewerTable.list = review.list;
        }
    },
    myReviewCases: {
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
    }
};
export default mutations;