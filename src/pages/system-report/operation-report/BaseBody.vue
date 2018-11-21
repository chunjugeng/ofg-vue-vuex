<template>
    <div class="page-content">
        <div class="search">
            <slot name="search"></slot>
            
        </div>
        
        <loading v-if="loading"/>
        <div class="table-list" v-if="!loading">
            <div class="title">
                <div class="left">
                    <select v-model="pageSize" @change="customPageSize">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                </div>
                <div class="right">
                    <span>Total: {{pager.totalRecords}}, Pages: {{pager.totalPage}}</span>
                    <pager 
                        v-if="pager.totalPage"
                        :pager="pager"
                        :onChangePage="page=> changePage(page, pager)"
                        />
                </div>
            </div>
            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}" >
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of tableThead">{{item}}</th>
                        </tr>
                    </thead>
                    <slot name="table-list-content"/>
                </table>
            </div>
            <div v-if="JSON.stringify(tableList) === '[]'" :style="{'padding': '15px 0','text-align': 'center'}" class="no-record">no record</div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import Loading from '~/common/Loading.vue';
    import Pager from '~/common/PagerCom.vue';
    export default {
        data() {
            return {
                pageSize: 10
            }
        },
        props: ['tableThead', 'fetch'],
        computed: {
            ...mapState('systemReport/operation', {
                loading: state=> state.loading,
                pager: state=> state.pager,
                tableList: state=> state.tableList
            }),
            ...mapState('nav', {
                tableW: state=> state.tableW
            })
        },
        methods: {
            customPageSize() {
                this.init();
            },
            async changePage(page) {
                const res = await this.fetch(page);
                this.$store.dispatch('systemReport/operation/changePage', res.list);
            },
            async init() {
                this.$store.dispatch('systemReport/operation/customPageSize', this.pageSize);
                const res = await this.fetch();
                this.$store.dispatch('systemReport/operation/init', {...res, pageSize: this.pageSize});
            }
        },
        mounted() {
            const that = this;
            this.$store.dispatch('nav/calculateClientWidth');
            window.onresize = function() {
                that.$store.dispatch('nav/calculateClientWidth');
            };
            this.init();
        },
        components: {
            Loading,
            Pager
        }
    }
</script>