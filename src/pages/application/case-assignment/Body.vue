<template>
    <div class="page-content">
        <div class="search">
            <h1>{{searchTitle}}</h1>
            <div>
                <h5>Application Search</h5>
                <Search
                    :CASEASSIGNMENTFIRST="true"
                    :props="props"
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
                    <h5>{{reviewerTitle}}</h5>
                </div>

                <div class="right">right</div>
            </div>

            <check-table-list 
                :data="reviewerTable"
                :CASEASSIGNMENTFIRST_REVIEW="true"
            />
        </div>
    </div>
</template>

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
        props: [
            'searchTitle',
            'reviewerTitle'
        ],
        computed: {
            ...mapState('application/caseAssignment', {
                search: state=> state.search,
                appPager: state=> state.appPager,
                appTable: state=> state.appTable,
                reviewerTable: state=> state.reviewerTable
            }),
            props() {
                return {
                    ...this.search,
                    reviewers: this.reviewerTable.list
                }
            }
        
        },
        methods: {
            getTime(name, date) {
                this.$store.dispatch('application/caseAssignment/getTime', {
                    name, date
                });
            },
            onChange(ev) {
                this.$store.dispatch('application/caseAssignment/onChange', ev);
            },
            
            changePage(page) {
                this.$store.dispatch('application/caseAssignment/changePage', page)
            },
            customPageSize() {
                this.$store.dispatch('application/caseAssignment/customPageSize', this.pageSize);
                this.$store.dispatch('initPage', this.appPager);
            },
        },

        mounted() {
            this.$store.dispatch('application/caseAssignment/init');
            this.$store.dispatch('initPage', this.appPager);
        },
        components: {
            Pager,
            Search,
            CheckTableList
        }
    }
</script>
