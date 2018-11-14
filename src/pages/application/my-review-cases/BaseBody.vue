<template>
    <div class="page-content">
        <div class="search">
            <h1>{{title || 'Review Task'}}</h1>
            <div>
                <h5>Application Search</h5>
                <search :type="type"/>
            </div>
        </div>


        <loading v-if="loading"/>
        
        <div class="table-list" v-if="!loading">
            <div class="title">
                <div class="left">
                    <h5>Application List</h5>
                    <select v-model="pageSize" @change="customPageSize">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                </div>
                <div class="right">
                    <span>Total: {{pager.totalRecords}}, Pages: {{pager.totalPage}}</span>
                    <Pager
                        v-if="pager.totalPage"
                        :pager="pager"
                        :onChangePage="page=>changePage(page, pager)"
                    />
                </div>
            </div>

            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}">
                <table v-if="type==='FIRST'">
                    <thead>
                        <tr>
                            <th v-for="item of firstThead" v-html="item" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableList" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | dateFormat}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                        </tr>
                    </tbody>
                </table>

                <table v-if="type==='SECOND'">
                    <thead>
                        <tr>
                            <th v-for="item of secondThead" v-html="item" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableList" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | dateFormat}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                        </tr>
                    </tbody>
                </table>

                <table v-if="type==='FINAL'">
                    <thead>
                        <tr>
                            <th v-for="item of finalThead" v-html="item" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableList" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | dateFormat}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                        </tr>
                    </tbody>
                </table>

                <table v-if="type==='REVIEWHISTORY'">
                    <thead>
                        <tr>
                            <th v-for="item of reviewHistoryThead" v-html="item" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableList" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | dateFormat}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {calculateClientWidth} from '~/utils/helper';
    import Search from './BaseSearch.vue';
    import Pager from '~/common/PagerCom.vue';
    import Loading from '~/common/Loading.vue';
    export default {
        props: ['title', 'type'],
        data() {
            return {
                pageSize: 10,
                tableW: '',
                firstThead: ['Application ID', 'Customer Name', 'Customer Mobile', 'Duration', 'Amount', 'Loan Type', 'Create Time<span class="fa fa-info"/>', 'Loan Status', 'Extension Nums', 'Issue Success Time', 'Reviewer'],
                secondThead: ['Application ID', 'Customer Name', 'Customer Mobile', 'Duration', 'Amount', 'Loan Type', 'Create Time<span class="fa fa-info"/>', 'Loan Status'],
                finalThead: ['Application ID', 'Customer Name', 'Customer Mobile', 'Duration', 'Amount', 'Loan Type', 'Create Time<span class="fa fa-info"/>', 'Loan Status'],
                reviewHistoryThead: ['Application ID', 'Customer Name', 'Customer Mobile', 'Duration', 'Amount', 'Loan Type', 'Create Time<span class="fa fa-info"/>', 'Loan Status']
            }
        },
        computed: {
            ...mapState('application/myReviewCases', {
                loading: state=> state.loading,
                pager: state=> state.pager,
                tableList: state=> state.tableList
            })
        },
        methods: {
            customPageSize() {
                this.$store.dispatch('application/myReviewCases/customPageSize', this.pageSize);
            },
            changePage(page) {
                this.$store.dispatch('application/myReviewCases/changePage', page)
            },
            scrollTableW() {
                this.tableW = calculateClientWidth();
            },
        },
        mounted() {
            const that = this;
            this.scrollTableW();
            window.onresize = function() {
                that.scrollTableW();
            };
            this.$store.dispatch('application/myReviewCases/init', this.pageSize);
        },
        components: {
            Loading,
            Search,
            Pager
        }
    }
</script>