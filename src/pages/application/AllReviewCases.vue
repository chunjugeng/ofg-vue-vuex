<template>
    <div class="page-content">
        <div class="search">
            <h1>Application Review Management</h1>
            <div>
                <h5>Search</h5>
                <Search 
                    :ALLREVIEWCASES="true" 
                    />
            </div>
        </div>

        <div class="table-list">
            <div class="title">
                <div class="left">
                    <h5>Application List</h5>
                </div>

                <div class="right">
                    <span>Toatal: 20, Pages: 2</span>
                </div>
            </div>
            <table-list
                :ALLREVIRECASES = "true"
                :data="table"
            />
        </div>
    </div>   
</template>

<style lang="sass">
    @import '~/styles/page-content.scss';
    @import '~/styles/table-com.scss';
</style>

<script>
    import {mapActions, mapState} from 'vuex';
    import Search from './Search.vue';
    import TableList from './TableList.vue';

    export default {
        computed: {
            ...mapState('application/allReviewCases', {
                table: state=> state.table
            }),
        },
        methods: {
            ...mapActions('application/allReviewCases', [
                'init'
            ])
        },

        mounted() {
            this.init();
        },
        components: {
            Search,
            TableList
        }
    }
</script>