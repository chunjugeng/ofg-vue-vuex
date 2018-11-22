<template>
    <div class="page-content">
        <div class="search">
            <h1 v-if="title">{{title}}</h1>
            <div>
                <h5>{{searchT ||'Search'}}</h5>
                <search :type="type"/>
            </div>
        </div>


        <loading v-if="loading"/>

        <div class="table-list" v-if="!loading">
            <div class="title">
                <div class="left">
                    <h5>{{tableT}}</h5>
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
                <table v-if="type==='ALLREVIEWCASES'">
                    <thead>
                        <tr>
                            <th v-for="item of allReviewCasesThead" v-html="item" />
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

                <table v-if="type==='ALLREVIEWTASKS'">
                    <thead>
                        <tr>
                            <th v-for="item of allReviewTasksThead" v-html="item" />
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
    import Search from './Search.vue';
    import Pager from '~/common/PagerCom.vue';
    import Loading from '~/common/Loading.vue';
    export default {
        props: ['title', 'searchT', 'type', 'tableT'],
        data() {
            return {
                pageSize: 10,
                allReviewCasesThead: ['Application ID', 'Customer Name', 'Customer Mobile', 'Duration', 'Amount', 'Loan Type', 'Create Time<span class="fa fa-info"/>', 'Loan Status', 'Extension Nums', 'Issue Success Time', 'Reviewer'],
                allReviewTasksThead: ['Application ID', 'Customer Name', 'Customer Mobile', 'Duration', 'Amount', 'Loan Type', 'Create Time<span class="fa fa-info"/>', 'Loan Status']
            }
        },
        computed: {
            ...mapState('application', {
                loading: state=> state.loading,
                pager: state=> state.pager,
                tableList: state=> state.tableList
            }),
            ...mapState('nav', {
                tableW: state=> state.tableW
            })
        },
        methods: {
            customPageSize() {
                this.$store.dispatch('application/customPageSize', {type: this.type, pageSize: this.pageSize});
            },
            changePage(page) {
                this.$store.dispatch('application/changePage', {
                    page,
                    type: this.type,
                    pageSize: this.pageSize
                })
            }
        },
        mounted() {
            const that = this;
            this.$store.dispatch('nav/calculateTableW');
            window.onresize = function() {
                this.$store.dispatch('nav/calculateTableW');
            };
            this.$store.dispatch('application/init', {
                type: this.type,
                pageSize: this.pageSize
            });
        },
        components: {
            Loading,
            Search,
            Pager
            
        }
    }
</script>