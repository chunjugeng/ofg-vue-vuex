<template>
    <base-body 
        :params="params"
        :fetch="querySettingDiversion"
        >
        <template slot="search">
             <div class="search">
                <h1>Diversion Setting Management</h1>
                <div>
                    <h5>Setting Search</h5>
                    <div class="search-com">

                        <div class="default extension">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="Name"/>
                        </div>
                        <div class="query-btn">
                            <button>Search</button>
                            <button class="blue">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <tbody slot="table-list-content">
            <tr v-for="item in tableList" :key="item._id">
                <td><a @click="openDialog(item)">sasasa</a></td>
                <td>{{item._id}}</td>
                <td>xxxxxx</td>
                <td>{{item.validTime}}</td>
                <td>{{item.modifyDate}}</td>
                <td>{{item.validTime}}</td>
                <td>{{item.modifyDate}}</td>
                <td>{{item.validTime}}</td>
                <td>{{item.modifyDate}}</td>
                <td>{{item.validTime}}</td>
                <td>{{item.modifyDate}}</td>
                <td>{{item.validTime}}</td>
                <td>{{item.modifyDate}}</td>
            </tr>
        </tbody>

        <transition name="dialog-slide-fade">
            <dialog-modal
                v-if="isOpenDialog"
                :close="closeDialog"
                :isOpen="isOpenDialog"
                >
                <form>
                    <div class="dialog-title" :style="{'borderBottom': '1px solid #e4e4e4'}">
                        <h5>Detail</h5>
                    </div>
                    <div class="dialog-body upload-file">
                        <div class="detail name">
                            <span class="text">Name</span>
                            <div class="data">
                                <input type="text" >
                            </div>
                        </div>

                        <div class="detail logo">
                            <span class="text">Logo</span>
                            <div class="data">
                                <input type="file" @change="uploadFile">
                                <span>
                                    <img :src="uploadLogoUrl"/>
                                </span>
                            </div>
                        </div>

                        <div class="detail score">
                            <span class="text">Score</span>
                            <div class="data"><input type="text" value="4.3" /></div>
                        </div>

                        <div class="detail download-url">
                            <span class="text">Download Url</span>
                            <div class="data">
                                <textArea>test </textArea>
                            </div>
                        </div>

                        <div class="detail amount">
                            <span class="text">Amount</span>
                            <div class="data"><input type="text" value="4.3" /></div>
                        </div>
                        <div class="detail period">
                            <span class="text">Period</span>
                            <div class="data"><input type="text" value="4.3" /></div>
                        </div>
                        <div class="detail interest">
                            <span class="text">Interest</span>
                            <div class="data"><input type="text" value="4.3" /></div>
                        </div>
                        <div class="detail review-time">
                            <span class="text">Review Time</span>
                            <div class="data"><input type="text" value="4.3" /></div>
                        </div>
                        <div class="detail sort-num">
                            <span class="text">Sort Num</span>
                            <div class="data"><input type="text" value="4.3" /></div>
                        </div>

                        <div class="detail status">
                            <span class="text">Status</span>
                            <div class="data">
                                <select>
                                    <option>ACTIVE</option>
                                    <option>INACTIVE</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                </form>
            </dialog-modal>
        </transition>
    </base-body>
</template>

<script>
    import {mapState} from 'vuex';
    import BaseBody from './BaseBody.vue';
    import systemService from '~/service/system';
    import DialogModal from '~/common/DialogModal.vue';
    export default {
        data() {
            return {
                isOpenDialog: false,
                currDialogContent: '',
                uploadLogoUrl: '',
                params: {
                    tableThead: ['Setting ID', 'Name', 'Logo', 'Score', 'Download Url', 'Amount', 'Download Url', 'Interest', 'Review Time', 'Sort Num', 'Status', 'UpdateTime', 'CreateTime'],
                    tableT: 'Setting List'
                }
            }
        },
        computed: {
            ...mapState('system', {
                tableList: state=> state.tableList,
                pager: state=>state.pager
            })
        },
        methods: {
            uploadFile(ev) {
                const val = ev.currentTarget.value;
                console.log(val, 'val')
            },
            querySettingDiversion(page) {
                page = page ? page: 0;
                const params= {
                    page: page,
                    pageSize: this.pager.pageSize
                };
                return systemService.loadCustomer(params);
            },
            openDialog(item) {
                this.currDialogContent = item;
                this.isOpenDialog = true;
            },
            closeDialog() {
                this.isOpenDialog = false;
            },
        },
        components: {
            BaseBody,
            DialogModal
        }
    }
</script>

