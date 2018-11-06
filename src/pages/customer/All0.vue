<template>
    <div class="wrapper app">
        <div class="flex-nav">
            <nav-route />
        </div>
        <div class="flex-content">
            <a class="fa fa-adjust"></a>
            <calendar-input  />
            <div class="table-list">
                <p>test computed {{name}} </p>
                <table-list :data="loadCustomer" />
                <pager 
                    :pager="loadCustomerPager" 
                    v-if="loadCustomerPager.totalRecords"
                    :onChangePage='page => changePage(page, loadCustomerPager)'
                />
            </div>
        </div>
    </div>    
</template>

<style lang="scss">
    .wrapper {
        .flex-content {
            .test-calendar {
                
            }
            .table-list {
                background-color: white;
                .pager {
                    text-align: center;
                }
            }
        }
    }
</style>

<script>
    import Calendar from '~/common/Calendar.vue';
    import TableList from '~/common/TableList.vue';
    import Pager from '~/common/Pager.vue';
    import {mapState, mapGetters} from 'vuex';
    import CalendarInput from '~/common/Calendar-input.vue';
    export default {
        data: function() {
            return {
                first: 'li',
                last: 'jian'
            }
        },
        methods: {
            changePage(page) {
                this.$store.dispatch('queryLoadCustomer', page);
            }
        },
        computed: {
            name: {
                get() {
                    return this.first + ' ' + this.last;
                },
                set: function(val) {
                    const nameArr = val.split(' ');
                    this.first = nameArr[0];
                    this.last = nameArr[1];
                }
            },
            ...mapState({
                loadCustomerPager: state=> state.all.loadCustomerPager,
                loadCustomer: state=> state.all.loadCustomer,
            })
        },
        created() {
            this.$store.dispatch('init');
            this.name = 'zhang wan';
            // this.loadCustomerPager = this.$store.state.all.loadCustomerPager;
        },
        
        mounted() {
            
        },

        components: {
            
            TableList,
            Calendar,
            CalendarInput,
            Pager
        },
    }   
</script>


