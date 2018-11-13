import Vue from 'vue';
import Vuex from 'vuex';
import Login from './login';
import Customer from './customer';

//namespace 
import Finance from './finance';

//namespaced 
import Application from './application';
import Collection from './collection';
import System from './system';
import SystemReport from './systemReport';


import Pager from './pager';


import nav from './nav';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login: Login,
        customer: Customer,
        finance: Finance,
        application: Application,
        nav: nav,
        pager: Pager,
        collection: Collection,
        system: System,
        systemReport: SystemReport
    }
});

