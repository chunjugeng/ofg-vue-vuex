<template>
    <base-body
        :parent="parentProps"
        type="LOANISSUE"
    >
        <template>
            <tbody>
                <tr v-for="item in tableList" :key="item._id">
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
                    title: 'Loan Issue',
                    tableThead: ['Application ID', 'Loan Issue ID', 'Customer Mobile', 'customer name', 'Ktp Number', 'issue time', 'amount', 'IssueAmount', 'Actual Amount', 'Loan Type', 'apply duration', 'Issue Duration', 'apply duration unit', 'loanApp current status', 'code'],
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