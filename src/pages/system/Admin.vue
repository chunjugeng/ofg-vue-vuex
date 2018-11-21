<template>
    <base-body 
        :params="params"
        :fetch="queryAdmin"
        >
        <template slot="search">
             <div class="search">
                <h1>Admin Management</h1>
                <div>
                    <h5>Admin Search</h5>
                    <div class="search-com">
                        <div class="default extension">
                            <span class="fa fa-phone"/>
                            <input type="text" name="mobile" placeholder="Mobile"/>
                        </div>

                        <div class="default extension">
                            <span>key</span>
                            <input type="text" name="fullName" placeholder="Full Name"/>
                        </div>
                        <div class="default select">
                            <span>Status</span>
                            <select>
                                <option></option>
                                <option>ACTIVE</option>
                                <option>INACTIVE</option>
                                <option>DISABLED</option>
                                <option>FREEZE</option>
                            </select>
                        </div>
                        <div>Date</div>
                        <div class="query-btn">
                            <button>Search</button>
                            <button>Create Admin</button>
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
                        <h5>Admin Search</h5>
                    </div>
                    <div class="dialog-body">
                        <div class="item">
                            <h6>Admin ID</h6>
                            <input type="text" :value="currDialogContent._id" disabled="disabled" class="gray_bg"/>
                        </div>
                        <div class="item">
                            <h6>Mobile</h6>
                            <input type="text" :value="currDialogContent._id" disabled="disabled" class="gray_bg"/>
                        </div>

                        <div class="item">
                            <h6>Full Name</h6>
                            <input type="text" :value="currDialogContent._id" />
                        </div>
                        
                        <div class="item">
                            <h6>Status</h6>
                            <select>
                                <option>ACTIVE</option>
                                <option>INACTIVE</option>
                                <option>DISABLED</option>
                                <option>FREEZE</option>
                            </select>
                        </div>
                        <div class="item">
                            <h6>Group</h6>
                            <select>
                                <option></option>
                                <option v-for="item of Group">{{item}}</option>
                            </select>
                        </div>
                        <div class="item role">
                            <h6>Role</h6>
                            <select>
                                <option v-for="item of Role">{{item}}</option>
                            </select>
                        </div>

                        <div class="btn">
                            <input type="button" name="confirm" value="Confirm"/>
                            <input type="button" name="resetPassword" value="Reset Password"/>
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
                    tableThead: ['Admin ID', 'Mobile', 'Full Name','Status' ,'Create Time', 'Group ID', 'Role Id List'],
                    tableT: 'Admin List'
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

