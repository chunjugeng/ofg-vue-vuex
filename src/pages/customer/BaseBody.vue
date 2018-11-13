<template>
    <div class="page-content">
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
                            <td>sasasa</td>
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                                
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
    import {calculateClientWidth} from '~/utils/helper';
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
                tableW: '',
                allThead: ['Customer Id', 'Real Name', 'Mobile', 'Status', 'Register Time'],
                smsThead: ['Id', 'Chanel', 'Mobile', 'Code', 'Status', 'Create Time', 'Trigger'],
                mobile: ['Name', 'Email', 'Mobile', 'Last Update Time'],
            }
        },

        computed: {
            ...mapState('customer', {
                loading: state=> state.loading,
                pager: state=> state.pager,
                customerList: state=> state.customerList
            })
        },
    
        methods: {
            scrollTableW() {
                this.tableW = calculateClientWidth();
            },
            customPageSize() {
                this.$store.dispatch('customer/customPageSize', this.pageSize);
            },
            changePage(page) {
                this.$store.dispatch('customer/changePage', page);
            }
        },
        
        mounted() {
            const that = this;
            this.scrollTableW();
            window.onresize = function() {
                that.scrollTableW();
            };

            this.$store.dispatch('customer/init', this.pageSize);
            
        },
        components: {
            Loading,
            BaseSearch,
            Pager
        }
        
    }
</script>