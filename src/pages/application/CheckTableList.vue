<template>
    <div class="table-content" :style="{'width': tableW, 'overflow-x': 'auto'}">
        <table>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" @click="checkedAll" v-model="allChecked"/>
                    </th>
                    <th v-for="item of data.thead" v-html="item"/>
                </tr>
            </thead>
            
            <template v-if="data.list && data.list.length">
                <tbody v-if="CASEASSIGNMENTFIRST">
                    <tr v-for="item in data.list" :key="item._id">
                        <td>
                            <input type="checkbox" v-model="id" :value="item._id"/>
                        </td>
                        <td>{{item._id}}</td>
                        <td>xxxxxx</td>
                        <td>{{item.validTime}}</td>
                        <td>{{item.modifyDate}}</td>
                        <td>{{item.hot}}</td>
                        <td>{{item.modifyDate}}</td>
                        <td>{{item._id}}</td>
                        <td>{{item.validTime}}</td>
                        <td>{{item.modifyDate | dateFormat}}</td>
                        <td>{{item.hot}}</td>
                    </tr>
                </tbody>

                
                <tbody v-if="CASEASSIGNMENTFIRST_REVIEW">
                    <tr v-for="item in data.list" :key="item._id">
                        <td>
                            <input type="checkbox" v-model="id" :value="item._id"/>
                        </td>
                        <td>{{item._id}}</td>
                        <td>xxxxxx</td>
                        <td>{{item.modifyDate}}</td>
                        <td>{{item._id}}</td>
                    </tr>
                </tbody>
            </template>


            <div v-else>
                <p>no record</p>
            </div>
        </table>
    </div>
</template>

<script>
    import {calculateClientWidth} from '~/utils/helper';
    export default {
        data() {
            return {
                allChecked: false,
                id: [],
                tableW: ''
            }
        },
        props: [
            'data',
            'CASEASSIGNMENTFIRST',
            'CASEASSIGNMENTFIRST_REVIEW'
        ],

        methods: {
            checkedAll() {
                if(!this.allChecked) {
                    this.data.list.map(item=> {
                        this.id.push(item._id);
                    });
                } else {
                    this.id = [];
                }
            },
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
        }
    }


</script>