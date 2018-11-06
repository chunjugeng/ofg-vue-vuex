<template>
    <div class="query-btn">
        <button @click="onQuery" :disabled="!valid">Query</button>
    </div>
</template>

<script>
    export default {
        props: ['valid'],
        methods: {
            onQuery() {
                this.$store.dispatch('query');
            }
        }
    }   
</script>
<style lang="sass">
    .query-btn {
        button {
            margin: 5px 0;
            padding: 10px 20px;

            display: inline-block;
            color: white;
            background-color: #3d9970;
            

            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.5s ease-out;
            &:hover {
                background-color: #1d8557;
            }
            &[disabled] {
                background-color: #e4e4e4;
                color: white;
            }
        }
    }
</style>