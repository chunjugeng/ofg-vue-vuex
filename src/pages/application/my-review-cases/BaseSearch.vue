<template>
    <div class="search-com">
        <div class="default">
            <span class="fa fa-phone"/>
            <input type="text" name="mobile" placeholder="Mobile"/>
        </div>
        <div class="default">
            <span class="fa fa-user"/>
            <input type="text" name="realName" placeholder="Real Name"/>
        </div>
        <div class="default">
            <span class="fa fa-id-card"/>
            <input type="text" name="applicationId" placeholder="Application ID"/>
        </div>

        <div class="default select">
            <span>Application Status</span>
            <select >
                <option value="">请选择...</option>
                <option ></option>
            </select>
        </div>
        

        <div class="default select">
            <span>Loan Type</span>
            <select>
                <option>A</option>
            </select>
        </div>

        <div class="default select" v-if="type !=='REVIEWHISTORY'">
            <span>Reviewer</span>
            <select >
                <option value="">请选择...</option>
                <option ></option>
            </select>
        </div>

        <template v-if="type==='ALLREVIEWCASES'">
            
        </template>

       


        <template v-if="type==='CASEASSIGNMENTFIRST'">
            <div class="default select">
                <span>Loan Type</span>
                <select v-model="props.loanType" @change="onChange" name="loanType">
                    <option disabled value=""></option>
                    <option v-for="item of loanTypes">{{item}}</option>
                </select>
            </div>

            <div class="default select">
                <span>Reviewer</span>
                <select v-model="props.reviewer" @change="onChange" name="reviewer">
                    <option disabled value=""></option>
                    <option v-for="item in props.reviewers" :key="item.loanId" :value="item.loanId">{{item.simpleName}}</option>
                </select>
            </div>
            
            <create-time
                from="Create Time From"
                :props="props"
                :getTime="getTime"
            />
        </template>


        <div class="query-btn">
            <button>Search</button>
            <button v-if="type==='CASEASSIGNMENTFIRST'">Assign</button>
        </div>
    </div>
</template>

<script>
    import {LoanType} from '~/utils/selectType';
    import Calendar from '~/common/Calendar.vue';
    import CreateTime from '~/common/CreateTime.vue';
    export default {
        data() {
            return {
                loanTypes: LoanType,
            }
        },
        props: [
            'type',
            'props',
            'onChange',
            'getTime',
        ],
        
        components: {
            Calendar,
            CreateTime
        }
    }
</script>
