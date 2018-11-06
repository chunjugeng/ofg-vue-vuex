<template>
    <div class="table-content">

        <div class="scroll" :style="{'width': tableW}">
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of data.thead">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody v-if="DEPOSIT">
                        <tr v-for="item in data.list" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                        </tr>
                    </tbody>

                    <tbody v-if="LOAN">
                        <tr v-for="item in data.list" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                        </tr>
                    </tbody>

                    <tbody v-if="BONUS">
                        <tr v-for="item in data.list" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>{{item._id}}</td>
                            <td>xxxxxx</td>
                            <td>{{item.validTime}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.modifyDate}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.modifyDate | money(2)}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.hot}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                            <td>{{item.createDate | dateFormat}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import {calculateClientWidth} from '~/utils/helper';
    export default {
        props: ['data', 'DEPOSIT', 'LOAN', 'BONUS'],
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
    }
</script>

<style lang="sass">
    .finance {
        .table {
            .title {
                padding: 15px;
                text-align: right;
                & > div {
                    display: inline-block;
                    &.left {
                        float: left;
                        h5 {
                            display: inline-block;
                        }
                    }
                    &.right {
                        
                    }
                }
            }
        }
        .table-content {
            border-radius: 3px;
            background: #ffffff;
            .scroll {
            }
            .table {
                overflow-x: auto;
                white-space: nowrap;
                
                table {
                    
                    border-spacing: 0;
                    border-collapse: collapse;

                    th, td {
                        border: 1px solid #d2d6de;
                        padding: 10px 5px;
                    }

                    thead {
                        tr {
                            th {
                            }
                        }
                    }
                }
            }
        }
    }
    
    
</style>