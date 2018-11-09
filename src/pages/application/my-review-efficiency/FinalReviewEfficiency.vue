<template>
    <div class="page-content final-review-efficiency">
        <base-tabs :data="tabs" @on-select-tab="selectTab">
            <div class="tabs-content">
                <div class="search-com">
                    <div class="default select">
                        <span>Customer Type</span>
                        <select>
                            <option v-for="item of CustomerType">{{item}}</option>
                        </select>
                    </div>

                    <div class="query-btn">
                        <button>Search</button>
                    </div>
                </div>

                <loading v-if="loading" />
                <div class="table-list" v-if="tab==='Efficiency' && !loading">
                    <h5>Review Efficency</h5>

                    <div class="table-content">
                        <table>
                            <thead>
                                <tr><th v-for="item of efficiency.thead">{{item}}</th></tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in efficiency.list" :key="index">
                                    <td>{{item.modifyDate}}</td>
                                    <td>{{item.modifyDate | dateFormat}}</td>
                                    <td>{{item.modifyDate | money(2)}}</td>
                                    <td>{{item.modifyDate | money(2)}}</td>
                                    <td>{{item._id}}</td>
                                    <td>{{item.createDate | dateFormat}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="table-list" v-if="tab==='Quality'">
                    <h5>Review Quality</h5>
                    <div class="table-content">
                        <table>
                            <thead>
                                <tr><th v-for="item of quality.thead">{{item}}</th></tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in quality.list" :key="index">
                                    <td>{{item.modifyDate}}</td>
                                    <td>{{item.modifyDate | dateFormat}}</td>
                                    <td>{{item.modifyDate | money(2)}}</td>
                                     <td>{{item.modifyDate | dateFormat}}</td>
                                    <td>{{item.modifyDate | money(2)}}</td>
                                    <td>{{item.modifyDate | money(2)}}</td>
                                    <td>{{item._id}}</td>
                                    <td>{{item.createDate | dateFormat}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </base-tabs>
    </div>
</template>

<script>
    
    import {mapState, mapActions} from 'vuex';
    import {CustomerType} from '~/utils/selectType';
    import applicationService from '~/service/application';
    import Loading from '~/common/Loading.vue';
    import BaseTabs from '~/common/BaseTabs.vue';
    import CreateTime from '~/common/CreateTime.vue';
    export default {
        data() {
            return {
                loading: true,
                CustomerType,
                tab: 'Efficiency',
                tabs: {
                    nav: [
                        {
                            text: 'Review Efficiency',
                            tab: 'Efficiency'
                        },
                        {
                            text: 'Review Quality',
                            tab: 'Quality'
                        }
                    ],
                    
                },

                efficiency: {
                    thead: ['Reviewd Case Number', 'Approved Case Number', 'Issued Case Number', 'Remaining Case Number', 'Review Efficiency Value(today)', 'Review Efficiency Value(yesterday)'],
                    list: []
                },
                quality: {
                    thead: ['Current Case Number', 'Grace Period Number', 'Overdue Case Number', 'Current Extension Case Number', 'Paid Off Case Number', 'Profit Amount', 'Profit Rate', 'Overdue Rate'],
                    list: []
                }

            }
        },
        methods: {
            selectTab(currTab) {
                this.tab = currTab;
            }
        },
        created() {
            applicationService.queryLoadCustomer().then((res)=> {
                this.loading = false;
                this.efficiency.list = res.list;
                this.quality.list = res.list;
            });
        },
        components: {
            Loading,
            BaseTabs,
            CreateTime
        }
    }
</script>

<style lang="scss">
    .final-review-efficiency {
        .table-list {
            h5 {
                padding: 15px;
                font-size: 16px;

            }
            table {
                th, td {
                    white-space: normal !important;
                }
            }
        }
    }
</style>