import cfgNavRoute from '~/config/nav-route.json';
import {calculateClientWidth} from '~/utils/helper';
const type = {
    CHANGENAV: 'CHANGENAV',
    TOGGLENAV: 'TOGGLENAV',
    CALCULATETABLEW: 'CALCULATETABLEW'
};
export default {
    namespaced: true,
    state: {
        tableW: 0,
        navRoute: cfgNavRoute,
    },
    mutations: {
        [type['CALCULATETABLEW']](state, w) {
            state.tableW = w;
        },
        [type['CHANGENAV']](state, index) {
            state.currIndex = index;
        },
        [type['TOGGLENAV']](state, payload) {
            const {secondIndex, threeId} = payload;
            state.navRoute[secondIndex].isShow = !state.navRoute[secondIndex].isShow;
            state.navRoute[secondIndex].list[threeId] = !state.navRoute[secondIndex].list[threeId];
            return state.navRoute;
        }
    },

    actions: {
        calculateClientWidth({commit}, isCollapse) {
            let w = calculateClientWidth(isCollapse);
            commit(type['CALCULATETABLEW'], w)
        },
        changeNav({commit}, index) {
            commit(type['CHANGENAV'], index);
        },
        toggleNav({commit}, payload) {
            commit(type['TOGGLENAV'], payload);
        }
    }
}