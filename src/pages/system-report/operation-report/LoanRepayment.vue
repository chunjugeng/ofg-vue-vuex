<template>
    <base-body :tableThead="tableThead" :fetch="queryLoadOperation">
        <template slot="search">
            <h1>Loan Repayment</h1>
                <div>
                    <h5>Search</h5>
                    <div class="search-com">
                        <div class="default">
                            <span class="fa fa-info"/>
                            <input type="text" name="applicationId" placeholder="Application ID"/>
                        </div>
                        <div class="default">
                            <span class="fa fa-mobile"/>
                            <input type="text" name="customerMobile" placeholder="Customer Mobile"/>
                        </div>

                        <div class="default select">
                            <span>Loan Status</span>
                            <select>
                                <option></option>
                                <option v-for="item of LoanStatus">{{item}}</option>
                            </select>
                        </div>
                        <div>date</div>
                        <div class="default">
                            <span class="fa fa-info"/>
                            <input type="text" name="ktpNumber" placeholder="KTP Number"/>
                        </div>
                        <div class="default extension">
                            <span class="fa fa-info"/>
                            <input type="text" name="extensionNums" placeholder="Extension Nums"/>
                        </div>
                    </div>
                </div>
        </template>
        <tbody slot="table-list-content" >
            <tr v-for="(item, index) in tableList" :key="index">
                <td>{{item._id}}</td>
                <td>{{item._id}}</td>
                <td>test --xxx</td>
                <td>{{item._id}}</td>
                <td>{{item._id}}</td>
                <td>test --xxx</td>
                <td>test --xxx</td>
            </tr>
        </tbody>
    </base-body>
</template>

<script>
    import {mapState} from 'vuex';
    import BaseBody from './BaseBody.vue';
    import {LoanStatus} from '~/utils/selectType';
    import systemReportService from '~/service/system';
    export default {
        data() {
            return {
                LoanStatus,
                tableThead: ['Application ID', 'Customer ID', 'customer id', 'Customer Mobile', 'Customer Name', 'Ktp Number', 'Register Time']
            }
        },
        computed: {
            ...mapState('systemReport/operation', {
                pager: state=>state.pager,
                tableList: state=> state.tableList
            })
        },
        methods: {
            queryLoadOperation(page) {
                page = page ? page : 0;
                const params = {
                    page: page,
                    pageSize: this.pager.pageSize,
                    a: 'test arguments'
                };

                return systemReportService.loadCustomer(params);
                
            }
        },
        components: {
            BaseBody
        }
    }
</script>