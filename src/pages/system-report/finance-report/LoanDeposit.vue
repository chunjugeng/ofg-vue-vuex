<template>
    <base-body
        :parent="parentProps"
        type="LOANDEPOSIT"
    >
        <template>
            <tbody>
                <tr v-for="item in tableList" :key="item._id">
                    <td>sasasa</td>
                    <td>{{item._id}}</td>
                    <td>xxxxxx</td>
                    <td>sasasa</td>
                    <td>{{item._id}}</td>
                    <td>xxxxxx</td>
                    <td>sasasa</td>
                    <td>{{item._id}}</td>
                    <td>xxxxxx</td>
                    <td>{{item.validTime}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.validTime}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.validTime}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.validTime}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.validTime}}</td>
                    <td>{{item.modifyDate}}</td>
                </tr>
            </tbody>
        </template>
    </base-body/>
</template>

<script>
    import {mapState} from 'vuex';
    // import systemReportService from '~/service/system';
    import BaseBody from './BaseBody.vue';
    
    export default {
        data() {
            return {
                parentProps: {
                    title: 'Loan Deposit',
                    tableThead: ['Application ID', 'Deposit ID', 'Status', 'Write Off', 'Issue Period', 'Extension Nums	', 'Customer name', 'Customer Mobile', 'Ktp Number', 'Deposit Amount', 'Cleared Amount', 'Due Principal', 'Due Interest', 'Due Overdue Fee', 'Due Service Fee', 'Deposit Channel', 'Deposit Method', 'Deposit Time', 'Deposit Cleared Time', 'Code', 'Lpay ID'],
                }
            }
        },
        computed: {
            ...mapState('systemReport/finance', {
                tableList: state=> state.tableList
            })
        },
        components: {
            BaseBody
        }
    }
</script>