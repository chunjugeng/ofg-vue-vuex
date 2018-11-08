<template>
    <div class="page-content finance">
        <div class="search">
            <h1>Bonus Issue Management</h1>
            <div>
                <h5>Search</h5>
                <Search :loan="true"/>
            </div>
            
        </div>

        <div class="table-list">
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
                            v-if="pager.totalPage > 0"
                            :pager="pager"
                            :onChangePage="page=> changePage(page, this.pager)"
                            />
                    </div>
                </div>
            </div>

            <table-list 
                :data="table"
                :LOAN="true"
                />
        </div>
    </div>
</template>


<script> 
    import {mapActions, mapState} from 'vuex';
    import Pager from '~/common/pagerCom.vue';
    import TableList from './TableList.vue';
    import Search  from './Search.vue';
    export default {
        data() {
            return {
                pageSize: 10
            }
        },
        computed: {
            ...mapState('finance/loan', {
                pager: state=> state.pager,
                table: state=> state.table
            })
        },
        methods: {
            ...mapActions('finance/loan', [
                'init',
                'changePage',
                'setPageSize'
            ]),
            async customPageSize() {
                await this.setPageSize(this.pageSize);
                this.$store.dispatch('initPage', this.pager);
            },
            async initData() {
                await this.init();
                this.$store.dispatch('initPage', this.pager);
            }
        },
        mounted() {
            this.initData();
            
        },
        components: {
            Pager,
            TableList,
            Search
        }
    }   
</script>


