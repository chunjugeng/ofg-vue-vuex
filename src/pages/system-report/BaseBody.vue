<template>
    <div class="page-content">
        <div class="search">
            <h1 v-if="title">{{title}}</h1>
            <div>
                <h5>search</h5>
                <div class="search-com">
                    <template v-if="type==='BONUSISSUE'">
                        <div class="default">
                            <span class="fa fa-phone"/>
                            <input type="text" name="customerMobile" placeholder="Customer Mobile"/>
                        </div>
                        <div class="default">
                            <span class="fa fa-user"/>
                            <input type="text" name="customerName" placeholder="Customer Name"/>
                        </div>
                        <div class="default">
                            <span class="fa fa-info"/>
                            <input type="text" name="customerId" placeholder="Customer ID"/>
                        </div>
                        <div class="default">
                            <span class="fa fa-info"/>
                            <input type="text" name="outTransactionId" placeholder="Out TransactionID"/>
                        </div>
                        <div class="default select">
                            <span>Issue Method</span>
                            <select>
                                <option value=""></option>
                                <option v-for="item of IssueMethod">{{item}}</option>
                            </select>
                        </div>
                        <div class="default select">
                            <span>Issue Status</span>
                            <select>
                                <option value=""></option>
                                <option v-for="item of IssueStatus">{{item}}</option>
                            </select>
                        </div>
                        <div class="default">
                            <span class="fa fa-info"/>
                            <input type="text" name="ktpNumber" placeholder="KTP Number"/>
                        </div>
                    </template>

                    <template v-if="type==='FEEDBACKSUMMARY'">
                        <div class="default select">
                            <span>Brand</span>
                            <select>
                                <option></option>
                            </select>
                        </div>
                        <div class="default select">
                            <span>app version</span>
                            <select>
                                <option></option>
                            </select>
                        </div>
                    </template>

                    <div class="query-btn">
                        <button>Search</button>
                        <button class="Export">Export</button>
                    </div>
                </div>
            </div>
        </div>

        <loading v-if="loading"/>
        <div class="table-list" v-if="!loading">
            <div class="title">
                <div class="left">
                    <h5></h5>
                    <select v-model="pageSize" @change="customPageSize">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                </div>

                <div class="right">
                    <span>Total: {{pager.totalRecords}}, Pages: {{pager.totalPage}}</span>
                    <pager 
                        v-if="pager.totalPage"
                        :pager="pager"
                        :onChangePage="page=>changePage(page, pager)"
                    />
                </div>
            </div>

            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}" v-if="type==='BONUSISSUE'">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of parent.tableThead">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableList" :key="item._id">
                            <td>sasasa</td>
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}" v-if="type==='FEEDBACKSUMMARY'">
                <table>
                   <thead>
                        <tr>
                            <th v-for="item of feedbackSummaryThead">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="item in tableList" :key="item._id">
                            <td>sasasa</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | dateFormat}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                            <td>{{item.modifyDate | dateFormat}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
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
    import {IssueMethod, IssueStatus} from '~/utils/selectType';
    import Loading from '~/common/Loading.vue';
    import Pager from '~/common/PagerCom.vue';
    export default {
        props: [
            'parent',
            'title',
            'type',
        ],
        data() {
            return {
                IssueStatus,
                IssueMethod,
                pageSize: 10,
                bonusThead: ['Setting ID', 'Key', 'Value', 'UpdateTime', 'CreateTime'],
                feedbackSummaryThead: ['Setting ID', 'Name', 'Logo', 'Score', 'Download Url', 'Amount', 'Download Url', 'Interest', 'Review Time', 'Sort Num', 'Status', 'UpdateTime', 'CreateTime'],
            }
        },

        computed: {
            ...mapState('systemReport', {
                loading: state=> state.loading,
                pager: state=> state.pager,
                tableList: state=> state.settingList
            }),
            ...mapState('nav', {
                tableW: state=> state.tableW
            })
        },
    
        methods: {
            customPageSize() {
                this.$store.dispatch('systemReport/customPageSize', {
                    pageSize: this.pageSize,
                    type: this.type
                });
            },
            changePage(page) {
                const params = {
                    pageSize: this.pageSize,
                    type: this.type,
                    page
                };
                this.$store.dispatch('systemReport/changePage', params);
            }
        },
        
        mounted() {
            const that = this;
            this.$store.dispatch('nav/calculateTableW');
            window.onresize = function() {
                that.$store.dispatch('nav/calculateTableW');
            };

            this.$store.dispatch('systemReport/init', {
                pageSize: this.pageSize,
                type: this.type
            });
        },
        components: {
            Loading,
            Pager
        }
        
    }
</script>