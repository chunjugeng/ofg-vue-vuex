<template>
    <div class="page-content customer">
        <div class="search">
            <h1 v-if="title">{{title}}</h1>
            <div>
                <h5>Customer Search</h5>
                <base-search 
                    :type="type"
                    />
            </div>
        </div>

        <loading v-if="loading"/>
        
        <div class="table-list" v-if="!loading">
            <div class="title">
                <div class="left">
                    <h5>Customer List</h5>
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
            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}" v-if="type==='ALL'">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of allThead">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in customerList" :key="item._id">
                            <td ><a :href="'#/customer/customer-detail?customerId=' + item._id">{{item._id}}</a></td>
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>BASIC_REVIEW</td>
                            <td>{{item.modifyDate | dateFormat(true)}}</td>
                                
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}" v-if="type==='SMS'">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of smsThead ">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="item in customerList" :key="item._id">
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
            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}" v-if="type==='MOBILE'">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of smsThead ">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="item in customerList" :key="item._id">
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
            <div v-if="JSON.stringify(customerList) === '[]'" :style="{'padding': '15px 0','text-align': 'center'}" class="no-record">no record</div>
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
                allThead: ['Customer ID', 'Customer Mobile', 'Customer Name', 'Aadhaar Number', 'Pan Code', 'Customer Status', 'Register Time'],
                smsThead: ['Id', 'Chanel', 'Mobile', 'Code', 'Status', 'Create Time', 'Trigger'],
                mobile: ['Name', 'Email', 'Mobile', 'Last Update Time'],
            }
        },

        computed: {
            ...mapState('customer', {
                loading: state=> state.loading,
                pager: state=> state.pager,
                customerList: state=> state.customerList
            }),
            ...mapState('nav', {
                tableW: state=> state.tableW
            })
        },
    
        methods: {
            customPageSize() {
                this.$store.dispatch('customer/customPageSize', this.pageSize);
            },
            changePage(page) {
                this.$store.dispatch('customer/changePage', page);
            },
            queryCustomerIdInfo(customerId) {
                
            }
        },
        
        mounted() {
            const that = this;
            this.$store.dispatch('nav/calculateTableW');
            window.onresize = function() {
                that.$store.dispatch('nav/calculateTableW');
            };

            this.$store.dispatch('customer/init', this.pageSize);
            
        },
        updated() {
            console.log()
        },
        components: {
            Loading,
            BaseSearch,
            Pager
        }
        
    }
</script>
<style lang="scss">
    .customer {
        .table-content {
            table {
                th, td {
                    white-space: normal;
                }
            }
        }
    }
    
</style>
    