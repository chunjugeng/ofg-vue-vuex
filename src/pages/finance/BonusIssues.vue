<template>
    <base-body
        type="BONUS"
        title="Bonus Management"/>
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


