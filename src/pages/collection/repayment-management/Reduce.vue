<template>
    <base-body
        type="REDUCE"
        title="Reduce Repay Management"
        :thead="thead"
    />    
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import BaseBody from '../Body.vue';
    export default {
        data() {
            return {
                thead: ['Application ID', 'Loan Status', 'Reduce Repay Status', 'Customer Mobile', 'KTP Number', 'Due Date', 'Overdue Days', 'Overdue Amount', 'Reduce Principle', 'Reduce Interest', 'Reduce Overdue Fee', 'Reduce Date<i class="fa fa-info"/>', 'Review‘s Number', 'Option']
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

