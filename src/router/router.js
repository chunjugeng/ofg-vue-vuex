import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '~/pages/login/Login.vue';

import All0 from '~/pages/customer/All0.vue';

import All from '~/pages/customer/All.vue';
import Sms from '~/pages/customer/Sms.vue';
import PhoneRecord from '~/pages/customer/PhoneRecord.vue';

import Deposits from '~/pages/finance/Deposits.vue';
import LoanIssue from '~/pages/finance/LoanIssue.vue';
import BonusIssues from '~/pages/finance/BonusIssues.vue';

import AllReviewCases from '~/pages/application/AllReviewCases.vue';
import AllReviewTasks from '~/pages/application/AllReviewTasks.vue';
import CaseAssignmentFirstReview from '~/pages/application/case-assignment/First.vue';


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
                    path: '/appliction/case-assignment/first-review',
                    component: CaseAssignmentFirstReview
                }
            ]
        },
        {
            path: '/login', component: Login
        }
    ] 
});

export default router;