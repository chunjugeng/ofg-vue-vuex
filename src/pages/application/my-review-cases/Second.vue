<template>
    <div class="page-content">
        <div class="search">
            <h1>First Review Assign</h1>
            <div>
                <h5>Application Search</h5>
                <Search
                    
                />
            </div>
        </div>

        <div class="table-list">
            <div class="title">
                <div class="left">
                    <h5>Application List</h5>
                </div>
                <div class="right">
                    <span>Total: {{pager.totalRecords}}; Pages: {{pager.totalPage}}</span>
                    <pager 
                        v-if="pager.totalRecords"
                        :pager="pager"
                        :onChangePage="page=>changePage(page, pager)" />
                </div>
            </div>

            <table-list
                :ALLREVIRECASES = "true"
                :data="table"
            />
            

        </div>

       
    </div>   
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import Pager from '~/common/PagerCom.vue';

    import Search from '../Search.vue';
    import TableList from '../TableList.vue';

    export default {
        computed: {
            ...mapState('application/myReviewCase', {
                pager: state=> state.pager,
                table: state=> state.table
            })
        },
        methods: {
            changePage(page) {
                this.$store.dispatch('application/myReviewCase/changePage', page);
            }
        },
        mounted() {
            this.$store.dispatch('application/myReviewCase/init');
        },
        components: {
            Pager,
            Search,
            TableList
        }
    }
</script>