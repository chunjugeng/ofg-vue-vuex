import Vue from 'vue';
import VueRouter from 'vue-router';
import cfgRoutes from '~/router/router';
import {Menu, Submenu, MenuItem, MenuItemGroup, RadioGroup, RadioButton} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//filters
import filters from '~/filters';

//store 
import store from '~/stores/store';

import '~/styles/base.scss';
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(RadioGroup);
Vue.use(RadioButton);
new Vue({
    el: '#app',
    store,
    router: cfgRoutes,
    render: h => h('router-view')
});
