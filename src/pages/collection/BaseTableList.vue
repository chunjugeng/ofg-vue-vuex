<template>
    <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}">
        <table>
            <thead>
                <tr>
                    <th v-for="item of data.thead" v-html="item">
                    </th>
                </tr>
            </thead>
            <tbody v-if="type ==='CURRENT'">
                <tr v-for="item in data.list">
                    <td>{{item._id}}</td>
                    <td>xxxxxx</td>
                    <td>{{item.validTime}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.hot}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.modifyDate | dateFormat}}</td>
                    <td>{{item.modifyDate | money(2)}}</td>
                    <td>{{item.modifyDate | money(2)}}</td>
                    <td>{{item.hot}}</td>
                    <td>{{item.createDate | dateFormat}}</td>
                    <td>{{item.createDate | dateFormat}}</td>
                </tr>
            </tbody>

            <tbody v-if="type==='OVERDUE'">
                <tr v-for="item in data.list">
                    <td>{{item._id}}</td>
                    <td>xxxxxx</td>
                    <td>{{item.validTime}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.hot}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.modifyDate | dateFormat}}</td>
                    <td>{{item.modifyDate | money(2)}}</td>
                    <td>{{item.modifyDate | money(2)}}</td>
                    <td>{{item.hot}}</td>
                    <td>{{item.createDate | dateFormat}}</td>
                </tr>
            </tbody>

            <tbody v-if="type==='PART'">
                <tr v-for="item in data.list">
                    <td>{{item._id}}</td>
                    <td>xxxxxx</td>
                    <td>{{item.validTime}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.hot}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.modifyDate | dateFormat}}</td>
                    <td>{{item.modifyDate | money(2)}}</td>
                    <td>{{item.modifyDate | money(2)}}</td>
                    <td>{{item.hot}}</td>
                    <td>{{item.createDate | dateFormat}}</td>
                </tr>
            </tbody>

            <tbody v-if="type==='REDUCE'">
                <tr v-for="item in data.list">
                    <td>{{item._id}}</td>
                    <td>xxxxxx</td>
                    <td>{{item.validTime}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.hot}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.modifyDate | dateFormat}}</td>
                    <td>{{item.modifyDate | money(2)}}</td>
                    <td>{{item.modifyDate | money(2)}}</td>
                    <td>{{item.hot}}</td>
                    <td>{{item.createDate | dateFormat}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        props: [
            'data',
            'type'
        ],
        computed: {
            ...mapState('nav', {
                tableW: state=> state.tableW
            })
        },
        
        mounted() {
            const that = this;
            this.$store.dispatch('nav/calculateTableW');
            window.onresize = function() {
                this.$store.dispatch('nav/calculateTableW');
            };
        },

        
    }
</script>