<template>
    <base-body 
        :params="params"
        :fetch="queryAdmin"
        >
        <template slot="search">
             <div class="search">
                <h1>White List Management</h1>
                <div>
                    <h5>White List Search</h5>
                    <div class="search-com">

                        <div class="default extension">
                            <span>Value</span>
                            <input type="text" name="value" placeholder="Value"/>
                        </div>
                        <div class="default select">
                            <span>Type</span>
                            <select>
                                <option>---</option>
                                <option>KTP</option>
                                <option>MOBILE</option>
                                <option>COMPANY_NAME</option>
                            </select>
                        </div>
                        <div class="query-btn">
                            <button>Query</button>
                            <button class="blue">Create White List</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <tbody slot="table-list-content">
            <tr v-for="item in tableList" :key="item._id">
                <td><a class="" @click="openAdminDialog(item)">dialog</a></td>
                <td>{{item._id}}</td>
                <td>xxxxxx</td>
                <td>{{item.validTime}}</td>
                <td>{{item.modifyDate}}</td>
                <td>{{item.validTime}}</td>
                <td>{{item.modifyDate}}</td>
            </tr>
        </tbody>

        <transition name="dialog-slide-fade">
            <dialog-modal
                v-if="isOpenDialog"
                :close="closeAdminDialog"
                :isOpen="isOpenDialog"
                >
                <template>
                    <div class="dialog-title">
                        <h5>White List Search</h5>
                    </div>
                    <div class="dialog-body">
                        <div class="item">
                            <h6>White List ID</h6>
                            <input type="text" :value="currDialogContent._id" disabled="disabled" class="gray_bg"/>
                        </div>
                        <div class="item">
                            <h6>Type</h6>
                            <input type="text" :value="currDialogContent._id" disabled="disabled" class="gray_bg"/>
                        </div>

                        <div class="item">
                            <h6>Value</h6>
                            <input type="text" :value="currDialogContent._id" />
                        </div>
                        
                        <div class="item">
                            <h6>Status</h6>
                            <select>
                                <option>ACTIVE</option>
                                <option>INACTIVE</option>
                            </select>
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
    import systemService from '~/service/system';
    import DialogModal from '~/common/DialogModal.vue';
    import {Group, Role} from '~/utils/selectType';
    export default {
        data() {
            return {
                Group,
                Role,
                isOpenDialog: false,
                currDialogContent: '',
                params: {
                    tableThead: ['White List ID', 'Value','Reason','Type', 'Status'],
                    tableT: 'White List'
                },
            }
        },
        computed: {
            ...mapState('system', {
                tableList: state=> state.tableList,
                pager: state=> state.pager
            })
        },
        methods: {
            queryAdmin(page) {
                page = page ? page: 0;
                const params= {
                    page: page,
                    pageSize: this.pager.pageSize
                };
                return systemService.loadCustomer(params);
            },
            openAdminDialog(item) {
                this.currDialogContent = item;
                this.isOpenDialog = true;
            },
            closeAdminDialog() {
                this.isOpenDialog = false;
            }
        },
        components: {
            BaseBody,
            DialogModal
        }
    }
</script>
<style lang="scss">
    .dialog-modal {
        width: 60%;
    }

  
    
</style>

