<template>
    <base-body 
        :params="params"
        :fetch="querySettingList"
        >
        <template slot="search">
             <div class="search">
                <h1>Invite Setting Management</h1>
                <div>
                    <h5>Setting Search</h5>
                    <div class="search-com">
                        <div class="default extension">
                            <span>key</span>
                            <input type="text" name="key" placeholder="key"/>
                        </div>

                        <div class="default extension">
                            <span>value</span>
                            <input type="text" name="value" placeholder="value"/>
                        </div>
                        <div class="query-btn">
                            <button>Query</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <tbody slot="table-list-content">
            <tr v-for="item in tableList" :key="item._id">
                <td><a class="" @click="openDialog(item)">dialog</a></td>
                <td>{{item._id}}</td>
                <td>xxxxxx</td>
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
                <template>
                    <div class="dialog-title">
                        <h5>Setting Search</h5>
                    </div>
                    <div class="dialog-body">
                        <div class="item">
                            <h6>Setting ID</h6>
                            <input type="text" :value="currDialogContent._id" disabled="disabled" class="gray_bg"/>
                        </div>
                        <div class="item">
                            <h6>Key</h6>
                            <input type="text" :value="currDialogContent._id" />
                        </div>
                        <div class="item">
                            <h6>Value</h6>
                            <input type="text" :value="currDialogContent._id" />
                        </div>

                        <div class="btn">
                            <input type="button" name="confirm" value="Confirm"/>
                        </div>
                    </div>
                    
                </template>
            </dialog-modal>
        </transition>
    </base-body>
</template>

<script>
    import {mapState} from 'vuex';
    import BaseBody from './BaseBody.vue';
    import DialogModal from '~/common/DialogModal.vue';
    import systemService from '~/service/system';
    export default {
        data() {
            return {
                isOpenDialog: false,
                currDialogContent: '',
                params: {
                    tableThead: ['Setting ID', 'Key', 'Value', 'UpdateTime', 'CreateTime'],
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
            openDialog(item) {
                this.currDialogContent = item;
                this.isOpenDialog = true;
            },
            closeDialog() {
                this.isOpenDialog = false;
            },
            querySettingList(page) {
                page = page ? page: 0;
                const params= {
                    page: page,
                    pageSize: this.pager.pageSize
                };
                return systemService.loadCustomer(params);
            }
        },
        components: {
            BaseBody,
            DialogModal
        }
    }
</script>

