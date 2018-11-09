<template>
    <div class="ofg-tabs">
        <ul class="tab-nav">
            <li v-for="(item, index) in data.nav" @click="changeNav(index, item)" :class="{'active': currIndex === index}">{{item.text}}</li>
        </ul>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: [
            'data'
        ],
        data() {
            return {
                currIndex: 0
            }
        },
        
        methods: {
            changeNav(index, item) {
                this.currIndex = index;
                this.$emit('on-select-tab', item.tab);
            }
        }
    }
</script>

<style lang="scss">
    $green: #00a65a;
    $borderColor: #d2d6de;
    .ofg-tabs {
        background-color: white;
        & >ul.tab-nav {
            padding: 0 15px;
            li {
                padding: 15px 10px;
                display: inline-block;
                border-bottom: 3px solid transparent;
                transition: all 0.2s ease-out;
                &:hover, &.active {
                    color: $green;
                    border-color: $green;
                }
            }
        }
        & >div.tabs-content {
            padding: 10px 0;
            border-top: 1px solid $borderColor;
        }
    }
</style>