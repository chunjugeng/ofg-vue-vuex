<template>
    <div class="tabs">
        <ul>
            <li v-for="(item, index) in nav" :key="index" :class="{'active': index === currIndex}" @click="changeTab(index, item.type)">{{item.text}}</li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: [
            'nav',
            'changeNav'
        ],
        data() {
            return {
                currIndex: 0,
            }
        },
        methods: {
            changeTab(index, type) {
                this.currIndex = index;
                this.changeNav(type);
            }
        },
    }
</script>
<style lang="scss">
    @import '~/styles/tab.scss';
</style>