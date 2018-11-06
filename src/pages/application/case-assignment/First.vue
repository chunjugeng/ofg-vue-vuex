<template>
    <div class="page-content">
        <div class="search">
            <h1>First Review Assign</h1>
            <div>
                <h5>Application Search</h5>
                <Search
                    :CASEASSIGNMENTFIRST="true"
                    :props="search"
                    :onChange="onChange"
                    :getTime="getTime"
                />
            </div>
        </div>

        <div class="table-list">
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
                    <div>
                        <span>Total: {{appPager.totalRecords}}, Pages: {{appPager.totalPage}} </span>
                        <pager 
                            v-if="appPager.totalPage > 0"
                            :pager="appPager"
                            :onChangePage="page=> changePage(page, appPager)"
                        />
                    </div>
                </div>
            </div>

            <check-table-list
                :data="appTable"
                :CASEASSIGNMENTFIRST="true"
            />

           
        </div>

        <div class="table-list">
            <div class="title">
                <div class="left">
                    <h5>First Review List</h5>
                </div>

                <div class="right">right</div>
            </div>

            <check-table-list 
                :data="reviewTable"
                :CASEASSIGNMENTFIRST_REVIEW="true"
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
    import Pager from '~/common/PagerCom.vue';

    import Search from '../Search.vue';
    import CheckTableList from '../CheckTableList.vue';

    export default {
        data() {
            return {
                pageSize: 10
            }
        },
        computed: {
            ...mapState('application/caseAssignment/first', {
                search: state=> state.search,
                appPager: state=> state.appPager,
                appTable: state=> state.appTable,
                reviewTable: state=> state.reviewTable
            }),
        
        },
        methods: {
            getTime(name, date) {
                this.$store.dispatch('application/caseAssignment/first/getTime', {
                    name, date
                });
            },

            onChange(ev) {
                this.$store.dispatch('application/caseAssignment/first/onChange', ev);
            },
            
            changePage(page) {
                this.$store.dispatch('application/caseAssignment/first/changePage', page)
            },
            customPageSize() {
                this.$store.dispatch('application/caseAssignment/first/customPageSize', this.pageSize);
                this.$store.dispatch('initPage', this.appPager);
            }
        },

        mounted() {
            this.$store.dispatch('application/caseAssignment/first/init');
            this.$store.dispatch('initPage', this.appPager)
        },
        components: {
            Pager,
            Search,
            CheckTableList
        }
    }
</script>