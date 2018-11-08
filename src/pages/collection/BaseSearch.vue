<template>
    <div class="search-com">
        <template v-if="type==='CURRENT' || type==='OVERDUE'">
            <div class="default">
                <span class="fa fa-phone"/>
                <input type="text" name="customerMobile" placeholder="Customer Mobile" v-model="search.customerMobile"/>
            </div>
            <div class="default">
                <span class="fa fa-user"/>
                <input type="text" name="customerName" placeholder="Customer Name"/>
            </div>
            <div class="default">
                <span class="fa fa-info"/>
                <input type="text" name="applicationId" placeholder="Application ID"/>
            </div>
            
        </template>
        <v-create-time 
            v-if="type==='CURRENT'"
            from="Due Date From"
            :props="search"
        /> 

        <template v-if="type==='OVERDUE'">
            <div class="default select">
                <span>Loan Status</span>
                <select name="loanStatus" v-model="search.loanStatus">
                    <option value=""></option>
                    <option v-for="item of LoanStatus">{{item}}</option>
                </select>
            </div>

            <v-create-time
                from="Fianl Approve From"
                :props="search"
            />
            <v-create-time
                from="Overdue Days From"
                :props="search"
            />
        </template>

        <template v-if="type === 'PART'|| type === 'REDUCE'">

            <div class="default">
                <span class="fa fa-info"/>
                <input type="text" name="applicationId" placeholder="Application ID" />
            </div>
            <div class="default">
                <span class="fa fa-phone"/>
                <input type="text" name="customerMobile" placeholder="Customer Mobile" />
            </div>
            <div class="default">
                <span class="fa fa-info"/>
                <input type="text" name="ktpNumber" placeholder="KTP Number"/>
            </div>

             <v-create-time
                from="Due Date From"
                :props="search"
            />
            <v-create-time
                from="Overdue Days From"
                :props="search"
            />
            <div class="default select">
                <span>Review Status</span>
                <select >
                    <option value=""></option>
                    <option v-for="item of ReviewStatus">{{item}}</option>
                </select>
            </div>
            <div class="default select">
                <span>Part Repay Status</span>
                <select >
                    <option value=""></option>
                    <option v-for="item of PartRepayStatus">{{item}}</option>
                </select>
            </div>
        </template>

        <div class="query-btn">
            <button>Search</button>
        </div>
    </div>
    
</template>

<script>
    import {LoanStatus, ReviewStatus, PartRepayStatus} from '~/utils/selectType';
    import {mapState} from 'vuex';
    import VCreateTime from '~/common/VCreateTime.vue';


    export default {
        data() {
            return {
                LoanStatus,
                ReviewStatus,
                PartRepayStatus
            }
        },
        props: [
            'type',
        ],
        computed: {
            ...mapState('collection', {
                search: state=>state.search
            })
        },
        methods: {
            getTime() {

            }
        },
        components: {
            VCreateTime
        }
    }
</script>



