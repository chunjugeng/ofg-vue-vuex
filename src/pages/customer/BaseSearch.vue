<template>
    <div class="search-com">
        <div class="default">
            <span class="fa fa-phone"/>
            <input type="text" name="mobile" placeholder="Mobile" :value="params.mobile" @change="changeUI"/>
        </div>
        <template v-if="type==='ALL'">
            <div class="default">
                <span class="fa fa-user"/>
                <input type="text" name="realName" placeholder="Real Name" :value="params.realName" @change="changeUI"/>
            </div>

            <div class="default">
                <span class="fa fa-id-card"/>
                <input type="text" name="ktp" placeholder="KTP" :value="params.ktp" @change="changeUI"/>
            </div>

            <div class="default select">
                <span>Status</span>
                <select :value="params.status" @change="changeUI" name="status">
                    <option value="">请选择...</option>
                    <option>CREATED</option>
                    <option>ACTIVE</option>
                    <option>HOLD</option>
                    <option>DISABLED</option>
                </select>
            </div>

            <time-input
                :props="params"
                :register="true"
                :getTime="getTime"
            />
        </template>
        

        <div class="query-btn">
            <button @click="onQuery">Query</button>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import TimeInput from '~/common/TimeInput.vue';
    export default {
        props: [
            'type',
            'props'
        ],
        computed: {
            ...mapState('customer', {
                params: state=> state.search,
            })
        },

        methods: {
            changeUI(ev) {
                this.$store.dispatch('customer/changeUI', ev);
            },
            onQuery() {
                this.$store.dispatch('customer/onQuery', this.type);
            },
            getTime(params) {
                this.$store.dispatch('customer/getTime', params);
            }
        },
        components: {
            TimeInput
        }
       
    }
</script>


