<template>
    <div class="page-content">
        <div class="search">
            <h1 v-if="title">{{title}}</h1>
            <div>
                <h5>Setting Search</h5>
                <div class="search-com">
                    <template v-if="invite">
                        <div class="default extensionww">
                            <span>key</span>
                            <input type="text" name="key" placeholder="key"/>
                        </div>
                        <div class="default extension">
                            <span>value</span>
                            <input type="text" name="value" placeholder="value"/>
                        </div>
                    </template>
                    <template v-else>
                        <div class="default extension">
                            <span>name</span>
                            <input type="text" name="name" placeholder="name"/>
                        </div>
                    </template>

                    <div class="query-btn">
                        <button>Search</button>
                        <button v-if="addBtn">Add</button>
                    </div>
                </div>
            </div>
        </div>
        
        <loading v-if="loading"/>
        <div class="table-list" v-if="!loading">
            <div class="title">
                <div class="left">
                    <h5>Setting List</h5>
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
                        <tr v-if="invite">
                            <th v-for="item of inviteThead">{{item}}</th>
                        </tr>
                        <tr v-else>
                            <th v-for="item of diversionThead">{{item}}</th>
                        </tr>
                    </thead>
                    
                    <tbody v-if="invite">
                        <tr v-for="item in settingList" :key="item._id">
                            <td>sasasa</td>
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr v-for="item in settingList" :key="item._id">
                            <td>sasasa</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | dateFormat}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                            <td>{{item.modifyDate | dateFormat}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="JSON.stringify(settingList) === '[]'" :style="{'padding': '15px 0','text-align': 'center'}" class="no-record">no record</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {calculateClientWidth} from '~/utils/helper';
    import Loading from '~/common/Loading.vue';
    import Pager from '~/common/PagerCom.vue';
    export default {
        props: [
            'title',
            'invite',
            'addBtn'
        ],
        data() {
            return {
                pageSize: 10,
                tableW: '',
                inviteThead: ['Setting ID', 'Key', 'Value', 'UpdateTime', 'CreateTime'],
                diversionThead: ['Setting ID', 'Name', 'Logo', 'Score', 'Download Url', 'Amount', 'Download Url', 'Interest', 'Review Time', 'Sort Num', 'Status', 'UpdateTime', 'CreateTime'],
            }
        },

        computed: {
            ...mapState('system', {
                loading: state=> state.loading,
                pager: state=> state.pager,
                settingList: state=> state.settingList
            })
        },
    
        methods: {
            scrollTableW() {
                this.tableW = calculateClientWidth();
            },
            customPageSize() {
                this.$store.dispatch('system/customPageSize', this.pageSize);
            },
            changePage(page) {
                this.$store.dispatch('system/changePage', page);
            }
        },
        
        mounted() {
            const that = this;
            this.scrollTableW();
            window.onresize = function() {
                that.scrollTableW();
            };

            this.$store.dispatch('system/init', this.pageSize);
            
        },
        components: {
            Loading,
            Pager
        }
        
    }
</script>