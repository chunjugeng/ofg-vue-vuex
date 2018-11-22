<template>
    <div class="review-detail">
        <div class="application-review">
            <h1>Application Review</h1>
            <div class="boxcon">
                <h3>Basic Info</h3>
                <div class="information paddingLR5">
                    <div class="default">
                        <span><i class="fa fa-info">Application ID</i></span>
                        <input type="text" disabled value="102443"/>
                    </div>
                    <div class="default">
                        <span><i class="fa fa-user">Customer ID</i></span>
                        <input type="text" disabled value="101513"/>
                    </div>
                    <div class="default">
                        <span><i class="fa fa-phone">Customer Mobile</i></span>
                        <input type="text" disabled value="081114447788"/>
                    </div>
                    <div class="default">
                        <span><i class="fa fa-user"> Reviewer</i></span>
                        <input type="text" disabled value="Reviewer"/>
                    </div>
                    <div class="default">
                        <span><i class="fa fa-info">Application Status</i></span>
                        <input type="text" disabled value="FINAL_REVIEW"/>
                    </div>
                    <div class="default">
                        <span><i class="fa fa-calendar-times-o">Apply Time</i></span>
                        <input type="text" disabled value="102443"/>
                    </div>
                    <div class="default">
                        <span><i class="fa fa-android"> Apply App Version</i></span>
                        <input type="text" disabled value="102443"/>
                    </div>
                    <div class="default">
                        <span><i class="fa fa-android"> Apply App Name</i></span>
                        <input type="text" disabled value="102443"/>
                    </div>
                    <div class="default">
                        <span><i class="fa fa-android"> Reserve Mobile</i></span>
                        <input type="text" disabled value="102443"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="customer-info boxcon">
            <h3>Customer Info</h3>
            <tabs-slot 
                :data="customer" 
                class="paddingLR10"
                >
                <div slot="Personal"
                    class="personal">
                    <p><span>Real Name:</span>NUrrahmat KOsasih</p>
                    <p><span>Credential No:</span>8887770801980005</p>
                    <p><span>Credential Type:</span>Ktp</p>
                    <p><span>Gender:</span>MALE</p>
                    <p><span>Educational Level:</span>S2</p>
                    <p><span>Marital Status:</span>MARRIED</p>
                    <p><span>Children Number:</span>ZERO</p>
                    <p><span>Living Address</span><i>JAWA BARAT KOTA DEPOK SAWANGAN PENGASINAN kp.kebon kopi rt001 rw007 no33</i></p>
                    <p><span>Credential Address:</span></p>
                    <p><span>LBS Address:</span></p>
                    <p><span>Live time:</span>ONE_YEAR</p>
                    <p><span>Mother Middle Name</span>nxnx</p>
                    <p><span>Facebook Id:</span>didn't link with facebook</p>
                    <p><span>Facebook Full Name:</span>didn't link with facebook</p>
                    <p><span>Facebook Gender:</span>didn't link with facebook</p>
                    <p><span>Facebook age range:</span>didn't link with facebook</p>
                    <p><span>time:</span></p>
                </div>
                <div slot="Employment"
                    class="employment">
                    <p><span>Profession:</span>PHOTOGRAPHER</p>
                    <p><span>Salary:</span>BETWEEN_2M_4M</p>
                    <p><span>Company Name:</span>BXncb</p>
                    <p><span>Company Province:</span>Jawa Timur</p>
                    <p><span>Company City:</span>Kota Surabaya</p>
                    <p><span>Company District:</span>Bubutan</p>
                    <p><span>Company Area:</span>Gundih</p>
                    <p><span>Company Address:</span>NNcnc</p>
                    <p><span>Work Start From:</span></p>
                    <p><span>Company Phone:</span>0652-9796367</p>
                    <p><span>Work Email:</span></p>
                </div>
                <div slot="Contact" class="contact">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Relation Ship</th>
                            </tr>
                        </thead>

                    </table>
                </div>

                <div slot="Bankcard" class="bankcard">
                    <p><span>Bank Code:</span>BJB</p>
                    <p><span>Card Number:</span>9797679767</p>
                    <p><span>City:</span></p>
                    <p><span>Province:</span></p>
                    <p><span>Bank Brance:</span></p>
                    <p><span>Verify Status:</span>PENDING</p>
                    <p><span>Account Holder Name:</span></p>
                </div>
            </tabs-slot>
        </div>

        <div class="media-info boxcon">
            <h3>Media Info</h3>
            <tabs-slot :data="media" class="paddingLR10">
                <div slot="Phone">
                    <ul>
                        <li><img src="https://moneykingtest.s3-ap-southeast-1.amazonaws.com/uploadfile/101772/181119/EMPLOYMENT_PHOTO_1542624570090_083337771456_work_image.jpg?"/></li>
                        <li><img src="https://moneykingtest.s3-ap-southeast-1.amazonaws.com/uploadfile/101772/181119/EMPLOYMENT_PHOTO_1542624570090_083337771456_work_image.jpg?"/></li>
                    </ul>
                </div>
                <div slot="Video">
                    Video
                </div>
            </tabs-slot>
        </div>

        <div class="inner-review boxcon">
            <h3>Inner Review</h3>
            <tabs-slot class="paddingLR10" :data="[{title: 'KTP', type: 'KTP'}, {title: 'IMEI', type: 'IMEI'}]">
                <div slot="KTP">KTP</div>
                <div slot="IMEI">IMEI</div>
            
            </tabs-slot>
        </div>

        <div class="application-review-tasks boxcon">
            <h3>Application Review Tasks <span class="REJECRED">(REJECTED)</span></h3>
            <table>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Application ID</th>
                        <th>Application Status</th>	
                        <th>Task Name</th>
                        <th>Run Option</th>
                        <th>Task Status	Create Time</th>
                    </tr>
                </thead>
            </table>

            <div class="no-record">no record</div>
        </div>
        
        <div class="risk-info boxcon">
            <h3>Risk Info <span class="REJECRED">(REJECTED)</span></h3>
        </div>
        <div class="face-recognition-similarity-info boxcon">
            <h3>Face Recognition Similarity Info</h3>
        </div>

        <div class="loan-info boxcon">
            <h3>Loan Info <span class="REJECED"> (REJECTED)</span></h3>
        </div>

        <div class="review-log boxcon">
            <h3>Review Log <a class="add-log-btn">Add Log</a></h3>
        </div>
    </div>
</template>
<script>
    import TabsSlot from '~/common/TabsSlot.vue';
    export default {
        data() {
            return {
                customer: [
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
                        title: 'Bankcard Info',
                        type: 'Bankcard'
                    }
                ],
                media: [
                    {
                        title: 'Phone Info',
                        type: 'Phone'
                    },
                    {
                        title: 'Video Info',
                        type: 'Video'
                    }
                ]
            }
        },
        methods: {
        },
        components: {
            TabsSlot
        }
    }
</script>
<style lang="scss">
    .review-detail {
        margin-top: 40px;

        .paddingLR5 {
            padding: 0 5px;
        }
        .paddingLR10 {
            padding: 0 10px;
        }
        .application-review {
            h1 {
                margin: 5px 0 15px;
                font-size: 24px;
            }
            
        }

        .boxcon {
            h3 {
                padding: 0 10px 10px;
                font-size: 17px;
                border-bottom: 1px solid #e4e4e4;
                font-weight: 400;
                span.REJECRED {
                    color: #dd4b39;
                    font-weight: 500;
                }
            }

            .personal, .employment, .contact, .bankcard{
                padding: 20px 0;
                p {
                    line-height: 26px;
                    span {
                        margin-right: 10px;
                        width: 20%;
                        display: inline-block;
                        text-align: right;
                        font-weight: 600;
                    }
                    i {
                        width: 35%;
                        display: inline-block;
                        font-style: normal;
                    }

                    span, i {
                        vertical-align: top;
                    }
                }
            }

            img {
                width: 60%;
                
            }
            
        }

        .media-info {
            .tab-comp {
                & > div {
                    & > ul {
                        display: table;
                        li {
                            padding: 3%;
                            width: 50%;
                            display: table-cell;
                            text-align: center;
                        }
                    }
                }
            }
            
        }
        .application-review-tasks {
            table {
                margin: 15px 0;
            }
            .no-record {
                text-align: center;
            }
        }
        .review-log {
            .add-log-btn {
                padding: 8px 6px;
                border-radius: 3px;
                background-color: #00c0ef;
                display: inline-block;
                color: white;
                font-size: 13px;
                &:hover {
                    background-color: #149ccc;
                }
            }
        }
    }
</style>