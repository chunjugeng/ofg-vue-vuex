<template>
    <div class="search-com">
        <template v-if="type==='ALL'">
            <div class="default">
                <span class="fa fa-info"/>
                <input type="text" name="id" placeholder="Customer ID"/>
            </div>
            <div class="default">
                <span class="fa fa-phone"/>
                <input type="text" name="mobile" placeholder="Customer Mobile"/>
            </div>
            <div class="default">
                <span class="fa fa-user"/>
                <input type="text" name="realName" placeholder="Customer Name"/>
            </div>

            <div class="default">
                <span class="fa fa-id-card"/>
                <input type="text" name="aadhaar" placeholder="Aadhaar Number"/>
            </div>
            <div class="default">
                <span class="fa fa-id-card"/>
                <input type="text" name="panCode" placeholder="Pan Code"/>
            </div>

            <div class="default select">
                <span>Customer Status</span>
                <select name="status">
                    <option value="">请选择...</option>
                    <option>REGISTERED</option>
                    <option>BASIC_REVIEW</option>
                    <option>WAIT_FOR_APPLY</option>
                    <option>APPLIED</option>
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


