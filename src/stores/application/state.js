const state = {
    allReviewCases: {
        pager: {
            page: 0,
            pageSize: 10,
            totalRecords: 0,
            totalPage: 0
        },
        table: {
            thead: ['Application ID', 'Customer Name', 'Customer Mobile', 'Duration', 'Amount', 'Loan Type', 'Create Time<span class="fa fa-info"/>', 'Loan Status', 'Extension Nums', 'Issue Success Time', 'Reviewer'],
            list: []
        }
    },
    allReviewTasks: {
        table: {
            thead: [],
            list: []
        }
    },

    caseAssignment: {
        search: {
            loanType: '',
            reviewer: '',
            createTime: '',
            toTime: '',
        },
        appPager: {
            page: 0,
            pageSize: 10,
            totalRecords: 0,
            totalPage: 0
        },
        appTable: {
            thead: ['Application ID', 'Customer ID', 'Customer Name', 'Customer Mobile', 'Duration', 'Amount', 'Loan Type', 'Create Time<i class="fa fa-info"/>', 'Loan Status', 'Reviewer'],
            list: []
        },
        reviewerTable: {
            thead: ['Reviewer ID', 'Reviewer Name', 'Case Number Within Searching Time', 'Reviewing Task Number'],
            list: []
        }
    },

    myReviewCase: {
        pager: {
            page: 0,
            pageSize: 10,
            totalRecords: 0,
            totalPage: 0
        },
        table: {
            thead: ['Application ID', 'Customer Name', 'Customer Mobile', 'Duration', 'Amount', 'Loan Type', 'Create Time<span class="fa fa-info"/>', 'Loan Status', 'Extension Nums', 'Issue Success Time', 'Reviewer'],
            list: []
        }
    }
};

export default state;