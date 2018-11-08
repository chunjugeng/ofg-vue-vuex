<template>
    <div class="search-com">

        <div class="default">
            <span class="fa fa-phone"/>
            <input type="text" name="mobile" placeholder="Mobile" @input="onChange"/>
        </div>

        <template v-if="ALL">
            <div class="default">
                <span class="fa fa-user"/>
                <input type="text" name="realName" placeholder="Real Name" @input="onChange"/>
            </div>

            <div class="default">
                <span class="fa fa-id-card"/>
                <input type="text" name="ktp" placeholder="KTP" @input="onChange"/>
            </div>

            <div class="default select">
                <span>{{params.status.text}}</span>
                <select v-model="statusSelected" @change="getStatus">
                    <option value="">请选择...</option>
                    <option v-for="val of params.status.vals">{{val}}</option>
                </select>
            </div>


            <div class="date-from-to">
                <div class="create">
                    <span>{{params.date.from}}</span>
                    <input type="text" name="toTime" v-model="createTime" @click="showCreateTime"/> 
                    <div v-if="isShowCreateTime" @click="cancelBubbleEv" style="{'display': 'inline-block'}">
                        <Calendar @date-text="onCreateTime"/>
                    </div>
                </div>

                <div class="to">
                    <span>{{params.date.to}}</span>
                    <input type="text" v-model="toTime" @click="showToTime" name="toTime"/>
                    <div v-if="isShowToTime" @click="cancelBubbleEv">
                        <Calendar @date-text="onToTime"/>
                    </div>
                </div>
            </div>

            
        </template>


        <div class="query-btn">
            <button @click="query" :disabled="!valid">Query</button>
        </div>
    </div>
</template>

<script>
    import Calendar from '~/common/Calendar.vue';
    export default {
        props: ['ALL', 'SMS', 'MOBLIE', 'params', 'valid', 'query'],
        data() {
            return {
                createTime: null,
                toTime: null,
                isShowCreateTime: false,
                isShowToTime: false,
                statusSelected: null
            }
        },
        methods: {
            getStatus() {
                this.$store.dispatch('getStatus', this.statusSelected);
            },
            onCreateTime(dateText) {
                this.createTime = dateText;
                this.isShowCreateTime = false;
                this.$store.commit(('setTime'), {
                    type: 'createTime',
                    d: dateText
                });
            },
            onToTime(dateText) {
                this.toTime = dateText;
                this.isShowToTime = false;
                this.$store.commit('setTime', {
                    type: 'toTime',
                    d: dateText
                });
            },
            showCreateTime(ev) {
                ev.cancelBubble = true;
                this.isShowCreateTime = true;
                this.isShowToTime = false;
            },
            showToTime(ev) {
                ev.cancelBubble = true;
                this.isShowToTime = true;
                this.isShowCreateTime= false;
            },
            cancelBubbleEv(ev) {
                ev.cancelBubble = true;
            },
            onChange(ev) {
                this.$store.dispatch('onUIChange', ev);
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


