import applicationService from '~/service/application';

const LoanType = [
    'PAYDAY',
    'STUDENT',
    'RE_PAYDAY',
    'RE_STUDENT',
    'MARKET_LOAN'
];

function getReviewer() {
    // const res  = await applicationService.getLoanAppReviewers();
    return [{
        "id": 1001,
        "mobile": "1001",
        "fullName": "初审员",
        "type": "ADMIN",
        "status": {
            "key": "ACTIVE",
            "value": "ACTIVE"
        },
        "createTime": "2017-10-21 12:52:31",
        "assignedTimeNum": 0,
        "assignedLoanAppNum": 0,
        "groupId": null,
        "roleIdList": null
    },
    {
        "id": 100048,
        "mobile": "112233445566",
        "fullName": "first_yangpu",
        "type": "ADMIN",
        "status": {
            "key": "ACTIVE",
            "value": "ACTIVE"
        },
        "createTime": "2017-12-15 15:59:06",
        "assignedTimeNum": 0,
        "assignedLoanAppNum": 0,
        "groupId": null,
        "roleIdList": null
    }];
}
// const Reviewer = getReviewer();
export {LoanType, getReviewer}