<template>
    <base-body 
        :params="params"
        :fetch="queryReason"
        >
        <template slot="search">
             <div class="search">
                <h1>Reason Management</h1>
                <div>
                    <h5>Reason Search</h5>
                    <div class="search-com">
                        <div class="default select">
                            <span>Review Session</span>
                            <select>
                                <option>PRE_REVIEW</option>
                                <option>SECOND_REVIEW</option>
                                <option>FIRST_REVIEW</option>
                                <option>FINAL_REVIEW</option>
                            </select>
                        </div>
                        <div class="default select">
                            <span>Execution Status</span>
                            <select>
                                <option></option>
                                <option>CLOSE</option>
                                <option>REJECT</option>
                            </select>
                        </div>
                        <div class="default select">
                            <span>Status</span>
                            <select>
                                <option></option>
                                <option>ACTIVE</option>
                                <option>INACTIVE</option>
                            </select>
                        </div>
                        <div class="query-btn">
                            <button>Query</button>
                            <button class="blue">Create Reason</button>
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
                        <h5>Reason Search</h5>
                    </div>
                    <div class="dialog-body">
                        <div class="item">
                            <h6>Reason ID</h6>
                            <input type="text" :value="currDialogContent._id" disabled="disabled" class="gray_bg"/>
                        </div>
                        <div class="item">
                            <h6>Reason Name</h6>
                            <input type="text" :value="currDialogContent._id" disabled="disabled" class="gray_bg"/>
                        </div>
                        <div class="item">
                            <h6>Review Session</h6>
                            <input type="text"/>
                        </div>
                        <div class="item select">
                            <h6>Execution Status</h6>
                            <select>
                                <option>CLOSE</option>
                                <option>REJECT</option>
                            </select>
                        </div>
                        <div class="item select">
                            <h6>Status</h6>
                            <select>
                                <option>ACTIVE</option>
                                <option>INACTIVE</option>
                            </select>
                        </div>
                        <div class="item">
                            <h6>Description</h6>
                            <input type="text" value="test" disabled="disabled" class="gray_bg"/>
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
    export default {
        data() {
            return {
                isOpenDialog: false,
                currDialogContent: '',
                params: {
                    tableThead: ['Reason ID', 'Reason Name', 'Review Session', 'Execution Status', 'Category' , 'Risk Level', 'Status', 'Description'],
                    tableT: 'Reason List'
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
            queryReason(page) {
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

