<template>
    <div class="page-content customer-detail">
        <h1>Customer Detail</h1>
        <div class="tab-box">
            <div class="title">Customer Info</div>
            <tabs-slot :style="{'padding': '10px 18px'}" :data="tabNav">
                <div class="item" slot="Basic">
                    <div class="information">
                        <div class="default">
                            <span><i class="fa fa-info">Customer ID</i></span>
                            <input disabled :value="customerId"/>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-phone">Customer Mobile</i></span>
                            <input :disabled="isDisabled" :value="customerInfo._id" @change="change" name="mobile" placeholder="Customer Mobile"/>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-info">Customer Name</i></span>
                            <input :disabled="isDisabled" :value="customerInfo._id" @change="change" name="name" placeholder="Customer Name"/>
                        </div>

                        <div class="default">
                            <span><i class="fa fa-id-card">Aadhaar Number</i></span>
                            <input :disabled="isDisabled" :value="customerInfo._id" @change="change" name="aadhaar" placeholder="Aadhaar Number"/>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-info">Pan Code</i></span>
                            <input :disabled="isDisabled" :value="customerInfo._id" @change="change" name="panCode" placeholder="Pan Code"/>
                        </div>

                        <div class="default select">
                            <span>Customer Status</span>
                            <select name="status">
                                <option value="">请选择...</option>
                                <option>REGISTERED</option>
                                <option>BASIC_REVIEW</option>
                                <option>WAIT_FOR_APPLY</option>
                                <option>APPLIED</option>
                            </select>
                        </div>

                        <div class="default">
                            <span><i class="fa fa-user">Register Time</i></span>
                            <input />
                        </div>
                    </div>
                    <div class="btn">
                        <button v-if="isDisabled" @click="edit"><i class="fa fa-edit"/>Edit</button>
                        <button v-if="!isDisabled" @click="modify"><i class="fa fa-save"/>Confirm Modify</button>
                    </div>
                </div>

                <div class="item" slot="PersonalCertification">
                    Personal Certification
                </div>
                <div class="item" slot="Personal">
                    <div class="information">
                        <div class="default">
                            <span><i class="fa fa-user">Customer Name</i></span>
                            <input type="text" value="Customer Name" disabled/>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-info">Credential No</i></span>
                            <input type="text" value="Credential No" disabled/>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-user">Credential Type</i></span>
                            <select disabled>
                                <option></option>
                            </select>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-user">Province</i></span>
                            <input type="text" value="Province" disabled/>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-user">City</i></span>
                            <input type="text" value="City" disabled/>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-user">District</i></span>
                            <input type="text" value="District" disabled/>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-user">Area</i></span>
                            <input type="text" value="Area" disabled/>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-user">Address</i></span>
                            <input type="text" value="Address" disabled/>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-user">Education Level</i></span>
                            <select disabled>
                                <option></option>
                            </select>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-user">Marital Status</i></span>
                            <select disabled>
                                <option></option>
                            </select>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-user">Children Status</i></span>
                            <select disabled>
                                <option></option>
                            </select>
                        </div>
                        <div class="default">
                            <span><i class="fa fa-user">Residence Duration</i></span>
                            <select disabled>
                                <option></option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="item" slot="Employment">Employment</div>
                <div class="item" slot="Contact">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Relation</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="no-record">no record</div>
                </div>
                <div class="item" slot="Deposit">Deposit</div>
                <div class="item" slot="Loan">Loan</div>
                <div class="item" slot="Feedback">Feedback</div>
            </tabs-slot>
        </div>
    </div>
</template>
<script>
    import {queryUrlParams, onChange} from '~/utils/helper';
    import customerService from '~/service/customer';
    import TabsSlot from '~/common/TabsSlot.vue';
    export default {
        data() {
            return {
                isDisabled: true,
                customerId: '',
                basic: {
                    mobile: '',
                    status: ''
                },
                customerInfo: {},
                tabNav: [
                    {
                        title: 'Basic Info',
                        type: 'Basic'
                    },
                    {
                        title: 'Personal Certification',
                        type: 'PersonalCertification'
                    },
                    {
                        title: 'Personal Info',
                        type: 'Personal'
                    },
                    {
                        title: 'Employment Info',
                        type: 'Employment'
                    }, 
                    {
                        title: 'Contact Info',
                        type: 'Contact'
                    },
                    {
                        title: 'Deposit History',
                        type: 'Deposit'
                    },
                    {
                        title: 'Loan Issue History',
                        type: 'Loan'
                    },
                    {
                        title: 'Feedback',
                        type: 'Feedback'
                    }
                ]
            }
        },
        methods: {
            edit() {
                this.isDisabled = false;
            },
            modify() {
                
            },
            change(ev) {
                onChange.call(this.basic, ev);
                console.log(this.basic, 'modifyParams');
            },
            async queryCustomerInfo() {
                const res = await customerService.queryLoadCustomer();
                res.list[0].testDefaultStatus = 'ACTIVE';
                this.customerInfo = res.list[0];
            }
        
        },
        created() {
            const urlParams = queryUrlParams();
            this.customerId = urlParams.customerId;
            this.queryCustomerInfo();
        },
        components: {
            TabsSlot
        }
    }
</script>
<style lang="scss">
    .customer-detail {
        h1 {
            margin-bottom:  24px;
            font-size: 24px;
        }
        .tab-box {
            background-color: white;
            border-top: 2px solid green;
            border-radius: 2px;
            box-shadow: 0 1px 1px #ccc;
            .title {
                padding: 15px 10px;
                font-size: 16px;
                border-bottom: 1px solid #e4e4e4;
            }
            .item {
                padding: 10px 0;
                
            }

            .btn {
                margin: 10px 5px 0;
                button {
                    height: 34px;
                    padding: 0 15px;
                    background-color: #008f00;
                    border: none;
                    border-radius: 3px;
                    color: white;
                    cursor: pointer;

                    i:before {
                        margin-right: 3px;
                    }
                    &:hover {
                        background-color: #09B00F;
                    }
                    
                }
            }

            table {
                width: 100%;
                
                tbody {
                    background-color: #e4e4e4;
                }
            }
            .no-record {
                padding: 10px;
                text-align: center;
            }
        }
    }
</style>