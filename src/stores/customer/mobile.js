
import Vue from 'vue';
import Vuex from 'vuex';
import {get, fetch} from '~/service/fetch';
import {onChange} from '~/utils/helper';
import CustomerService from '~/service/customer';
const MOBILELOADCUSTOMER = 'MOBILELOADCUSTOMER';
let mobile= {
    ONCHANGE: 'ONCHANGE',
    GETSTATUS: 'GETSTATUS',
    UPDATETABLELIST: 'UPDATETABLELIST',
    CUSTOMPAGESIZE: 'CUSTOMPAGESIZE'
};


const Mobile = {
    // namespaced: true,
    state: {
        mobile: null,
        moBilePager: {
            page: 0,
            pageSize: 10,
            totalRecords: 0
        },
        loadCustomer: {
            thead: ['Name', 'Email', 'Mobile', 'Last Update Timew'],
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
        [mobile['GETSTATUS']](state, status) {
            state.status = status;
        },
        [mobile['ONCHANGE']](state, ev) {
            onChange.call(state, ev);
        },
        [MOBILELOADCUSTOMER](state, payload) {
            state.loadCustomer.list = payload.content.list;
            state.moBilePager.totalRecords = payload.content.totalRecords;
            console.log(state.moBilePager.totalRecords, 'state.moBilePager.totalRecords')
        },
        [mobile['CUSTOMPAGESIZE']](state, pageSize) {
            state.moBilePager.pageSize = pageSize;
        }
    },
    actions: {
        async mobileQuery({commit, state}) {
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
                type: 'MOBILELOADCUSTOMER',
                content: {...res}
            });
            
        },
        onUIChange({commit}, ev) {
            commit(mobile['ONCHANGE'], ev);
        },
        async queryMobileLoadCustomer({commit, state}, page) {
            const params = {
                page: page || state.moBilePager.page,
                pageSize: state.moBilePager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            const res = await CustomerService.getLoadCustomer(params);
            commit({
                type: 'MOBILELOADCUSTOMER',
                content: {...res}
            });
        },
        custMobilePageSize({commit, dispatch},  pageSize) {
            commit(mobile['CUSTOMPAGESIZE'], pageSize);
            dispatch('queryMobileLoadCustomer');
        }
    }
};

export default Mobile;