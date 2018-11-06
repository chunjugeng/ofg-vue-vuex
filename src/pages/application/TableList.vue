<template>
    <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}">
        <table>
            <thead>
                <tr>
                    <th v-for="item of data.thead" v-html="item">
                        
                    </th>
                </tr>
            </thead>
            <tbody v-if="ALLREVIRECASES">
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
    import {calculateClientWidth} from '~/utils/helper';
    export default {

        data() {
            return {
                tableW: ''
            }
        },

        methods: {
            scrollTableW() {
                this.tableW = calculateClientWidth();
            }
        },
        
        mounted() {
            const that = this;
            this.scrollTableW();
            window.onresize = function() {
                that.scrollTableW();
            };
        },

        props: [
            'data',
            'ALLREVIRECASES'
        ]
    }
</script>