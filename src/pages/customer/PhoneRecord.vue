<template>
    <div class="page-content">
        <div class="search">
            <h1>Customer Management</h1>
            <div>
                <h5>Customer Search</h5>
                <Search :valid="isValidQuery" :query="onQuery" />
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
                :MOBILE="true"
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
                pageSize: 10
            }
        },
        computed: {
            ...mapState({
                pager: state=> state.mobile.moBilePager,
                loadCustomer: state=> state.mobile.loadCustomer
            }),
            isValidQuery() {
                const {mobile} = this.$store.state.mobile;
                return mobile;
            },
            totalPage() {
                return countPage(this.pager);
            }
        },
        methods: {
            onQuery() {
                this.$store.dispatch('mobileQuery');
                this.$store.dispatch('initPage', this.pager);
            },
            changePage(page) {
                this.$store.dispatch('queryMobileLoadCustomer', page);
            },
            onChange(ev) {
                this.$store.dispatch('onChange', ev);
            },
            customPageSize() {
                this.$store.dispatch('custMobilePageSize', this.pageSize);
                this.$store.dispatch('initPage', this.pager);
            },
            async init() {
                await this.$store.dispatch('custMobilePageSize', 10);
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