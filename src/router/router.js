import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '~/pages/login/Login.vue';

import All from '~/pages/customer/All.vue';
import Sms from '~/pages/customer/Sms.vue';
import PhoneRecord from '~/pages/customer/PhoneRecord.vue';

import Deposits from '~/pages/finance/Deposits.vue';
import LoanIssue from '~/pages/finance/LoanIssue.vue';
import BonusIssues from '~/pages/finance/BonusIssues.vue';

import AllReviewCases from '~/pages/application/AllReviewCases.vue';
import AllReviewTasks from '~/pages/application/AllReviewTasks.vue';
import CaseAssignmentFirstReview from '~/pages/application/case-assignment/First.vue';
import CaseAssignmentSecondReview from '~/pages/application/case-assignment/Second.vue';
import CaseAssignmentFinalReview from '~/pages/application/case-assignment/Final.vue';
import MyReviewCasesFirst from '~/pages/application/my-review-cases/First.vue';
import MyReviewCasesSecond from '~/pages/application/my-review-cases/Second.vue';
import MyReviewCasesFinal from '~/pages/application/my-review-cases/Final.vue';
import MyReviewCasesReviewHistory from '~/pages/application/my-review-cases/ReviewHistory.vue';

import FinalReviewEfficiency from '~/pages/application/my-review-efficiency/FinalReviewEfficiency';


import CollectionCases from '~/pages/collection/CollectionCases.vue';
import PartPaymentManagement from '~/pages/collection/repayment-management/Part.vue';
import ReducePaymentManagement from '~/pages/collection/repayment-management/Reduce.vue';


//system management
import InviteSettingManagement from '~/pages/system/Invite.vue';
import DiversionManagement from '~/pages/system/Diversion.vue';

//system report
import FinanceBonusIssue from '~/pages/system-report/finance-report/BonusIssue.vue';
import OperationFeedbackSummary from '~/pages/system-report/operation-report/FeedbackSummary.vue';



import Layout from '~/common/Layout.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/page', component: Layout,
            children: [
                {
                    path: '/customer/all',
                    component: All
                },
                {
                    path: '/customer/sms',
                    component: Sms
                }, 
                {
                    path: '/customer/phone-record',
                    component: PhoneRecord
                },
                {
                    path: '/finance/deposit',
                    component: Deposits
                },
                {
                    path: '/finance/loan-issue',
                    component: LoanIssue
                },
                {
                    path: '/finance/bonus-issues',
                    component: BonusIssues
                },
                {
                    path: '/application/all-review-cases',
                    component: AllReviewCases
                },
                {
                    path: '/application/all-review-tasks',
                    component: AllReviewTasks
                },
                {
                    path: '/application/case-assignment/first-review',
                    component: CaseAssignmentFirstReview
                },
                {
                    path: '/application/case-assignment/second-review',
                    component: CaseAssignmentSecondReview
                },
                {
                    path: '/application/case-assignment/final-review',
                    component: CaseAssignmentFinalReview
                },

                {
                    path: '/application/final-review-efficiency',
                    component: FinalReviewEfficiency
                },

                {
                    path: '/application/my-review-cases/first',
                    component: MyReviewCasesFirst
                },
                {
                    path: '/application/my-review-cases/second',
                    component: MyReviewCasesSecond
                },
                {
                    path: '/application/my-review-cases/final',
                    component: MyReviewCasesFinal
                },
                {
                    path: '/application/my-review-cases/review-history',
                    component: MyReviewCasesReviewHistory
                },

                {
                    path: '/collecation/collection-cases',
                    component: CollectionCases
                },
                {
                    path: '/collecation/part-repay-management',
                    component: PartPaymentManagement
                },
                {
                    path: '/collecation/reduce-repay-management',
                    component: ReducePaymentManagement
                },

                //system management
                {
                    path: '/system/invite',
                    component: InviteSettingManagement
                },
                {
                    path: '/system/diversion',
                    component: DiversionManagement
                },

                //system report
                {
                    path: '/report/finance/bonus-issue',
                    component: FinanceBonusIssue
                },
                {
                    path: '/report/operation/feedback-summary',
                    component: OperationFeedbackSummary
                }
            ]
        },
        {
            path: '/login', component: Login
        }
    ] 
});

export default router;