
import Vue from 'vue';
import Vuex from 'vuex';
import {get, fetch} from '~/service/fetch';
import {onChange} from '~/utils/helper';
import CustomerService from '~/service/customer';
const ALLLOADCUSTOMER = 'ALLLOADCUSTOMER';
let all= {
    ONCHANGE: 'ONCHANGE',
    GETSTATUS: 'GETSTATUS',
    UPDATETABLELIST: 'UPDATETABLELIST',
    CUSTOMPAGESIZE: 'CUSTOMPAGESIZE'
};

const All = {
    // namespaced: true,
    
    state: {
        mobile: null,
        realName: null,
        ktp: null,
        createTime: '',
        toTime: '',
        status: '',
        allPager: {
            page: 0,
            pageSize: 10,
            totalRecords: 0
        }, 
        loadCustomer: {
            thead: ['Customer Id', 'Real Name', 'Mobile', 'Status', 'Register Time'],
            list: []
        },
        mockQueryData: [
            {
                realName: 'aaa',
                ktp: '4127241999',
                status: 'HOLD',
                _id: "5b4873850b123400626a050d",
                author: "aaa",
                mobile: '1888',
                hot: true,
                modifyDate: 1531474944153,
                platform: ['xx', 'ccc'],
                tags: [22]
            },
            {
                realName: 'aaa',
                ktp: '4127241999',
                status: 'REVIEW',
                _id: "5b4873850b1233232400626a050d",
                author: "aaa",
                mobile: '10998',
                hot: false,
                modifyDate: 153147491212144153,
                platform: ['xx', 'ccc'],
                tags: [22]
            }
        ]
    },

    mutations: {
        [all['GETSTATUS']](state, status) {
            state.status = status;
        },
        setTime(state, payload) {
            if (payload.type==='createTime') {
                state.createTime = payload.d;
            } else {
                state.toTime = payload.d;
            }
        },
        [all['ONCHANGE']](state, ev) {
            onChange.call(state, ev);
        },
        [ALLLOADCUSTOMER](state, payload) {
            state.loadCustomer.list = payload.content.list;
            state.allPager.totalRecords = payload.content.totalRecords;
            console.log(state.allPager.totalRecords, 'state.allPager.totalRecords')
        },
        [all['CUSTOMPAGESIZE']](state, pageSize) {
            state.allPager.pageSize = pageSize;
        }
    },
    actions: {
        getStatus({commit}, status) {
            commit('GETSTATUS', status);
        },
        async allQuery({commit, state}) {
            let arr = [];
            for (let v of state.mockQueryData) {
                for (let [key, value] of Object.entries(v)) {
                    switch (key) {
                        case 'mobile':
                            if (value.indexOf(state.mobile) >= 0) {
                                arr.push(v);
                            }
                            break;
                    
                        default:
                            break;
                    }
                }
            }
            
           const res = await CustomerService.queryLoadCustomer();
           commit({
                type: 'ALLLOADCUSTOMER',
                content: {...res}
            });
            // commit({
            //     type: all.LOADCUSTOMER,
            //     content: {
            //         list: arr,
            //         totalRecords: arr.length
            //     }
            // });
        },
        onUIChange({commit}, ev) {
            commit(all['ONCHANGE'], ev);
        },
        async queryAllLoadCustomer({commit, state}, page) {
            const params = {
                page: page || state.allPager.page,
                pageSize: state.allPager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            const res = await CustomerService.getLoadCustomer(params);
            commit({
                type: 'ALLLOADCUSTOMER',
                content: {...res}
            });
        },
        customAllPageSize({commit, dispatch}, pageSize) {
            commit(all['CUSTOMPAGESIZE'], pageSize);
            dispatch('queryAllLoadCustomer');
        }
    }
};

export default All;