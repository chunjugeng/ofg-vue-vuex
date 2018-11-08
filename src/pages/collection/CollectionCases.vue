<template>
    <div class="tab-component">
        <h1>Call Record</h1>

        <div class="collection-cases">
            <tabs 
                :nav="nav"
                :changeNav="changeNav"
            />
            
            <base-body
                :type="currType"
            />
        </div>
        
    </div>
</template>


<script>
    import {mapState} from 'vuex';
    import BaseBody from './Body.vue';
    import Tabs from './Tabs.vue';
    export default {
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState('collection', {
                currType: state=> state.currType,
                nav: state=> state.nav,
                pager: state=> state.pager,
            })
        },
        methods: {
            async changeNav(type) {
                await this.$store.dispatch('collection/changeNav', type);
                this.$store.dispatch('initPage', this.pager)
            }
        },
        
        components: {
            BaseBody,
            Tabs,
        }
    }
</script>
<style lang="sass">
    @import '~/styles/tab.scss';
    .tab-component {
        margin-top: 70px;
    }
    .collection-cases {
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        border-top: 3px solid #00a65a;
        border-radius: 3px;
        background-color: white;
        .page-content {
            margin-top: 0;
            border-top: 1px solid #ddd;
            h1 {
                margin: 0;
                height: 0;
            }
            .table-list {
                margin: 0;
            }
        }
    }
</style>