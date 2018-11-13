<template>
    <div class="date-from-to">
        <div class="create" v-if="register">
            <span>Register Time</span>
            <input type="text" name="registerTime" @click="showCreateTime" :value="registerTime"/>
            <div v-if="isShowCreateTime" @click="cancelBubbleEv">
                <Calendar @date-text="onTime('registerTime', $event)" />
            </div>
        </div>
        <div class="to">
            <span>To</span>
            <input type="text" name="toTime" @click="showToTime" :value="toTime"/>
            <div v-if="isShowToTime" @click="cancelBubbleEv">
                <Calendar @date-text="onTime('toTime', $event)"/>
            </div>
        </div>
    </div>

</template>

<script>
    import Calendar from '~/common/Calendar.vue';
    export default {
        data() {
            return {
                registerTime: '',
                toTime: '',
                isShowCreateTime: false,
                isShowToTime: false
            }
        },
        props: [
            'props',
            'from',
            'register',
            'getTime'
        ],
        methods: {
            onTime(name, dateText) {
                this[name] = dateText;
                this.getTime({key: name, val: dateText});
                this.isShowCreateTime = false;
                this.isShowToTime = false;
            },
            showCreateTime(ev) {
                ev.cancelBubble = true;
                this.isShowCreateTime = true;
                this.isShowToTime = false;
            }, 
            showToTime(ev) {
                ev.cancelBubble = true;
                this.isShowToTime = true;
                this.isShowCreateTime = false;
            },
            cancelBubbleEv(ev) {
                return ev.cancelBubble= true;
            }
        },
        mounted() {
            document.addEventListener('click', (e)=> {
                this.isShowCreateTime = false;
                this.isShowToTime = false;
            });
        },
        components: {
            Calendar
        }
    }
    
</script>

<style lang="scss">
    .date-from-to {
        padding: 5px 10px;
        width: 50%;
        height: 34px;
        box-sizing: border-box;
        display: table;
        & > div {
            display: inline-table;
            height: 34px;
            span {
                padding: 0 10px;
                width: 1%;
                line-height: 32px;
                border: 1px solid #d2d6de;
                white-space: nowrap;
                display: table-cell;
                border-right: none;
                vertical-align: bottom;
            }
            input {
                text-indent: 10px;
            }
            &.create {
                position: relative;
                width: 60%;
                float: left;
                & > div {
                    position: absolute;
                }
            }
            &.to {
                width: 40%;
                position: relative;
                span {
                    border-left: none;
                }
                & > div {
                    position: absolute;
                }
            }
        }
        
        
        input {
            width: 100%;
            height: 34px;
            border: 1px solid #d2d6de;
            display: table-cell;
            vertical-align: bottom;
            &:focus {
                border-color: green;
                transition: all 0.3s ease-out;
            }
        }
        
    }
</style>