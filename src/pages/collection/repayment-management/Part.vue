<template>
    <base-body
        type="PART"
        title="Part Repay Management"
        :thead="thead"
    />    
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import BaseBody from '../Body.vue';
    export default {
        data() {
            return {
                thead: ['Application ID', 'Loan Status', 'Review Status', 'Part Repay Status', 'Customer Mobile', 'KTP Number', 'Due Date', 'Overdue Amount At Repay', 'All Part Repay Amount', 'Part Repay Apply Date<i class="fa fa-info"/>', 'Applicant’s Phone Number', 'Option']
            }
        },
        components: {
            BaseBody
        },
        computed: {
            ...mapState('collection', {
                name: state=> state.name
            })
        }
    }
</script>

