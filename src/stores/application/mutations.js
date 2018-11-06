import {countPage, onChange} from '~/utils/helper';
import type from './mutations-type';
const mutations = {
    allReviewCases: {
        [type.allReviewCases['INIT']](state, list) {
            console.log(list,'list')
            state.table.list = list;
        
        }

    },
    allReviewTasks: {

    },
    
    caseAssignment: {
        first: {
        
            [type.caseAssignment.first['GETTIME']](state, payload) {
               state.search[payload.name] = payload.date;
               console.log(state.search, 'state.search')
            },
            [type.caseAssignment.first['ONCHANGE']](state, ev) {
                onChange.call(state.search, ev);
            },
            [type.caseAssignment.first['CUSTOMPAGESIZE']](state, pageSize) {
                state.appPager.pageSize = pageSize;
            },
            [type.caseAssignment.first['UPDATEREVIEWTABLELIST']](state, list) {
                state.reviewTable.list = list;
            },
            [type.caseAssignment.first['UPDATEAPPTABLELIST']](state, list) {
                state.appTable.list = list;
            },
            [type.caseAssignment.first['INIT']](state, payload) {
                const params = {
                    totalRecords: payload.appTotalRecords,
                    pageSize: state.appPager.pageSize
                };
                let totalPage = countPage(params);
                state.appPager.totalPage = totalPage;

                
                state.appPager.totalRecords = payload.appTotalRecords;
                state.reviewPager.totalRecords = payload.reviewTotalRecords;
            }
        }
    }
};
export default mutations;