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
import SystemAdminManagement from '~/pages/system/Admin.vue';
import SystemBlacklistManagement from '~/pages/system/BlackList.vue';
import SystemWhiteListManagement from '~/pages/system/WhiteList.vue';
import SystemSettingManagement from '~/pages/system/Setting.vue';
import InviteSettingManagement from '~/pages/system/Invite.vue';
import ReviewReasonManagement from '~/pages/system/Reason.vue';
import DiversionManagement from '~/pages/system/Diversion.vue';

//system report
import SystemReportFinanceLoanIssue from '~/pages/system-report/finance-report/LoanIssue.vue';
import SystemReportFinanceBonusIssue from '~/pages/system-report/finance-report/BonusIssue.vue';
import SystemReportFinanceLoanDeposit from '~/pages/system-report/finance-report/LoanDeposit.vue';

import SystemReportLoanOperation from '~/pages/system-report/operation-report/LoanOperation.vue';
import SystemReportLoanRepayment from '~/pages/system-report/operation-report/LoanRepayment.vue';
import PlatformStatisticsData from '~/pages/system-report/operation-report/PlatformStatisticsData.vue';
import PlatformStatisticsDataAggregation from '~/pages/system-report/operation-report/PlatformStatisticsDataAggregation.vue';
import SystemReportLoanOverdue from '~/pages/system-report/operation-report/LoanOverdue.vue';
import SystemReportCustomerInviteDetail from '~/pages/system-report/operation-report/CustomerInviteDetail.vue';
import ConversionStatistics from '~/pages/system-report/operation-report/ConversionStatistics.vue';
import ReviewEfficiency from '~/pages/system-report/operation-report/ReviewEfficiency.vue';
import SystemReportReviewHistoty from '~/pages/system-report/operation-report/ReviewHistory.vue';
import ReviewMonitor from '~/pages/system-report/operation-report/ReviewMonitor.vue';


import OperationFeedbackSummary from '~/pages/system-report/operation-report/FeedbackSummary.vue';




import Layout from '~/common/Layout.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',
    linkActiveClass: 'navActive',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/page', component: Layout,
            children: [
                //customer
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
                //finance
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
                //application
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
                //collection
                {
                    path: '/collection/collection-cases',
                    component: CollectionCases
                },
                {
                    path: '/collection/part-repay-management',
                    component: PartPaymentManagement
                },
                {
                    path: '/collection/reduce-repay-management',
                    component: ReducePaymentManagement
                },

                //system management
                {
                    path: '/system/admin',
                    component: SystemAdminManagement
                },
                {
                    path: '/system/blacklist',
                    component: SystemBlacklistManagement
                },
                {
                    path: '/system/whitelist',
                    component: SystemWhiteListManagement
                },
                {
                    path: '/system/setting',
                    component: SystemSettingManagement
                },
                {
                    path: '/system/invite',
                    component: InviteSettingManagement
                },
                {
                    path: '/system/reason',
                    component: ReviewReasonManagement
                },
                {
                    path: '/system/diversion',
                    component: DiversionManagement
                },

                //system report
                {
                    path: '/report/finance/loan-issue',
                    component: SystemReportFinanceLoanIssue
                },
                {
                    path: '/report/finance/bonus-issue',
                    component: SystemReportFinanceBonusIssue
                },
                {
                    path: '/report/finance/loan-deposit',
                    component: SystemReportFinanceLoanDeposit
                },
                {
                    path: '/report/operation/loan-operation',
                    component: SystemReportLoanOperation
                },
                {
                    path: '/report/operation/loan-repayment',
                    component: SystemReportLoanRepayment
                },
                {
                    path: '/report/operation/platform-statistics-data',
                    component: PlatformStatisticsData
                },
                {
                    path: '/report/operation/platform-statistics-data-aggregation',
                    component: PlatformStatisticsDataAggregation
                },
                {
                    path: '/report/operation/loan-overdue',
                    component: SystemReportLoanOverdue
                },
                {
                    path: '/report/operation/customer-invite-detail',
                    component: SystemReportCustomerInviteDetail
                },
                {
                    path: '/report/operation/conversion-statistics',
                    component: ConversionStatistics
                },
                {
                    path: '/report/operation/review-history',
                    component: SystemReportReviewHistoty
                },
                {
                    path: '/report/operation/review-efficiency',
                    component: ReviewEfficiency
                },
                {
                    path: '/report/operation/review-monitor',
                    component: ReviewMonitor
                },
                {
                    path: '/report/operation/feedback-summary',
                    component: OperationFeedbackSummary
                }
            ]
        }
    ] 
});

export default router;