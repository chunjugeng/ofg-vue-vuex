import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '~/common/Layout.vue';
const Login =()=> import('~/pages/login/Login');

//customer 
const All =()=> import('~/pages/customer/All');
const Sms =()=> import('~/pages/customer/Sms');
const PhoneRecord =()=> import('~/pages/customer/PhoneRecord');
const CustomerDetail =()=> import('~/pages/customer/CustomerDetail');

//loan management
const LoanManagement =()=> import('~/pages/loan/LoanIssue');

//fiance
const Deposits =()=> import('~/pages/finance/Deposits');
const LoanIssue =()=> import('~/pages/finance/LoanIssue');
const BonusIssues =()=> import('~/pages/finance/BonusIssues');
const FinanceLogs =()=> import('~/pages/finance/Logs');

//application
const AllReviewCases =()=> import('~/pages/application/AllReviewCases');
const ApplicationReviewDetail =()=> import('~/pages/application/ReviewDetail');
const AllReviewTasks =()=> import('~/pages/application/AllReviewTasks');
const CaseAssignmentFirstReview =()=> import('~/pages/application/case-assignment/First');
const CaseAssignmentSecondReview =()=> import('~/pages/application/case-assignment/Second');
const CaseAssignmentFinalReview =()=> import('~/pages/application/case-assignment/Final');
const MyReviewCasesFirst =()=> import('~/pages/application/my-review-cases/First');
const MyReviewCasesSecond =()=> import('~/pages/application/my-review-cases/Second');
const MyReviewCasesFinal =()=> import('~/pages/application/my-review-cases/Final');
const MyReviewCasesReviewHistory =()=> import('~/pages/application/my-review-cases/ReviewHistory');
const FinalReviewEfficiency =()=> import('~/pages/application/my-review-efficiency/FinalReviewEfficiency');

//collection
const CollectionCases =()=> import('~/pages/collection/CollectionCases');
const PartPaymentManagement =()=> import('~/pages/collection/repayment-management/Part');
const ReducePaymentManagement =()=> import('~/pages/collection/repayment-management/Reduce');


//system management
const SystemAdminManagement =()=> import('~/pages/system/Admin');
const SystemBlacklistManagement =()=> import('~/pages/system/BlackList');
const SystemWhiteListManagement =()=> import('~/pages/system/WhiteList');
const SystemSettingManagement =()=> import('~/pages/system/Setting');
const InviteSettingManagement =()=> import('~/pages/system/Invite');
const ReviewReasonManagement =()=> import('~/pages/system/Reason');
const DiversionManagement =()=> import('~/pages/system/Diversion');

//system report
const SystemReportFinanceLoanIssue =()=> import('~/pages/system-report/finance-report/LoanIssue');
const SystemReportFinanceBonusIssue =()=> import('~/pages/system-report/finance-report/BonusIssue');
const SystemReportFinanceLoanDeposit =()=> import('~/pages/system-report/finance-report/LoanDeposit');

const SystemReportLoanOperation =()=> import('~/pages/system-report/operation-report/LoanOperation');
const SystemReportLoanRepayment =()=> import('~/pages/system-report/operation-report/LoanRepayment');
const PlatformStatisticsData =()=> import('~/pages/system-report/operation-report/PlatformStatisticsData');
const PlatformStatisticsDataAggregation =()=> import('~/pages/system-report/operation-report/PlatformStatisticsDataAggregation');
const SystemReportLoanOverdue =()=> import('~/pages/system-report/operation-report/LoanOverdue');
const SystemReportCustomerInviteDetail =()=> import('~/pages/system-report/operation-report/CustomerInviteDetail');
const ConversionStatistics =()=> import('~/pages/system-report/operation-report/ConversionStatistics');
const ReviewEfficiency =()=> import('~/pages/system-report/operation-report/ReviewEfficiency');
const SystemReportReviewHistoty =()=> import('~/pages/system-report/operation-report/ReviewHistory');
const ReviewMonitor =()=> import('~/pages/system-report/operation-report/ReviewMonitor');
const OperationFeedbackSummary =()=> import('~/pages/system-report/operation-report/FeedbackSummary');


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
                {
                    path: '/customer/customer-detail',
                    component: CustomerDetail
                },

                //loan management
                {
                    path: '/loan-management',
                    component: LoanManagement
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
                {
                    path: '/finance/logs',
                    component: FinanceLogs
                },
                //application
                {
                    path: '/application/all-review-cases',
                    component: AllReviewCases
                },
                {
                    path: '/review/review-detail',
                    component: ApplicationReviewDetail
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