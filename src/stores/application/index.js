
import state  from './state';
import mutations from './mutations';
import actions from './actions';
const Application = {
    namespaced: true,
    modules: {
        allReviewCases: {
            namespaced: true,
            state: state.allReviewCases,
            mutations: mutations.allReviewCases,
            actions: actions.allReviewCases
        },
        allReviewTasks: {
            namespaced: true,
            state: state.allReviewTasks,
            mutations: mutations.allReviewTasks,
            actions: actions.allReviewTasks
        },
        caseAssignment: {
            namespaced: true,
            modules: {
                first: {
                    namespaced: true,
                    state: state.caseAssignment.first,
                    mutations: mutations.caseAssignment.first,
                    actions: actions.caseAssignment.first
                }
            }
        }
        
    }
};

export default Application;