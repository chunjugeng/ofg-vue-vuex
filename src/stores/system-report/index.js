import state from './state';
import mutations from './mutations';
import actions from './actions';
export default {
    namespaced: true,
    modules: {
        finance: {
            namespaced: true,
            state: state.finance,
            mutations: mutations.finance,
            actions: actions.finance
        },
        operation: {
            namespaced: true,
            state: state.operation,
            mutations: mutations.operation,
            actions: actions.operation
        }
    }
}