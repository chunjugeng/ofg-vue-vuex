<template>
    <div 
        :class="['alert-msg default', {'danger': danger, 'warning': warning }]"
        v-if="msg && isShowAlertMsg"
        >
        <button class="close" @click="close">X</button>
        <div class="alert-content">
            <p>{{msg}}</p>
            <p>{{msg}}</p>
            <p>{{msg}}</p>
            <p>{{msg}}</p>
        </div>
    </div>
</template>

<style lang="scss">
    .alert-msg {
        position: fixed;
        left: 50%;
        top: 100px;
        transform: translateX(-50%);
        border-radius: 4px;
        padding: 15px 20px;
        z-index: 99995;
        &.default {
            background: rgba(0, 0, 0, 0.7);
            color: white;
            button {
                color: white;
            }
            .alert-content {
                p {
                    line-height: 22px;
                }
            }
        }

        button {
            background: transparent;
            border: 0;
            position: absolute;
            right: 7px;
            font-size: 14px;
        }
        &.danger {
            background-color: #dd4b39;
            
            
        }
    }
</style>

<script>
    export default {
        props: [
            'danger',
            'warning',
            'msg'
        ],
        data() {
            return {
                isShowAlertMsg: true
            }
        },
        methods: {
            close() {
                this.isShowAlertMsg = false;
            }
        }
        
    }
</script>