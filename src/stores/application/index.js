
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
            state: state.caseAssignment,
            mutations: mutations.caseAssignment,
            actions: actions.caseAssignment,
           
        },
        myReviewCase: {
            namespaced: true,
            state: state.myReviewCase,
            mutations: mutations.myReviewCase,
            actions: actions.myReviewCase
        }
        
    }
};

export default Application;