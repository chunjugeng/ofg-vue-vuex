<template>
    <div class="page-content finance">
        <div class="search">
            <h1 v-if="title">{{title}}</h1>
            <div>
                <h5>Search</h5>
                <base-search :type="type"/>
            </div>
        </div>

        <loading v-if="loading" />
        <div class="table-list" v-if="!loading">
            <div class="title">
                <div class="left">
                    <h5>Deposits</h5>
                    <select v-model="pageSize" @change="customPageSize">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                </div>

                <div class="right" >
                    <div>
                        <span>Total: {{pager.totalRecords}}, Pages: {{pager.totalPage}}</span>
                        <pager 
                            v-if="pager.totalPage"
                            :pager="pager"
                            :onChangePage="page=> changePage(page, pager)"
                            />
                    </div>
                </div>
            </div>

            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}" v-if="type==='DEPOSIT'">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of depositThead">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableList" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}" v-if="type==='LOAN'">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of loanThead ">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="item in tableList" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}" v-if="type==='BONUS'">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of bonusThead ">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="item in tableList" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="JSON.stringify(tableList) === '[]'" :style="{'padding': '15px 0','text-align': 'center'}" class="no-record">no record</div>
        </div>
    </div>
</template>


<script>
    import {mapState} from 'vuex';
    import Loading from '~/common/Loading.vue';
    import Pager from '~/common/PagerCom.vue';
    import BaseSearch from './BaseSearch.vue';
    export default {
        props: [
            'title',
            'type'
        ],
        data() {
            return {
                pageSize: 10,
                // tableW: '',
                depositThead: ['Deposit Id', 'Application Id', 'Customer Name', 'Customer mobile', 'Ktp Number', 'Deposit Status', 'Payment Code', 'Deposit Amount', 'Arrived Amount', 'Cleared Amount', 'Extension Nums', 'Deposit Channel', 'Deposit Methods', 'Create Time'],
                loanThead: ['Loan Issue ID', 'Application Id', 'Customer Name', 'Customer mobile', 'Ktp Number', 'Issue Status', 'Issue Amount', 'Actual Amount', 'Reached Amount', 'Duration', 'Out Transaction ID', 'Issue Method', 'Card Number', 'Account Holder Name', 'Bank Code', 'Verify Status', 'Create Time', 'Expire Time'],
                bonusThead: ['Bonus Issue ID', 'Customer Name', 'Customer Mobile', 'KTP Number', 'Issue Status', 'Amount', 'Actual Amount', 'Reached Amount', 'Out Transaction ID', 'Issue Method', 'Card Number', 'Account Holder Name', 'Deposit MethodBank Codes', 'Create Time', 'Update Time']
            }
        },

        computed: {
            ...mapState('finance', {
                loading: state=> state.loading,
                pager: state=> state.pager,
                tableList: state=> state.tableList
            }),
            ...mapState('nav', {
                tableW: state=>state.tableW
            })
        },
    
        methods: {
            customPageSize() {
                this.$store.dispatch('finance/customPageSize', {
                    type: this.type,
                    pageSize: this.pageSize
                });
            },
            changePage(page) {
                const params = {
                    type: this.type,
                    pageSize: this.pageSize,
                    page
                };
                this.$store.dispatch('finance/changePage', params);
            }
        },
        
        mounted() {
            const that = this;
            this.$store.dispatch('nav/calculateTableW');
            window.onresize = function() {
                that.$store.dispatch('nav/calculateTableW');
            };

            this.$store.dispatch('finance/init', {
                pageSize: this.pageSize,
                type: this.type
            });
            
        },
        components: {
            Loading,
            BaseSearch,
            Pager
        }
    }
</script>


