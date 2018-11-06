<template>
    <div class="group-input">
        <input v-model="dateText" @click="show" />
        <div v-if="isShow" @click="cancelBubbleEv">
            <Calendar @date-text="onDateText"  />
        </div>
    </div>    
</template>
<script>
    import Calendar from '~/common/Calendar.vue';
    export default {
        data: function() {
            return {
                dateText: '',
                isShow: false
            }
        },
        methods: {
            onDateText(dateText) {
                this.dateText = dateText;
                this.isShow = false;
            },
            show(ev) {
                ev.cancelBubble = true;
                this.isShow = true;
            },
            cancelBubbleEv(ev) {
                ev.cancelBubble = true;
            }
        },
        mounted() {
            document.addEventListener('click', ()=> {
                this.isShow = false;
            });
        },
        components: {
            Calendar
        },
    }
</script>
<style lang="sass">
    .group-input {
        position: relative;
        
        .calendar-component {
            position: absolute;
            display: block;
            vertical-align: top;
        }
    }
</style>