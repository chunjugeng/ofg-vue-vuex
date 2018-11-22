<template>
    <div class="tab-comp">
        <ul>
            <li v-for="(item, index) in data" :key="item.type" :class="{'active': currIndex === index}" @click="changeNav(item.type, index)">{{item.title}}</li>
        </ul>
        <slot :name="slotName"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currIndex: 0,
                slotName: ''
            }
        },
        props: ['data'],
        methods: {
            changeNav(type, index) {
                this.currIndex = index;
                this.slotName = type;
            }
        },
        created() {
            this.slotName = this.data[0].type;
        },
        
    }
</script>
<style lang="scss">
    .tab-comp {
        & > ul {
            border-bottom: 1px solid #e4e4e4;
            & > li {
                margin: 0  6px;
                padding: 18px 15px 12px;
                display: inline-block;
                cursor: pointer;
                &.active, &:hover {
                    border-bottom: 3px solid #008f00;
                    color: #008f00;
                }
            }
        }
    }
</style>