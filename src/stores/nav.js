import cfgNavRoute from '~/config/nav-route.json';
import {calculateClientWidth} from '~/utils/helper';
const type = {
    CHANGENAV: 'CHANGENAV',
    TOGGLENAV: 'TOGGLENAV',
    CALCULATETABLEW: 'CALCULATETABLEW',
    CHANGEROUTER: 'CHANGEROUTER'
};
export default {
    namespaced: true,
    state: {
        tableW: 0,
        navRoute: cfgNavRoute,
        defaultActiveIndex: '1-1'
    },
    mutations: {
        [type['CHANGEROUTER']](state, index) {
            state.defaultActiveIndex = index;
        },
        [type['CALCULATETABLEW']](state, w) {
            state.tableW = w;
        },
        [type['CHANGENAV']](state, index) {
            state.currIndex = index;
        }
    },

    actions: {
        changeRouter({commit}, index) {
            commit(type['CHANGEROUTER'], index);
        },
        calculateTableW({commit}, isCollapse) {
            let w = calculateClientWidth(isCollapse);
            commit(type['CALCULATETABLEW'], w);
        },
        changeNav({commit}, index) {
            commit(type['CHANGENAV'], index);
        }
    }
}