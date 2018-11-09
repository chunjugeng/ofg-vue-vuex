import applicationService from '~/service/application';

const LoanType = [
    'PAYDAY',
    'STUDENT',
    'RE_PAYDAY',
    'RE_STUDENT',
    'MARKET_LOAN'
];
const LoanStatus = [
    'SUBMITTED',
    'BASIC_REVIEW',
    'WAIT_APPLY_CONFIRM',
    'SUPPLEMENT',
    'PRE_REVIEW',
    'FIRST_REVIEW',
    'SECOND_REVIEW',
    'FINAL_REVIEW',
    'APPROVED',
    'REJECTED',
    'CLOSED',
    'WITHDRAWN',
    'WAIT_CONFIRM',
    'READY_TO_ISSUE',
    'ISSUING',
    'CURRENT',
    'ISSUE_FAILED',
    'CURRENT_1',
    'GRACE_PERIOD_1',
    'OVERDUE_1',
    'CURRENT_2',
    'GRACE_PERIOD_2',
    'OVERDUE_2',
    'CURRENT_N',
    'GRACE_PERIOD_N',
    'OVERDUE_N',
    'GRACE_PERIOD',
    'OVERDUE',
    'PAID_OFF',
    'PAID_OFF_R',
    'PAID_OFF_P',
    'PAID_OFF_1',
    'PAID_OFF_2',
    'PAID_OFF_N',
    'BAD_DEBIT'
];

const ReviewStatus = ['HOLD', 'APPROVED', 'OVERRULE', 'CANCEL'];
const PartRepayStatus = ['WAIT_FOR_DEPOSIT', 'SUCCESS', 'TIME_OUT'];
const CustomerType = ['ALL', 'NEW', 'OLD'];
const IssueStatus = ['CREATED', 'PENDING', 'SUCCEED', 'FAILED'];
const IssueMethod = ['XENDIT', 'BLUEPAY', 'OTHERS'];
export {LoanType, LoanStatus, ReviewStatus, PartRepayStatus, CustomerType, IssueStatus, IssueMethod};