<template>
    <base-body
        :parent="parentProps"
        type="BONUSISSUE"
    >
        <template>
            <tbody>
                <tr v-for="item in tableList" :key="item._id">
                    <td>sasasa</td>
                    <td>{{item._id}}</td>
                    <td>xxxxxx</td>
                    <td>{{item.validTime}}</td>
                    <td>{{item.modifyDate}}</td>
                            
                </tr>
            </tbody>
        </template>
    </base-body/>
</template>

<script>
    import {mapState} from 'vuex';
    // import systemReportService from '~/service/system';
    import BaseBody from './BaseBody.vue';
    
    export default {
        data() {
            return {
                parentProps: {
                    title: 'Bonus Issue',
                    tableThead: ['Setting ID', 'Key', 'Value', 'UpdateTime', 'CreateTime'],
                }
            }
        },
        computed: {
            ...mapState('systemReport/finance', {
                tableList: state=> state.tableList
            })
        },
        methods: {
            
        },
        components: {
            BaseBody
        }
    }
</script>