import cfgNavRoute from '~/config/nav-route.json';
const nav = {
    CHANGENAV: 'CHANGENAV',
    TOGGLENAV: 'TOGGLENAV'
};
export default {
    state: {
        navRoute: cfgNavRoute,
    },

    mutations: {
        [nav.CHANGENAV](state, payload) {
            return state;
        },
        [nav.TOGGLENAV](state, payload) {
            const {secondIndex, threeId} = payload;
            state.navRoute[secondIndex].isShow = !state.navRoute[secondIndex].isShow;
            state.navRoute[secondIndex].list[threeId] = !state.navRoute[secondIndex].list[threeId];
            return state.navRoute;
        }
    },

    actions: {
        changeNav({commit}) {
            commit(nav.CHANGENAV);
        },
        toggleNav({commit}, payload) {
            commit(nav.TOGGLENAV, payload);
        }
    }
}