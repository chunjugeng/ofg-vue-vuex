<template>
    <div class="page-content">
        <slot name="test"/>
        <slot name="search"/>
        
        <loading v-if="loading"/>
        <div class="table-list" v-if="!loading">
            <div class="title">
                <div class="left">
                    <h5>{{params.tableT || 'Setting List'}}</h5>
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
                        :onChangePage="page=>changePage(page, pager)"
                    />
                </div>
            </div>
            <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of params.tableThead">{{item}}</th>
                        </tr>
                    </thead>
                    <slot name="table-list-content" />
                </table>
                <div v-if="JSON.stringify(tableList) === '[]'" :style="{'padding': '15px 0','text-align': 'center'}" class="no-record">no record</div>
            </div>
        </div>
        
        <slot/>
        
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Loading from '~/common/Loading.vue';
    import Pager from '~/common/PagerCom.vue';
    export default {
        props: [
            'params',
            'fetch'
        ],
        data() {
            return {
                pageSize: 10,
                // inviteThead: ['Setting ID', 'Key', 'Value', 'UpdateTime', 'CreateTime'],
                // diversionThead: ['Setting ID', 'Name', 'Logo', 'Score', 'Download Url', 'Amount', 'Download Url', 'Interest', 'Review Time', 'Sort Num', 'Status', 'UpdateTime', 'CreateTime'],
            }
        },

        computed: {
            ...mapState('system', {
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
                this.$store.dispatch('system/changePage', res.list);
            },
            
            async init() {
                this.$store.dispatch('system/customPageSize', this.pageSize);
                const res = await this.fetch();
                this.$store.dispatch('system/init', res);
            }
        },
        
        mounted() {
            const that = this;
            this.$store.dispatch('nav/calculateTableW');
            window.onresize = function() {
                that.$store.dispatch('nav/calculateTableW');
            };

            this.init();
            
        },
        components: {
            Loading,
            Pager
        }
        
    }
</script>