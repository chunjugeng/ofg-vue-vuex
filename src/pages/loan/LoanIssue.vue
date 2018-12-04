<template>
    <base-body
        type="LOAN"
        title="Loan Management"/>
</template>


<script>
    import {mapState, mapActions} from 'vuex';
    import BaseBody  from './BaseBody.vue';

    export default {
        data() {
            return {
                pageSize: 10,
            }
        },
        components: {
            BaseBody
        },
    }   
</script>


