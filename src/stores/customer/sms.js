
import Vue from 'vue';
import Vuex from 'vuex';
import {get, fetch} from '~/service/fetch';
import {onChange} from '~/utils/helper';
import CustomerService from '~/service/customer';
const SMSLOADCUSTOMER = 'SMSLOADCUSTOMER';
let sms= {
    ONCHANGE: 'ONCHANGE',
    GETSTATUS: 'GETSTATUS',
    UPDATETABLELIST: 'UPDATETABLELIST',
    CUSTOMPAGESIZE: 'CUSTOMPAGESIZE'
};


const Sms = {
    // namespaced: true,
    
    state: {
        mobile: null,
        smsPager: {
            page: 0,
            pageSize: 10,
            totalRecords: 0
        },
        loadCustomer: {
            thead: ['Id', 'Chanel', 'Mobile', 'Code', 'Status', 'Create Time', 'Trigger'],
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
        [sms['GETSTATUS']](state, status) {
            state.status = status;
        },
        [sms['ONCHANGE']](state, ev) {
            onChange.call(state, ev);
        },
        smsLoadCustomer(state, payload) {
            state.loadCustomer.list = payload.content.list;
            state.smsPager.totalRecords = payload.content.totalRecords;
            console.log(state.smsPager.totalRecords, 'state.smsPager.totalRecord', payload)
        },
        [sms['CUSTOMPAGESIZE']](state, pageSize) {
            state.smsPager.pageSize = pageSize;
        }
    },
    actions: {
        async smsQuery({commit, state}) {
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
                type: 'smsLoadCustomer',
                content: {...res}
            });
        },
        onUIChange({commit}, ev) {
            commit('ONCHANGE', ev);
        },
        async querySmsLoadCustomer({commit, state}, page) {
            const params = {
                page: page || state.smsPager.page,
                pageSize: state.smsPager.pageSize,
                type: 'media-report',
                platform: 'desktop'
            };
            const res = await CustomerService.getLoadCustomer(params);
            commit({
                type: 'smsLoadCustomer',
                content: {...res}
            });
        },
        customSmsPageSize({commit, dispatch}, pageSize) {
            commit(sms['CUSTOMPAGESIZE'], pageSize);
            dispatch('querySmsLoadCustomer'); 
        }
    }
};

export default Sms;