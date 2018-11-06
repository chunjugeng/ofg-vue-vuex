import Vue from 'vue';
import Vuex from 'vuex';
import Login from './login';
import Customer from './Customer';
import All from './customer/all';
import Sms from './customer/sms';
import Mobile from './customer/mobile';

//namespace 
import Finance from './finance';

//namespaced 
import Application from './application';

import Pager from './pager';


import nav from './nav';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login: Login,
        customer: Customer,
        nav: nav,
        all: All,
        sms: Sms,
        mobile: Mobile,
        pager: Pager,
        finance: Finance,
        application: Application
    }
});

