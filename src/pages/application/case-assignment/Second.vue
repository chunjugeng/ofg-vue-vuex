<template>
    <div class="page-content">
        <div class="search">
            <h1>Application Review Management</h1>
            <div>
                <h5>Search</h5>
                
            </div>
        </div>

        <div class="table-list">
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
            
        },
        methods: {
           
        },

        mounted() {
        },
        components: {
        }
    }
</script>