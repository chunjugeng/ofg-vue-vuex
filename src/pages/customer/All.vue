<template>
    <div class="page-content">
        <div class="search">
            <h1>Customer Management</h1>
            <div>
                <h5>Customer Search</h5>
                <Search 
                    :ALL="true" 
                    :params="params" 
                    :valid="isValidQuery" 
                    :query="onQuery" />
            </div>
        </div>
        <div class="table-list">
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
                    <div>
                        <span>Total:{{pager.totalRecords}},Pages:{{totalPage}}</span>
                        <pager-com 
                            v-if="pager.totalRecords"
                            :pager="pager"
                            :onChangePage='page => changePage(page, pager)' />
                    </div>
                </div>
            </div>

            <table-list
                :ALL="true"
                :data="loadCustomer"
                />
        </div>

    </div>
    
</template>

<script>
    import {mapState} from 'vuex';
    import {countPage} from '~/utils/helper';
    import TableList from './TableList.vue';
    import PagerCom from '~/common/Pager.vue';
    import Search from './Search.vue';
    export default {
        data() {
            return {
                pageSize: 10,
                params: {
                    status: {
                        text: 'status',
                        vals: ['CREATED', 'ACTIVE', 'HOLD', 'DISABLED']
                    },
                    date: {
                        from: 'Register From',
                        to: 'To'
                    }
                }
            }
        },
        computed: {
            ...mapState({
                pager: state=> state.all.allPager,
                loadCustomer: state=> state.all.loadCustomer
            }),
            
            isValidQuery() {
                const {mobile, realName, ktp, createTime, toTime, status} = this.$store.state.all;
                return mobile || realName || ktp || (createTime && toTime) || status;
            },
            totalPage() {
                return countPage(this.pager);
            }
        },
        // watch: {
        //     pager: function(oldV, newV) {
        //         return this.$store.state.all.allPager
        //     },
        // },
        methods: {
            async onQuery() {
                await this.$store.dispatch('allQuery');
                this.$store.dispatch('initPage', this.pager);
            },
            onChange(ev) {
                this.$store.dispatch('onChange', ev);
            },
            changePage(page) {
                this.$store.dispatch('queryAllLoadCustomer', page);
            },
            customPageSize() {
                this.$store.dispatch('customAllPageSize', this.pageSize);
                this.$store.dispatch('initPage', this.pager);
            },
            async init() {
                await this.$store.dispatch('customAllPageSize', 10);
                // await this.$store.dispatch('queryAllLoadCustomer');
                this.$store.dispatch('initPage', this.pager);
            }
        },
        mounted() {
            this.init();
        },
        

        components: {
            TableList,
            PagerCom,
            Search
        },
        
    }   
</script>

