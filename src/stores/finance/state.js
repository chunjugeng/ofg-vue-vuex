const loanState = {
    customerMobile: null,
    customerName: '',
    applicationId: null,
    customerId: null,
    paymentCode: '',
    lPayId: null,
    depositChannel: '',
    issueMethod: '',
    issueStatus: '',
    ktpNumber: null,
    createTime: '',
    toTime: '',
    extensionNums: null,
    pager: {
        page: 0,
        pageSize: 10,
        totalRecords: 0,
        totalPage: 0
    },
    table: {
        thead: ['Loan Issue ID', 'Application Id', 'Customer Name', 'Customer mobile', 'Ktp Number', 'Issue Status', 'Issue Amount', 'Actual Amount', 'Reached Amount', 'Duration', 'Out Transaction ID', 'Issue Method', 'Card Number', 'Account Holder Name', 'Bank Code', 'Verify Status', 'Create Time', 'Expire Time'],
        list: []
    }
};

const depositState = {
    pager: {
        page: 0,
        pageSize: 10,
        totalRecords: 0,
        totalPage: 0
    },
    table: {
        thead: ['Deposit Id', 'Application Id', 'Customer Name', 'Customer mobile', 'Ktp Number', 'Deposit Status', 'Payment Code', 'Deposit Amount', 'Arrived Amount', 'Cleared Amount', 'Extension Nums', 'Deposit Channel', 'Deposit Methods', 'Create Time'],
        list: []
    }
};
const bonusState = {
    pager: {
        page: 0,
        pageSize: 10,
        totalRecords: 0
    },
    table: {
        thead: ['Bonus Issue ID', 'Customer Name', 'Customer Mobile', 'KTP Number', 'Issue Status', 'Amount', 'Actual Amount', 'Reached Amount', 'Out Transaction ID', 'Issue Method', 'Card Number', 'Account Holder Name', 'Deposit MethodBank Codes', 'Create Time', 'Update Time'],
        list: []
    }
};

export {loanState, depositState, bonusState};