
<template>
    <div class="page-content">
        <div class="search">
            <h1>{{title}}</h1>
            <div>
                <base-search 
                    :type="type"
                />
            </div>
        </div>
        <loading v-if="loading"/>

        <div class="table-list" v-if="!loading">
            <div class="title">
                <div class="left">
                    <h5>{{title || table.text}}</h5>
                    <select v-model="pageSize" @change="customPageSize">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                </div>
                <div class="right">
                    <div>
                        <span v-cloak>
                            Total: {{pager.totalRecords}}; Pages: {{pager.totalPage}},
                        </span>

                        <pager 
                            v-if="pager.totalPage > 0"
                            :pager="pager"
                            :onChangePage="page=> changePage(page, pager)"
                            />
                    </div>
                </div>
            </div>

            
            
            <base-table-list
                :data="table"
                :type="type"
            />
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import BaseBody from './Body.vue';
    import Loading from '~/common/Loading.vue';
    import Pager from '~/common/PagerCom.vue';
    import BaseSearch from './BaseSearch.vue';
    import BaseTableList from './BaseTableList.vue';
    export default {
        data() {
            return {
                pageSize: 10
            }
        },
        props: ['title', 'type', 'thead'],
        computed: {
            ...mapState('collection', {
                loading: state=> state.loading,
                pager: state=> state.pager,
                nav: state=> state.nav,
                table: state=>state.table
            })
        },
        watch: {
            type(newVal, oldVal) {
                if (newVal !== oldVal) this.pageSize = 10;
            }
        },
        methods: {
            async customPageSize() {
                await this.$store.dispatch('collection/customPageSize', {
                    type: this.type,
                    pSize: this.pageSize
                });
                this.$store.dispatch('initPage', this.pager);
            },
            changePage(page) {
                this.$store.dispatch('collection/changePage', page);
            },
            async initData() {
                const params = {type: this.type, pSize: this.pageSize, thead: this.thead};
                await this.$store.dispatch('collection/init', params); 
                this.$store.dispatch('initPage', this.pager);
            }
        },
        mounted() {
            this.initData();
        },
        components: {
            Loading,
            BaseBody,
            BaseSearch,
            BaseTableList,
            Pager
        }
    }
</script>
