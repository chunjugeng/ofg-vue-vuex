
import Vue from 'vue';
import Vuex from 'vuex';
import data from '../json/test.json';
import {get, fetch} from '~/service/fetch';

import CustomerService from '~/service/customer';
let all= {
    LOADCUSTOMER: 'LOADCUSTOMER'
}

const Customer = {
    // namespaced: true,
    state: {
        count: 0,
        data: [],
        
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
        
        all: {
            pager: {
                page: 0,
                pageSize: 10,
                totalRecords: 0
            },
            table: {
                thead: ['code', 'zh-CN', 'en-US', 'Modify Data'],
                list: []
            }
        }
    },
    getters: {
        doneTodos(state) {
            return state.todos.filter(todo=>todo.done);
        }
    },
    mutations: {
        ['INCREMENT'](state) {
            state.count ++;
        },
        ['DECREMENT'](state, payload) {
            state.count --;
        },
        ['INITDATA'](state, payload) {
            state.data = payload.data;
            state.all.table.list = payload.data;
            state.all.pager.totalRecords = 150;
        },
    },
    actions: {
        increment({commit}) {
            commit('INCREMENT');
        },
        decrement(context, payload) {
            let {dispatch, commit, getters, rootGetters, rootState, state} = context;
            commit('DECREMENT', payload);
        },
        initData({commit}) {
            // fetch({url:'/feapi/errors'}).then((res)=> {
            //     commit({
            //         type: 'INITDATA',
            //         data: res.list
            //     });
            // });

            CustomerService.getLoadCustomer({a: 1, b: 2}).then(res=>{
                commit({
                    type: 'INITDATA',
                    data: res.list
                });
            });
        },

    }
};
// });

export default Customer;