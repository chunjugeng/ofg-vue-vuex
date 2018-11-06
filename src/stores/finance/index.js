
import {depositState, loanState, bonusState} from './state';
import mutations from './mutations';
import actions from './actions';
const Finance = {
    namespaced: true,
    modules: {
        deposit: {
            namespaced: true,
            state: depositState,
            mutations: mutations.deposit,
            actions: actions.deposit,
        },
        loan: {
            namespaced: true,
            state: loanState,
            mutations: mutations.loan,
            actions: actions.loan,
        },
        bonus: {
            namespaced: true,
            state: bonusState,
            mutations: mutations.bonus,
            actions: actions.bonus
        }
    }
};
export default Finance;